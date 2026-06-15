// Task 15: Tests for pages/api/contact.js
import handler from '../contact';

// Mock fetch globally
const originalFetch = global.fetch;

describe('POST /api/contact', () => {
  let req, res;

  beforeEach(() => {
    req = {
      method: 'POST',
      headers: { origin: 'https://avihusitton.com' },
      body: {
        full_name: 'Test User',
        phone: '0541234567',
        _t: Date.now() - 5000, // 5 seconds ago
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    process.env.MAKE_WEBHOOK_URL = 'https://hook.test.com/webhook';
    global.fetch = jest.fn().mockResolvedValue({ ok: true });
  });

  afterEach(() => {
    global.fetch = originalFetch;
    delete process.env.MAKE_WEBHOOK_URL;
  });

  it('returns 200 on valid submission', async () => {
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ ok: true });
  });

  it('returns 405 for non-POST methods', async () => {
    req.method = 'GET';
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });

  it('silently accepts when honeypot is filled (bot trap)', async () => {
    req.body.website = 'http://spam.com';
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    // Should NOT have called external fetch
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('returns 403 for unauthorized origins', async () => {
    req.headers.origin = 'https://evil.com';
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(403);
  });

  it('returns 500 with generic message when webhook fails (no stack trace)', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    const body = res.json.mock.calls[0][0];
    expect(body.error).not.toContain('Network error');
    expect(body.error).not.toContain('stack');
    expect(body.error).toBe('שגיאה בשליחת הטופס. נסה שוב מאוחר יותר.');
  });

  it('returns generic error when upstream returns non-ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 503 });
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(502);
    const body = res.json.mock.calls[0][0];
    expect(body.error).toBe('שגיאה בשליחת הטופס. נסה שוב מאוחר יותר.');
  });
});
