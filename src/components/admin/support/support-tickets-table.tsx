'use client';
import type { SupportTicket } from '../operations/mock-data';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  MoreHorizontal,
  CheckCircle,
  Clock,
  User,
  FileText,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SupportTicketsTableProps {
  tickets: SupportTicket[];
}

const getStatusBadge = (status: SupportTicket['status']) => {
  switch (status) {
    case 'Resolved':
      return (
        <Badge
          variant="default"
          className="bg-green-500/20 text-green-400 gap-1.5 border-green-500/30"
        >
          <CheckCircle className="h-3 w-3" />
          {status}
        </Badge>
      );
    case 'Open':
      return (
        <Badge
          variant="secondary"
          className="bg-blue-500/20 text-blue-400 gap-1.5 border-blue-500/30"
        >
          <Clock className="h-3 w-3" />
          {status}
        </Badge>
      );
    case 'Pending':
      return (
        <Badge
          variant="outline"
          className="bg-yellow-500/20 text-yellow-400 gap-1.5 border-yellow-500/30"
        >
          <Clock className="h-3 w-3" />
          {status}
        </Badge>
      );
  }
};

const getPriorityBadge = (priority: SupportTicket['priority']) => {
  switch (priority) {
    case 'High':
      return <Badge variant="destructive">{priority}</Badge>;
    case 'Medium':
      return (
        <Badge
          variant="secondary"
          className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
        >
          {priority}
        </Badge>
      );
    case 'Low':
      return <Badge variant="outline">{priority}</Badge>;
  }
};

export function SupportTicketsTable({ tickets }: SupportTicketsTableProps) {
  return (
    <Card className="hover-none">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-mono text-xs">{ticket.id}</TableCell>
                <TableCell className="font-medium max-w-xs truncate">
                  {ticket.subject}
                </TableCell>
                <TableCell>{ticket.customerName}</TableCell>
                <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                <TableCell>{ticket.assignedTo}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <FileText className="mr-2" />
                        View Ticket
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <User className="mr-2" />
                        Assign
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CheckCircle className="mr-2" />
                        Mark as Resolved
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
