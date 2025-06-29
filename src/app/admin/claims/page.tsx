'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PlusCircle, Search } from 'lucide-react';
import { mockAdminClaims } from '@/components/admin/operations/mock-data';
import type { AdminClaim } from '@/components/admin/operations/mock-data';
import { AdminClaimsTable } from '@/components/admin/support/admin-claims-table';

export default function AdminClaimsPage() {
  const [claims] = useState<AdminClaim[]>(mockAdminClaims);

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Claims & Disputes</h1>
          <p className="text-muted-foreground">
            Review and resolve customer claims.
          </p>
        </div>
        <Button size="lg">
          <PlusCircle className="mr-2 h-5 w-5" />
          New Claim
        </Button>
      </header>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by claim ID, customer, or job ID..."
            className="pl-10 h-12 text-base"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="under-review">Under Review</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <AdminClaimsTable claims={claims} />
    </div>
  );
}
