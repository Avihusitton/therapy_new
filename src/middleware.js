import { NextResponse } from 'next/server';

export function middleware(request) {
  const cfRay = request.headers.get('cf-ray');
  const requestId =
    request.headers.get('x-request-id') ||
    cfRay ||
    `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

  console.log(JSON.stringify({
    event: 'request',
    requestId,
    cfRay,
    method: request.method,
    url: request.url,
    ts: new Date().toISOString(),
  }));

  const response = NextResponse.next();

  response.headers.set('x-request-id', requestId);
  response.headers.set('x-monitor-env', 'production');

  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
