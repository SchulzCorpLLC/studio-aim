import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function getRoleBasedRedirect(role: string, request: NextRequest, hasCompletedOnboarding?: boolean) {
  switch (role) {
    case 'admin':
      return NextResponse.redirect(new URL('/admin', request.url));
    case 'crew':
      return NextResponse.redirect(new URL('/crew', request.url));
    case 'client':
    default:
      // For clients, check onboarding status
      if (hasCompletedOnboarding === false) {
        return NextResponse.redirect(new URL('/request-quote', request.url));
      }
      return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');
  const { pathname } = request.nextUrl;

  // Define public paths that don't require authentication
  const publicPaths = ['/login', '/signup', '/forgot-password'];

  // If there's no session, protect non-public routes
  if (!session) {
    if (publicPaths.includes(pathname)) {
      return NextResponse.next();
    }
    // For any other path, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If there IS a session, handle redirects and authorization for authenticated users
  try {
    const sessionData = JSON.parse(session.value);
    const role = sessionData.role;
    const hasCompletedOnboarding = sessionData.hasCompletedOnboarding;

    // Redirect logged-in users away from public auth pages
    if (pathname === '/login' || pathname === '/signup') {
      return getRoleBasedRedirect(role, request, hasCompletedOnboarding);
    }
    
    // Handle root route redirects for authenticated users
    if (pathname === '/') {
      return getRoleBasedRedirect(role, request, hasCompletedOnboarding);
    }
    
    // Authorization: Role-based access control
    // Prevent non-admins from accessing admin routes
    if (pathname.startsWith('/admin') && role !== 'admin') {
      return getRoleBasedRedirect(role, request, hasCompletedOnboarding);
    }
    
    // Prevent non-crew from accessing crew routes
    if (pathname.startsWith('/crew') && role !== 'crew') {
      return getRoleBasedRedirect(role, request, hasCompletedOnboarding);
    }

    // Handle client-specific routing logic
    if (role === 'client') {
      // If client hasn't completed onboarding, only allow access to onboarding-related routes
      if (hasCompletedOnboarding === false) {
        const allowedPaths = ['/request-quote', '/onboarding'];
        if (!allowedPaths.includes(pathname)) {
          return NextResponse.redirect(new URL('/request-quote', request.url));
        }
      } else {
        // If client has completed onboarding, prevent access to onboarding routes
        if (pathname === '/request-quote' || pathname === '/onboarding') {
          return NextResponse.redirect(new URL('/dashboard', request.url));
        }
      }
    }

    // Prevent admin/crew from accessing client-only routes
    const isClientRoute = !pathname.startsWith('/admin') && !pathname.startsWith('/crew') && !publicPaths.includes(pathname);
    if (isClientRoute && role !== 'client') {
       return getRoleBasedRedirect(role, request, hasCompletedOnboarding);
    }

  } catch (error) {
    // If the cookie is malformed, it's safest to treat the user as logged out.
    // We'll redirect to login and clear the bad cookie.
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('session');
    return response;
  }

  // If all checks pass, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  // Match all paths except for API routes, static files, and image optimization files.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
