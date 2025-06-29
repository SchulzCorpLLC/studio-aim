'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { crewNavItems } from '@/config/crew-nav';
import { cn } from '@/lib/utils';

export function CrewBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-card border-t md:hidden">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        {crewNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "inline-flex flex-col items-center justify-center px-5 hover:bg-muted/50 group",
              pathname === item.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
