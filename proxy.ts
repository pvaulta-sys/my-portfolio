import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale, isLocale } from '@/lib/locale';

function getLocale(request: NextRequest): string {
  const cookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const acceptLang = request.headers.get('Accept-Language');
  if (acceptLang) {
    const preferred = acceptLang.split(',')[0]?.split('-')[0];
    if (preferred && isLocale(preferred)) return preferred;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const locale = getLocale(request);
  const response = NextResponse.next();

  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: ['/((?!_next|api|favicon|sw\\.js|feed\\.xml|sitemap\\.xml|robots\\.txt|security\\.txt|manifest\\.webmanifest|images|fonts|opengraph-image).*)'],
};
