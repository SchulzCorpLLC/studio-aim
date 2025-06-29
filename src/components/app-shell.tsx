'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/sidebar';
import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { CrewLayout } from '@/components/crew/crew-layout';
import { Logo } from '@/components/logo';

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const authRoutes = ['/login', '/signup', '/forgot-password', '/dashboard-redirect', '/onboarding', '/request-quote'];
    const isAuthRoute = authRoutes.includes(pathname);

    if (isAuthRoute) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center p-4">
                <div className="absolute top-8 left-8">
                    <Logo />
                </div>
                <main>{children}</main>
            </div>
        );
    }
    
    if (pathname.startsWith('/crew')) {
        return <CrewLayout>{children}</CrewLayout>;
    }

    if (pathname.startsWith('/admin')) {
       return (
         <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr]">
            <AdminSidebar />
            <div className="flex flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
                </main>
            </div>
        </div>
       );
    }

    return (
         <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
                </main>
            </div>
        </div>
    );
}
