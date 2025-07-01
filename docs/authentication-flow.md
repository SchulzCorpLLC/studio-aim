# Authentication Flow Documentation

## Overview

This document describes the authentication and routing flow implemented in the MovePortal SaaS application.

## User Roles

The application supports three user roles:
- **Client**: End users who need moving services (99% of use cases)
- **Crew**: Moving crew members who need access to job details and sign-off tools
- **Admin**: Administrative users who need access to the admin dashboard

## Authentication Flow

### 1. Initial Application Access
- When users access the root route (`/`), they are automatically redirected to `/login`
- No part of the application is accessible without authentication (except public auth pages)

### 2. Login Process
- Users fill out the login form with email, password, and role selection
- The system authenticates the user and creates a session cookie
- Based on the user's role and onboarding status, they are redirected to the appropriate portal

### 3. Role-Based Redirects

#### Client Flow (Most Common)
- **First-time users** (`hasCompletedOnboarding: false`): Redirected to `/request-quote`
- **Returning users** (`hasCompletedOnboarding: true`): Redirected to `/dashboard`

#### Crew Flow
- All crew members are redirected to `/crew` (crew portal)

#### Admin Flow
- All admin users are redirected to `/admin` (admin portal)

### 4. Onboarding Flow (Client Users Only)
- New clients start at `/request-quote` where they fill out a moving quote form
- After submitting the quote form, `hasCompletedOnboarding` is set to `true`
- Users are then redirected to `/dashboard` for all future logins

## Session Management

### Session Data Structure
```typescript
interface SessionData {
  isAuthenticated: boolean;
  role: 'client' | 'crew' | 'admin';
  email?: string;
  hasCompletedOnboarding?: boolean;
  userId?: string;
}
```

### Session Security
- Sessions are stored in HTTP-only cookies
- Secure flag is enabled in production
- Sessions expire after 7 days
- Malformed sessions are automatically cleared

## Route Protection

### Public Routes (No Authentication Required)
- `/login`
- `/signup`
- `/forgot-password`

### Protected Routes
- All other routes require authentication
- Role-based access control prevents unauthorized access
- Client users with incomplete onboarding are restricted to onboarding routes

## Middleware Logic

The middleware (`middleware.ts`) handles:
1. **Authentication checks**: Redirects unauthenticated users to login
2. **Role-based authorization**: Prevents access to unauthorized areas
3. **Onboarding flow control**: Manages client onboarding state
4. **Automatic redirects**: Handles role-based routing for authenticated users

## Key Files

- `src/lib/auth.ts`: Authentication utilities and session management
- `src/app/actions.ts`: Server actions for login, signup, and logout
- `middleware.ts`: Route protection and authorization logic
- `src/app/(auth)/login/page.tsx`: Login form component
- `src/app/(auth)/signup/page.tsx`: Signup form component
- `src/components/onboarding/request-quote-form.tsx`: Quote request form

## Testing the Flow

### Demo User States
The system simulates different user states for testing:

1. **New User**: Use email containing "new" (e.g., "new@example.com")
   - Will be redirected to `/request-quote`

2. **Returning User**: Use email containing "returning" (e.g., "returning@example.com")
   - Will be redirected to `/dashboard`

3. **Random State**: Use any other email
   - 70% chance of being marked as having completed onboarding

### Testing Steps
1. Access the application root (`/`)
2. You should be redirected to `/login`
3. Fill out the login form with different roles and emails
4. Verify the redirects work as expected
5. For client users, test the onboarding flow by submitting the quote form
6. Verify that returning users go directly to the dashboard

## Security Considerations

- All authentication is handled server-side
- Session cookies are HTTP-only and secure
- Role-based access control is enforced at the middleware level
- Malformed sessions are automatically cleared
- No sensitive data is exposed to the client

## Future Enhancements

- Database integration for user management
- Password hashing and validation
- Email verification
- Password reset functionality
- Session refresh tokens
- Multi-factor authentication 