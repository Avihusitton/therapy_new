export default function handler(req, res) {
  const requestId = req.headers['x-request-id'] || 'missing';
  const cfRay = req.headers['cf-ray'] || 'missing';
  const userAgent = req.headers['user-agent'] || 'missing';
  const host = req.headers.host || 'missing';

  res.status(200).json({
    ok: true,
    requestId,
    cfRay,
    host,
    method: req.method,
    path: req.url,
    userAgent,
    now: new Date().toISOString(),
  });
}
