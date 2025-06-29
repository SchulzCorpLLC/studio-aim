import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')
  const { pathname } = request.nextUrl

  // Define public routes that don't require authentication.
  // This includes login, signup, and the initial quote/onboarding flow.
  const publicPaths = ['/login', '/signup', '/forgot-password', '/dashboard-redirect', '/request-quote', '/onboarding']

  // If the user is trying to access a public path, let them through.
  if (publicPaths.includes(pathname)) {
    // But if they are already logged in, redirect them from login/signup to the dashboard.
    if (session && (pathname === '/login' || pathname === '/signup')) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }

  // If there's no session and the user is trying to access a protected route,
  // redirect them to the login page.
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  // If the session exists and the route is not public, allow the request.
  return NextResponse.next()
}

export const config = {
  // Match all paths except for API routes, static files, and image optimization files.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
