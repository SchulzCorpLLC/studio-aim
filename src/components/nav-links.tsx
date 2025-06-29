'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/config/nav';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  const defaultOpenValue = items
    .map((item, index) => (item.subItems?.some(sub => pathname.startsWith(sub.href))) ? `item-${index}` : null)
    .filter(Boolean) as string[];

  return (
    <Accordion type="multiple" defaultValue={defaultOpenValue} className="w-full">
      <nav className="grid items-start gap-1 text-sm font-medium">
        {items.map((item, index) => {
          if (!item.subItems) {
            const { href, label, icon: Icon } = item;
            return (
              <Link
                key={href}
                href={href!} // href is guaranteed to exist if no subItems
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground transition-all hover:text-primary',
                  pathname === href && 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                )}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            );
          }

          const { label, icon: Icon, subItems } = item;
          const isAnyLinkActive = subItems.some(sub => pathname.startsWith(sub.href));

          return (
            <AccordionItem value={`item-${index}`} key={label} className="border-b-0">
              <AccordionTrigger
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground transition-all hover:text-primary hover:no-underline [&[data-state=open]>svg]:rotate-90",
                  isAnyLinkActive && 'bg-muted/50 text-primary'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <span className="font-semibold">{label}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-6 pt-1 pb-0">
                <div className="flex flex-col gap-0.5 border-l-2 border-muted/50 ml-[9px]">
                  {subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={cn(
                        'block rounded-r-lg pl-6 py-2 -ml-0.5 border-l-2 border-transparent text-muted-foreground hover:text-primary hover:border-primary',
                        pathname === subItem.href && 'bg-primary/10 text-primary font-semibold border-primary'
                      )}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </nav>
    </Accordion>
  );
}
