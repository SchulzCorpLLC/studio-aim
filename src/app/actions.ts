'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(role: string) {
  // In a real app, you'd validate credentials against a database here.
  // For this demo, we'll just create a session cookie.
  
  const sessionData = { isAuthenticated: true, role: role };
  
  cookies().set('session', JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });

  // Redirect based on the role selected on the login page
  switch (role) {
    case 'crew':
      redirect('/crew');
      break;
    case 'admin':
      redirect('/admin');
      break;
    case 'client':
    default:
      redirect('/');
      break;
  }
}

export async function logout() {
  cookies().delete('session');
  redirect('/login');
}
