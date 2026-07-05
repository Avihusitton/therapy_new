// [Category B: Functional / Logic]
// Internal API for reading blog articles from D1
// Used by blog pages to fetch article data

/**
 * Get D1 database binding from Cloudflare context.
 */
async function getD1() {
  try {
    const { getCloudflareContext } = await import('@opennextjs/cloudflare');
    const { env } = await getCloudflareContext();
    return env.BLOG_DB || null;
  } catch (err) {
    console.error('[blog-articles] Failed to get D1 binding:', err.message);
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const db = await getD1();
  if (!db) {
    return res.status(503).json({ error: 'Database not available' });
  }

  try {
    const { slug } = req.query;

    if (slug) {
      // Fetch a single article by slug
      const article = await db.prepare(
        'SELECT * FROM articles WHERE slug = ?1 LIMIT 1'
      ).bind(slug).first();

      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }

      // Parse tags JSON string back to array
      if (article.tags) {
        try {
          article.tags = JSON.parse(article.tags);
        } catch {
          article.tags = [];
        }
      }

      res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=30');
      return res.status(200).json(article);
    }

    // Fetch all articles, ordered by published_at descending
    const { results } = await db.prepare(
      `SELECT id, title, slug, meta_description, focus_keyword,
              featured_image_url, tags, author, published_at
       FROM articles
       ORDER BY published_at DESC
       LIMIT 50`
    ).all();

    // Parse tags JSON string back to array for each article
    const articles = (results || []).map(a => ({
      ...a,
      tags: (() => {
        try { return JSON.parse(a.tags || '[]'); } catch { return []; }
      })()
    }));

    res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=30');
    return res.status(200).json({ articles });
  } catch (err) {
    console.error('[blog-articles] Error:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
