import { redirect } from 'react-router-dom';

export async function requireAuth(request) {
  const isLoggedIn = JSON.parse(sessionStorage.getItem('auth')) || false;
  const pathname = new URL(request.url).pathname;

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=Please login to continue&redirectTo=${pathname}`
    );
  }
}
