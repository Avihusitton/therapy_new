// Task 14: Tests for pages/api/health.js
import handler from '../health';

describe('GET /api/health', () => {
  let req, res;

  beforeEach(() => {
    req = { method: 'GET' };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  it('returns 200 with status ok', () => {
    handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    const body = res.json.mock.calls[0][0];
    expect(body.status).toBe('ok');
    expect(body.timestamp).toBeDefined();
  });

  it('response body contains { status: "ok" }', () => {
    handler(req, res);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ status: 'ok' })
    );
  });

  it('returns 200 regardless of method (health has no method guard)', () => {
    // health.js currently has no method guard — any method returns 200
    req.method = 'POST';
    handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
