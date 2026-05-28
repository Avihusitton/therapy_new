// [Category B: Functional / Logic]

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { website, source_token, ...rest } = req.body || {};

    // 1. Server-side Honeypot validation
    if (website) {
      console.warn("Server-side honeypot triggered");
      // Silently return success to mislead the bot
      return res.status(200).json({ ok: true, message: 'Form submitted successfully' });
    }

    // 2. Validate source_token against MAKE_TOKEN
    const makeToken = process.env.MAKE_TOKEN;
    if (!source_token || source_token !== makeToken) {
      console.error("Invalid source token received");
      return res.status(403).json({ error: 'Forbidden' });
    }

    // 3. Forward the payload to Make.com Webhook
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("Missing MAKE_WEBHOOK_URL environment variable");
      return res.status(500).json({ error: 'Internal configuration error' });
    }

    const response = await fetch(webhookUrl, {
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
      return res.status(response.status).json({ error: 'Forwarding to webhook failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error in contact API handler:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
