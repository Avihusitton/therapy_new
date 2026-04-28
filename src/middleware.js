import { NextResponse } from 'next/server';

export function middleware(request) {
  const isDev = process.env.NODE_ENV !== 'production';
  const existingRequestId = request.headers.get('x-request-id');
  const cfRay = request.headers.get('cf-ray');
  const requestId =
    existingRequestId ||
    cfRay ||
    `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

  const cspHeader = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'" + (isDev ? " 'unsafe-eval'" : "") + " https://cdn.userway.org",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "frame-src 'self' https://www.youtube.com https://youtube.com",
    "img-src 'self' blob: data: https://cdn.userway.org https://i.ytimg.com",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://api.userway.org https://hook.eu1.make.com https://docs.google.com https://api.fontshare.com https://fonts.gstatic.com https://fonts.googleapis.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join('; ');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('x-request-id', requestId);
  response.headers.set('x-monitor-env', isDev ? 'dev' : 'prod');

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
