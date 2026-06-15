// Task 16: Tests for pages/api/reviews.js
import handler from '../reviews';

const originalFetch = global.fetch;

describe('GET /api/reviews', () => {
  let req, res;

  beforeEach(() => {
    req = { method: 'GET' };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
      setHeader: jest.fn(),
    };
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('returns 200 with CSV data on successful fetch', async () => {
    const mockCsv = 'name,review,rating\nAlice,Great,FIVE';
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(mockCsv),
    });

    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(mockCsv);
    expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'text/csv; charset=utf-8');
  });

  it('returns 500 with generic message when fetch fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Timeout'));
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    const body = res.json.mock.calls[0][0];
    expect(body.error).toBe('Internal server error');
    // Must NOT contain stack trace
    expect(body.stack).toBeUndefined();
  });

  it('returns 405 for non-GET methods', async () => {
    req.method = 'POST';
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });

  it('returns 502 when upstream returns non-ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 503 });
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(502);
  });
});
