// [Category B: Functional / Logic]
const rateLimit = new Map();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 20;  // per IP per window

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip) || { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) {
    rateLimit.set(ip, { count: 1, start: now });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) return true;
  entry.count++;
  rateLimit.set(ip, entry);
  return false;
}

export default async function handler(req, res) {
  const forwarded = req?.headers?.['x-forwarded-for'];
  const ip = (typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req?.socket?.remoteAddress) ?? 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const SHEET_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRuKXRoldf0arwdSvlNVUPwndJDlvzsUQTmHR1fjplSrjOoz2Wya-8UwNQAPjlamjopk8iXyACCJVa0/pub?output=csv';

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(SHEET_URL, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!response.ok) {
      return res.status(502).json({ error: 'upstream error' });
    }
    const csv = await response.text();
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=60');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).send(csv);
  } catch (err) {
    console.error('[reviews API]', err.message || 'Unknown error');
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    clearTimeout(timeout);
  }
}

