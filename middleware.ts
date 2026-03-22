import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''

  if (hostname.startsWith('foxbridge.')) {
    let { pathname } = request.nextUrl

    // Skip static assets
    if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.startsWith('/favicon')) {
      return NextResponse.next()
    }

    // Strip /foxbridge prefix if present (sidebar links include it)
    if (pathname.startsWith('/foxbridge')) {
      pathname = pathname.slice('/foxbridge'.length) || '/'
    }

    // Rewrite to /foxbridge/*
    const url = request.nextUrl.clone()
    url.pathname = '/foxbridge' + pathname
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
