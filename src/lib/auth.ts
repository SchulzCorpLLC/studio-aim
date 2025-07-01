import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export interface SessionData {
  isAuthenticated: boolean;
  role: 'client' | 'crew' | 'admin';
  email?: string;
  hasCompletedOnboarding?: boolean;
  userId?: string;
}

/**
 * Get the current session data from cookies
 * Returns null if no session exists or if session is invalid
 */
export async function getSession(): Promise<SessionData | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session');
    if (!sessionCookie) return null;
    
    const sessionData = JSON.parse(sessionCookie.value) as SessionData;
    return sessionData;
  } catch (error) {
    console.error('Error parsing session cookie:', error);
    return null;
  }
}

/**
 * Set session data in cookies with secure settings
 * Used for both login and session updates
 */
export async function setSession(sessionData: SessionData) {
  const cookieStore = await cookies();
  cookieStore.set('session', JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });
}

/**
 * Clear session data (logout)
 */
export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

/**
 * Get the appropriate redirect URL based on user role and onboarding status
 * 
 * Client Flow:
 * - If hasCompletedOnboarding is false: redirect to /request-quote (first-time users)
 * - If hasCompletedOnboarding is true: redirect to /dashboard (returning users)
 * 
 * Crew Flow: redirect to /crew
 * Admin Flow: redirect to /admin
 */
export function getRoleBasedRedirectUrl(role: string, hasCompletedOnboarding?: boolean): string {
  switch (role) {
    case 'admin':
      return '/admin';
    case 'crew':
      return '/crew';
    case 'client':
    default:
      // For clients, check if they've completed onboarding
      if (hasCompletedOnboarding === false) {
        return '/request-quote';
      }
      return '/dashboard';
  }
}

/**
 * Authenticate user and redirect based on role and onboarding status
 * This is the main authentication function used by login/signup actions
 */
export async function authenticateUser(role: string, email: string, hasCompletedOnboarding?: boolean) {
  const sessionData: SessionData = {
    isAuthenticated: true,
    role: role as 'client' | 'crew' | 'admin',
    email,
    hasCompletedOnboarding,
    userId: `user_${Date.now()}`, // In a real app, this would be from the database
  };
  
  await setSession(sessionData);
  
  const redirectUrl = getRoleBasedRedirectUrl(role, hasCompletedOnboarding);
  redirect(redirectUrl);
}

/**
 * Mark user as having completed onboarding
 * Called after the user submits the quote request form
 */
export async function markOnboardingComplete() {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }
  
  const updatedSession: SessionData = {
    ...session,
    hasCompletedOnboarding: true,
  };
  
  await setSession(updatedSession);
} 