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
      redirect('/request-quote');
      break;
  }
}

export async function signup(role: string) {
  // In a real app, you'd create a user in the database here.
  // For this demo, we'll just create a session cookie like in login.
  const sessionData = { isAuthenticated: true, role: role };
  
  cookies().set('session', JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });

  // Redirect based on the role selected on the signup page
  switch (role) {
    case 'crew':
      redirect('/crew');
      break;
    case 'admin':
      redirect('/admin');
      break;
    case 'client':
    default:
      redirect('/request-quote');
      break;
  }
}

export async function logout() {
  cookies().delete('session');
  redirect('/login');
}
