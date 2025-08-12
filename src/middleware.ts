import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';


const i18nMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest): Promise<Response | NextResponse> {
  const { pathname, origin } = req.nextUrl;

    if (pathname === '/signin') {
    return NextResponse.next();
  }

  // 1. Если это админка — проверяем авторизацию
  if (pathname.startsWith('/admin')) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      const loginUrl = new URL('/signin', origin);
      return Response.redirect(loginUrl);
    }
  }

  // 2. Если это не админка или авторизован — выполняем i18n
  return i18nMiddleware(req);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}