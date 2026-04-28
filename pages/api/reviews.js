export default async function handler(req) {
  const SHEET_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRuKXRoldf0arwdSvlNVUPwndJDlvzsUQTmHR1fjplSrjOoz2Wya-8UwNQAPjlamjopk8iXyACCJVa0/pub?output=csv';
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'upstream error' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const csv = await response.text();
    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
