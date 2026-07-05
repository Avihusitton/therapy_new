// [Category B: Functional / Logic]
// Hoox Webhook Endpoint — receives AI-generated blog articles
// Security: HMAC-SHA256 signature verification, content sanitization

import { createHmac, timingSafeEqual } from 'node:crypto';
import {
  sanitizeHtml,
  sanitizeJsonLd,
  escapeText,
  sanitizeSlug,
  sanitizeUrl,
} from '@/lib/sanitize';

// Disable Next.js body parser — we need the raw bytes for HMAC verification
export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * Read the raw request body as a Buffer.
 * Critical: signature is computed over raw bytes, not parsed JSON.
 */
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

/**
 * Verify HMAC-SHA256 signature using constant-time comparison.
 * Prevents timing attacks.
 */
function verifySignature(rawBody, signatureHeader, secret) {
  if (!signatureHeader || !secret) return false;

  // Expected format: "sha256=<hex>"
  const prefix = 'sha256=';
  if (!signatureHeader.startsWith(prefix)) return false;

  const receivedHex = signatureHeader.slice(prefix.length);

  const expectedHmac = createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  // Constant-time comparison to prevent timing attacks
  try {
    const receivedBuf = Buffer.from(receivedHex, 'hex');
    const expectedBuf = Buffer.from(expectedHmac, 'hex');

    if (receivedBuf.length !== expectedBuf.length) return false;

    return timingSafeEqual(receivedBuf, expectedBuf);
  } catch {
    return false;
  }
}

/**
 * Get D1 database binding from Cloudflare context.
 * Uses @opennextjs/cloudflare's getCloudflareContext for Pages Router compatibility.
 */
async function getD1() {
  try {
    const { getCloudflareContext } = await import('@opennextjs/cloudflare');
    const { env } = await getCloudflareContext();
    return env.BLOG_DB || null;
  } catch (err) {
    console.error('[hoox-webhook] Failed to get D1 binding:', err.message);
    return null;
  }
}

/**
 * Sanitize and validate the article data from Hoox payload.
 * Returns a clean article object or null if validation fails.
 */
function sanitizeArticleData(data) {
  if (!data || typeof data !== 'object') return null;

  // Required fields
  if (!data.id || typeof data.id !== 'string') return null;
  if (!data.title || typeof data.title !== 'string') return null;
  if (!data.slug || typeof data.slug !== 'string') return null;

  const slug = sanitizeSlug(data.slug);
  if (!slug) return null;

  return {
    id: escapeText(data.id.slice(0, 255)),
    title: escapeText(data.title.slice(0, 500)),
    slug: slug.slice(0, 255),
    content_html: sanitizeHtml(data.content_html || ''),
    content_markdown: typeof data.content_markdown === 'string'
      ? data.content_markdown.slice(0, 500000)
      : '',
    meta_description: escapeText((data.meta_description || '').slice(0, 500)),
    focus_keyword: escapeText((data.focus_keyword || '').slice(0, 255)),
    featured_image_url: sanitizeUrl(data.featured_image_url || ''),
    tags: Array.isArray(data.tags)
      ? JSON.stringify(data.tags.map(t => escapeText(String(t).slice(0, 100))).slice(0, 50))
      : '[]',
    author: escapeText((data.author || '').slice(0, 255)),
    published_at: typeof data.published_at === 'string'
      ? data.published_at.slice(0, 50)
      : new Date().toISOString(),
    json_ld: sanitizeJsonLd(data.json_ld || ''),
  };
}

export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 1. Read raw body BEFORE any parsing
    const rawBody = await getRawBody(req);

    // 2. Verify HMAC-SHA256 signature
    const secret = process.env.HOOX_WEBHOOK_SECRET;
    if (!secret) {
      console.error('[hoox-webhook] HOOX_WEBHOOK_SECRET not configured');
      return res.status(500).json({ error: 'Webhook not configured' });
    }

    const signature = req.headers['x-hoox-signature'];
    if (!verifySignature(rawBody, signature, secret)) {
      console.warn('[hoox-webhook] Invalid signature — request rejected');
      return res.status(401).json({ error: 'Invalid signature' });
    }

    // 3. Parse JSON only after verification passes
    let payload;
    try {
      payload = JSON.parse(rawBody.toString('utf-8'));
    } catch {
      return res.status(400).json({ error: 'Invalid JSON' });
    }

    // 4. Validate event type
    if (payload.event !== 'article.published') {
      // Acknowledge unknown events gracefully
      return res.status(200).json({ received: true, skipped: true });
    }

    // 5. Sanitize article data
    const article = sanitizeArticleData(payload.data);
    if (!article) {
      console.error('[hoox-webhook] Invalid article data — missing required fields');
      return res.status(400).json({ error: 'Invalid article data' });
    }

    // 6. Upsert to D1 (dedup by id — Hoox retries on failure)
    const db = await getD1();
    if (!db) {
      console.error('[hoox-webhook] D1 database not available');
      return res.status(503).json({ error: 'Database not available' });
    }

    await db.prepare(`
      INSERT INTO articles (id, title, slug, content_html, content_markdown,
        meta_description, focus_keyword, featured_image_url, tags, author,
        published_at, json_ld, updated_at)
      VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, datetime('now'))
      ON CONFLICT(id) DO UPDATE SET
        title = excluded.title,
        slug = excluded.slug,
        content_html = excluded.content_html,
        content_markdown = excluded.content_markdown,
        meta_description = excluded.meta_description,
        focus_keyword = excluded.focus_keyword,
        featured_image_url = excluded.featured_image_url,
        tags = excluded.tags,
        author = excluded.author,
        published_at = excluded.published_at,
        json_ld = excluded.json_ld,
        updated_at = datetime('now')
    `)
      .bind(
        article.id,
        article.title,
        article.slug,
        article.content_html,
        article.content_markdown,
        article.meta_description,
        article.focus_keyword,
        article.featured_image_url,
        article.tags,
        article.author,
        article.published_at,
        article.json_ld
      )
      .run();

    // 7. Return immediately — heavy work (cache busting, etc.) would go async
    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[hoox-webhook] Unhandled error:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
