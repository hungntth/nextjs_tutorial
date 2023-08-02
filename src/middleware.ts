import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request
  const { value: token } = cookies.get('token') ?? { value: null }
  const pathname = nextUrl.pathname

  if (!!token && (pathname === '/' || pathname === '/sso-callback')) {
    return NextResponse.redirect(new URL('/dashboard', url))
  }

  if (!token && pathname !== '/coding' && pathname !== '/' && pathname !== '/sso-callback') {
    return NextResponse.redirect(new URL('/', url))
  }

  if (pathname === '/logout') {
    return NextResponse.redirect(new URL('/', url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more

export const config = { matcher: ['/', '/dashboard', '/coding/:path*', '/sso-callback', '/logout'] }
