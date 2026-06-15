// [Category B: Functional / Logic]

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { website, _t, ...rest } = req.body || {};

    // 1. Server-side Honeypot validation
    if (website) {
      console.warn("Server-side honeypot triggered");
      // Silently return success to mislead the bot
      return res.status(200).json({ ok: true, message: 'Form submitted successfully' });
    }

    // 2. Timing-based anti-bot check (reject submissions under 3 seconds)
    if (_t) {
      const elapsed = Date.now() - Number(_t);
      if (elapsed < 3000) {
        console.warn("Submission too fast, likely bot:", elapsed, "ms");
        return res.status(200).json({ ok: true, message: 'Form submitted successfully' });
      }
    }

    // 3. Validate request origin (replaces client-exposed source_token)
    const allowedOrigins = [
      'https://avihusitton.com',
      'https://www.avihusitton.com',
      'https://therapy-new-stage.avihusitton.com',
    ];
    if (process.env.NODE_ENV === 'development') {
      allowedOrigins.push('http://localhost:3000', 'http://localhost:3001');
    }
    const origin = req.headers.origin || req.headers.referer || '';
    const isAllowed = allowedOrigins.some(allowed => origin.startsWith(allowed));
    if (!isAllowed) {
      console.error("Request from unauthorized origin:", origin);
      return res.status(403).json({ error: 'Forbidden' });
    }

    // 4. Forward the payload to Make.com Webhook
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("Missing MAKE_WEBHOOK_URL environment variable");
      return res.status(500).json({ error: 'שגיאה בשליחת הטופס. נסה שוב מאוחר יותר.' });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(webhookUrl, {
        signal: controller.signal,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...rest,
          // Make sure we denote this is forwarded securely
          secure_forward: true
        }),
      });

      if (!response.ok) {
        console.error(`Make.com Webhook returned status ${response.status}`);
        return res.status(502).json({ error: 'שגיאה בשליחת הטופס. נסה שוב מאוחר יותר.' });
      }
    } finally {
      clearTimeout(timeout);
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[contact API]', error);
    return res.status(500).json({ error: 'שגיאה בשליחת הטופס. נסה שוב מאוחר יותר.' });
  }
}
