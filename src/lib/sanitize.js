// [Category B: Functional / Logic]
// Sanitization utilities for external content (Hoox webhook)
// Prevents XSS when rendering user-supplied HTML and JSON-LD

/**
 * Sanitize HTML content — removes dangerous elements while preserving
 * safe formatting tags used in blog articles.
 */
export function sanitizeHtml(html) {
  if (!html || typeof html !== 'string') return '';

  let clean = html;

  // Remove <script> tags and their content
  clean = clean.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Remove <iframe> tags
  clean = clean.replace(/<iframe[\s\S]*?<\/iframe>/gi, '');
  clean = clean.replace(/<iframe[\s\S]*?\/?>/gi, '');

  // Remove <object>, <embed>, <applet> tags
  clean = clean.replace(/<(object|embed|applet)[\s\S]*?<\/\1>/gi, '');
  clean = clean.replace(/<(object|embed|applet)[\s\S]*?\/?>/gi, '');

  // Remove <form> tags (prevent phishing)
  clean = clean.replace(/<form[\s\S]*?<\/form>/gi, '');

  // Remove on* event handler attributes (onclick, onerror, onload, etc.)
  clean = clean.replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, '');

  // Remove javascript: URLs in href/src/action attributes
  clean = clean.replace(/(href|src|action)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, '$1=""');

  // Remove data: URLs in src attributes (can be used for XSS)
  clean = clean.replace(/src\s*=\s*(?:"data:[^"]*"|'data:[^']*')/gi, 'src=""');

  // Remove <style> tags with potential CSS-based attacks
  clean = clean.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Remove <base> tags (can redirect all relative URLs)
  clean = clean.replace(/<base[\s\S]*?\/?>/gi, '');

  // Remove <meta> tags (prevent charset/refresh attacks)
  clean = clean.replace(/<meta[\s\S]*?\/?>/gi, '');

  // Remove <link> tags (prevent stylesheet injection)
  clean = clean.replace(/<link[\s\S]*?\/?>/gi, '');

  return clean.trim();
}

/**
 * Sanitize JSON-LD blocks from Hoox.
 *
 * Hoox sends raw <script type="application/ld+json"> blocks.
 * We ONLY allow valid JSON inside correctly-typed script tags.
 * Everything else is stripped.
 */
export function sanitizeJsonLd(jsonLdRaw) {
  if (!jsonLdRaw || typeof jsonLdRaw !== 'string') return '';

  const results = [];
  // Match <script type="application/ld+json"> ... </script> blocks
  const pattern = /<script\s+type\s*=\s*["']application\/ld\+json["']\s*>([\s\S]*?)<\/script>/gi;

  let match;
  while ((match = pattern.exec(jsonLdRaw)) !== null) {
    const content = match[1].trim();
    if (!content) continue;

    try {
      // Parse to verify it's valid JSON — this prevents code injection
      const parsed = JSON.parse(content);

      // Re-serialize to strip any embedded HTML or script content
      // that might have been disguised as valid JSON
      const clean = JSON.stringify(parsed);

      results.push(`<script type="application/ld+json">${clean}</script>`);
    } catch {
      // Invalid JSON — skip this block silently
      console.warn('[sanitize] Skipped invalid JSON-LD block');
    }
  }

  return results.join('\n');
}

/**
 * Sanitize a plain text string — escapes HTML special characters.
 * Use for title, author, meta_description, focus_keyword, etc.
 */
export function escapeText(text) {
  if (!text || typeof text !== 'string') return '';

  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * Sanitize a slug — only allow alphanumeric, hyphens, and underscores.
 */
export function sanitizeSlug(slug) {
  if (!slug || typeof slug !== 'string') return '';

  return slug
    .toLowerCase()
    .replace(/[^a-z0-9\u0590-\u05ff\-_]/g, '')  // Allow Hebrew chars in slug
    .replace(/-{2,}/g, '-')                       // Collapse multiple hyphens
    .replace(/^-|-$/g, '');                        // Trim leading/trailing hyphens
}

/**
 * Validate and sanitize URL — only allow http/https protocols.
 */
export function sanitizeUrl(url) {
  if (!url || typeof url !== 'string') return '';

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return '';
    }
    return parsed.href;
  } catch {
    return '';
  }
}
