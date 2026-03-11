import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET)

export async function middleware (request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value
  const { pathname } = request.nextUrl

  let isAuthenticated = false
  if (token) {
    try {
      await jwtVerify(token, SECRET_KEY)
      isAuthenticated = true
    } catch (e) {
      isAuthenticated = false
    }
  }

  if (pathname.startsWith('/admin') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login']
}
