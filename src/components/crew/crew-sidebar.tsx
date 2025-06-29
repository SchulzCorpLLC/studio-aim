import { Logo } from '@/components/logo';
import { NavLinks } from '@/components/nav-links';
import { crewNavItems } from '@/config/crew-nav';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LogOut } from 'lucide-react';

export function CrewSidebar() {
  return (
    <div className="hidden border-r bg-card md:block">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-20 shrink-0 items-center border-b px-6">
          <Logo />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <NavLinks items={crewNavItems} />
          <div className="mt-4 border-t pt-4">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                <Link href="/login">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
