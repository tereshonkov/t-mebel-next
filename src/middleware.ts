import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';


const i18nMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest): Promise<Response | NextResponse> {
  return i18nMiddleware(req);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*|signin).*)'
}