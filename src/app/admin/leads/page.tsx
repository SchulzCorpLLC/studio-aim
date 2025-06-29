'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LeadsKpiCards } from '@/components/admin/operations/leads/kpi-cards';
import { LeadsTable } from '@/components/admin/operations/leads/leads-table';
import { mockLeads } from '@/components/admin/operations/mock-data';
import type { Lead } from '@/components/admin/operations/mock-data';
import { PlusCircle, Search } from 'lucide-react';

export default function AdminLeadsPage() {
  const [leads] = useState<Lead[]>(mockLeads);

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Leads & Follow-Ups</h1>
          <p className="text-muted-foreground">Manage incoming quote requests and convert them to jobs.</p>
        </div>
        <Button size="lg">
            <PlusCircle className="mr-2 h-5 w-5" />
            New Lead
        </Button>
      </header>

      <LeadsKpiCards />

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search leads by name or email..." className="pl-10 h-12 text-base" />
        </div>
        <div className="flex gap-4">
            <Select>
                <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
                    <SelectValue placeholder="Filter by source" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    <SelectItem value="web">Web Form</SelectItem>
                    <SelectItem value="call">Phone Call</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </div>

      <LeadsTable leads={leads} />
    </div>
  );
}
