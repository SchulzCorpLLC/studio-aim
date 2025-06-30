import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function getRoleBasedRedirect(role: string, request: NextRequest) {
  switch (role) {
    case 'admin':
      return NextResponse.redirect(new URL('/admin', request.url));
    case 'crew':
      return NextResponse.redirect(new URL('/crew', request.url));
    default:
      return NextResponse.redirect(new URL('/', request.url));
  }
}

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');
  const { pathname } = request.nextUrl;

  const publicPaths = ['/login', '/signup', '/forgot-password', '/request-quote', '/onboarding'];

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

    // Redirect logged-in users away from public auth pages
    if (pathname === '/login' || pathname === '/signup') {
      return getRoleBasedRedirect(role, request);
    }
    
    // Authorization: Role-based access control
    // Prevent non-admins from accessing admin routes
    if (pathname.startsWith('/admin') && role !== 'admin') {
      return getRoleBasedRedirect(role, request);
    }
    
    // Prevent non-crew from accessing crew routes
    if (pathname.startsWith('/crew') && role !== 'crew') {
      return getRoleBasedRedirect(role, request);
    }

    // Prevent admin/crew from accessing client-only routes
    const isClientRoute = !pathname.startsWith('/admin') && !pathname.startsWith('/crew') && !publicPaths.includes(pathname);
    if (isClientRoute && role !== 'client') {
       return getRoleBasedRedirect(role, request);
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
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|dashboard-redirect).*)'],
}
