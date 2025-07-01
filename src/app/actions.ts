'use server';

import { authenticateUser, clearSession, getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function login(role: string, email: string = 'test@example.com') {
  // In a real app, you'd validate credentials against a database here.
  // For this demo, we'll simulate different onboarding states based on email
  
  // Simulate different user states for demo purposes
  let hasCompletedOnboarding: boolean | undefined;
  
  if (email.includes('new')) {
    // New users haven't completed onboarding
    hasCompletedOnboarding = false;
  } else if (email.includes('returning')) {
    // Returning users have completed onboarding
    hasCompletedOnboarding = true;
  } else {
    // Default: simulate a mix of users
    hasCompletedOnboarding = Math.random() > 0.3; // 70% have completed onboarding
  }
  
  await authenticateUser(role, email, hasCompletedOnboarding);
}

export async function signup(role: string, email: string = 'new@example.com') {
  // In a real app, you'd create a user in the database here.
  // For signup, users typically haven't completed onboarding yet
  const hasCompletedOnboarding = false;
  
  await authenticateUser(role, email, hasCompletedOnboarding);
}

export async function logout() {
  await clearSession();
  redirect('/login');
}

/**
 * Mark the current user as having completed onboarding
 * This should be called after the user completes the quote request form
 */
export async function completeOnboarding() {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }
  
  // Update session to mark onboarding as complete
  const updatedSession = {
    ...session,
    hasCompletedOnboarding: true,
  };
  
  // In a real app, you'd also update the user record in the database
  // For now, we'll just redirect to the dashboard
  redirect('/dashboard');
}
