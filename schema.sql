-- Cloudflare D1 Schema for Hoox Blog Articles
-- Run: wrangler d1 execute blog-db --file=schema.sql --env stage

CREATE TABLE IF NOT EXISTS articles (
  id            TEXT PRIMARY KEY,
  title         TEXT NOT NULL,
  slug          TEXT NOT NULL UNIQUE,
  content_html  TEXT,
  content_markdown TEXT,
  meta_description TEXT,
  focus_keyword TEXT,
  featured_image_url TEXT,
  tags          TEXT,            -- JSON array stored as string
  author        TEXT,
  published_at  TEXT,
  json_ld       TEXT,            -- Sanitized JSON-LD script blocks
  created_at    TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at);
