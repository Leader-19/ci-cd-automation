import { NextRequest, NextResponse } from 'next/server';
import { locales } from './lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = locales.find((item) => pathname === `/${item}` || pathname.startsWith(`/${item}/`));

  if (!locale) {
    const url = request.nextUrl.clone();
    const preferred = request.cookies.get('NEXT_LOCALE')?.value;
    const fallback = preferred === 'km' ? 'km' : 'en';
    url.pathname = `/${fallback}${pathname}`;
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  const route = pathname.slice(locale.length + 1) || '/';
  url.pathname = route;
  const response = NextResponse.rewrite(url);
  response.cookies.set('NEXT_LOCALE', locale, { path: '/', sameSite: 'lax' });
  return response;
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
