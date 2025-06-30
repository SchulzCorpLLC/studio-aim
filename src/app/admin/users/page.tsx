'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, Search } from 'lucide-react';
import type { AdminUser } from '@/components/admin/operations/mock-data';
import { UsersTable } from '@/components/admin/settings/users-table';

export default function AdminUsersPage() {
  const [users] = useState<AdminUser[]>([]);

  return (
    <div className="space-y-6">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-3xl font-bold">Users &amp; Roles</h1>
                <p className="text-muted-foreground">Manage your admin team and their permissions.</p>
            </div>
            <Button size="lg">
                <PlusCircle className="mr-2 h-5 w-5" />
                Add Admin
            </Button>
        </header>

        <div className="relative flex-grow max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search by name or email..." className="pl-10 h-12 text-base" />
        </div>

        <UsersTable users={users} />
    </div>
  );
}
