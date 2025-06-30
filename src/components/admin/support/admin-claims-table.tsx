'use client';
import type { AdminClaim } from '../operations/mock-data';
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
  XCircle,
  Clock,
  FileText,
} from 'lucide-react';

interface AdminClaimsTableProps {
  claims: AdminClaim[];
}

const getStatusBadge = (status: AdminClaim['status']) => {
  switch (status) {
    case 'Approved':
      return (
        <Badge
          variant="default"
          className="bg-green-500/20 text-green-400 gap-1.5 border-green-500/30"
        >
          <CheckCircle className="h-3 w-3" />
          {status}
        </Badge>
      );
    case 'Under Review':
      return (
        <Badge
          variant="secondary"
          className="bg-yellow-500/20 text-yellow-400 gap-1.5 border-yellow-500/30"
        >
          <Clock className="h-3 w-3" />
          {status}
        </Badge>
      );
    case 'Rejected':
      return (
        <Badge
          variant="destructive"
          className="bg-red-500/20 text-red-400 gap-1.5 border-red-500/30"
        >
          <XCircle className="h-3 w-3" />
          {status}
        </Badge>
      );
  }
};

export function AdminClaimsTable({ claims }: AdminClaimsTableProps) {
  return (
    <Card>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Claim ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Job ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {claims.length > 0 ? (
                claims.map((claim) => (
                  <TableRow key={claim.id}>
                    <TableCell className="font-mono text-xs">{claim.id}</TableCell>
                    <TableCell className="font-medium">
                      {claim.customerName}
                    </TableCell>
                    <TableCell className="font-mono text-xs">{claim.jobId}</TableCell>
                    <TableCell>{claim.type}</TableCell>
                    <TableCell>${claim.amount.toLocaleString()}</TableCell>
                    <TableCell>{claim.date}</TableCell>
                    <TableCell>{getStatusBadge(claim.status)}</TableCell>
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
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2" />
                            Approve Claim
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <XCircle className="mr-2" />
                            Reject Claim
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
                <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                        No claims found.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
