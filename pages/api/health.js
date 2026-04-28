export default function handler(req, res) {
  const requestId = req.headers['x-request-id'] || 'missing';
  const nowIso = new Date().toISOString();

  res.status(200).json({
    ok: true,
    service: 'therapy-new',
    env: process.env.NODE_ENV || 'unknown',
    now: nowIso,
    requestId,
  });
}
