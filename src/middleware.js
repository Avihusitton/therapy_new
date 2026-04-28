import { NextResponse } from 'next/server';

export function middleware(request) {
  // Ultra-minimal middleware to avoid any potential runtime errors in Edge
  const requestId = request.headers.get('x-request-id') || 
                    request.headers.get('cf-ray') || 
                    'local-' + Math.random().toString(36).slice(2);

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
