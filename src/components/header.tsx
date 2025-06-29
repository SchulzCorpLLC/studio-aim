"use client";

import Link from 'next/link';
import { Bell, User, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Logo } from './logo';
import { NavLinks } from './nav-links';
import type { NavItem } from '@/config/nav';
import { logout } from '@/app/actions';


export function Header({ navItems }: { navItems: NavItem[] }) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b bg-background/95 px-6 backdrop-blur-sm dark:bg-background/80">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col p-0">
             <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex h-20 items-center border-b px-6">
                <Logo />
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                <NavLinks items={navItems} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="w-full flex-1" />

      <Button variant="ghost" size="icon" className="rounded-full">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://placehold.co/100x100.png" alt="@customer" data-ai-hint="person portrait" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
             <p>Alex Doe</p>
             <p className="text-xs text-muted-foreground font-normal">alex.doe@example.com</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/account-settings">
                <User className="mr-2 h-4 w-4" />
                <span>Account Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <form action={logout}>
             <button type="submit" className="w-full">
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
             </button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
