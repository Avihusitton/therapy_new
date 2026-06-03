// [Category B: Functional / Logic]
export default async function handler(req, res) {
  const SHEET_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRuKXRoldf0arwdSvlNVUPwndJDlvzsUQTmHR1fjplSrjOoz2Wya-8UwNQAPjlamjopk8iXyACCJVa0/pub?output=csv';
  try {
    const response = await fetch(SHEET_URL, {
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
    console.error(JSON.stringify({ route: '/api/reviews', error: err.message, stack: err.stack }));
    return res.status(500).json({ error: 'Internal server error' });
  }
}
