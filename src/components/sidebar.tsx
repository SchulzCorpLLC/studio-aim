'use client';
import Link from 'next/link';
import { Logo } from './logo';
import { NavLinks } from './nav-links';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { navItems } from '@/config/nav';
import { LogOut } from 'lucide-react';
import { logout } from '@/app/actions';

export function Sidebar() {
  return (
    <div className="hidden border-r bg-card md:block">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-20 shrink-0 items-center border-b px-6">
          <Logo />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <NavLinks items={navItems} />
          <div className="mt-4 space-y-4 border-t pt-4">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Contact support for assistance with your move.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Button size="sm" className="w-full" asChild>
                  <Link href="/messaging">Contact Support</Link>
                </Button>
              </CardContent>
            </Card>
            <form action={logout}>
              <Button
                type="submit"
                variant="ghost"
                className="w-full justify-start text-muted-foreground"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
