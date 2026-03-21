import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''

  if (hostname.startsWith('foxbridge.')) {
    const { pathname } = request.nextUrl

    // Skip static assets
    if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.startsWith('/favicon')) {
      return NextResponse.next()
    }

    // Already has /foxbridge prefix — don't double-prefix
    if (pathname.startsWith('/foxbridge')) {
      return NextResponse.next()
    }

    // Rewrite root and sub-paths to /foxbridge/*
    const url = request.nextUrl.clone()
    url.pathname = '/foxbridge' + pathname
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
