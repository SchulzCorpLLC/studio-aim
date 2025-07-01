import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect all users to login page when accessing the root route
  redirect('/login');
}
