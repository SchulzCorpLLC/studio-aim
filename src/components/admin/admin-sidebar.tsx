'use client';
import { NavLinks } from '@/components/nav-links';
import { adminNavItems } from '@/config/admin-nav';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  LogOut,
  Search,
  PlusCircle,
  Briefcase,
  UserPlus,
  Truck,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logout } from '@/app/actions';

export function AdminSidebar() {
  return (
    <div className="hidden border-r bg-card md:block">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-20 shrink-0 items-center justify-between border-b px-4">
          <Link
            href="/admin"
            className="flex items-center gap-2"
            aria-label="Back to homepage"
          >
            <div className="rounded-md bg-primary p-2">
              <Truck className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              AdminPortal
            </h1>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <PlusCircle className="h-5 w-5" />
                <span className="sr-only">Quick Create</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Quick Create</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Briefcase className="mr-2 h-4 w-4" />
                <span>New Job</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>New Crew Member</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search..." className="h-10 pl-9" />
          </div>
          <NavLinks items={adminNavItems} />
           <div className="mt-4 border-t pt-4">
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
