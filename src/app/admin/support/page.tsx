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
import { mockSupportTickets } from '@/components/admin/operations/mock-data';
import type { SupportTicket } from '@/components/admin/operations/mock-data';
import { SupportTicketsTable } from '@/components/admin/support/support-tickets-table';

export default function AdminSupportPage() {
  const [tickets] = useState<SupportTicket[]>(mockSupportTickets);

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Support Tickets</h1>
          <p className="text-muted-foreground">
            Manage and resolve customer and crew support requests.
          </p>
        </div>
        <Button size="lg">
          <PlusCircle className="mr-2 h-5 w-5" />
          New Ticket
        </Button>
      </header>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by ticket ID or customer..."
            className="pl-10 h-12 text-base"
          />
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
              <SelectValue placeholder="Filter by priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <SupportTicketsTable tickets={tickets} />
    </div>
  );
}
