'use client';
import type { Refund } from '../operations/mock-data';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, CheckCircle, XCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RefundsTableProps {
    refunds: Refund[];
}

const getStatusBadge = (status: Refund['status']) => {
    switch (status) {
        case 'Issued':
            return <Badge variant="default" className="bg-green-500/20 text-green-400 gap-1.5 border-green-500/30"><CheckCircle className="h-3 w-3" />{status}</Badge>;
        case 'In Review':
            return <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 gap-1.5 border-yellow-500/30"><Clock className="h-3 w-3" />{status}</Badge>;
        case 'Rejected':
            return <Badge variant="destructive" className="bg-red-500/20 text-red-400 gap-1.5 border-red-500/30"><XCircle className="h-3 w-3" />{status}</Badge>;
    }
};

export function RefundsTable({ refunds }: RefundsTableProps) {
    return (
        <Card className="hover-none">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Job ID</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Reason</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {refunds.map(refund => (
                            <TableRow key={refund.id}>
                                <TableCell className="font-medium">{refund.customerName}</TableCell>
                                <TableCell className="font-mono text-xs">{refund.jobId}</TableCell>
                                <TableCell>{refund.type}</TableCell>
                                <TableCell>${refund.amount.toLocaleString()}</TableCell>
                                <TableCell className="max-w-xs truncate">{refund.reason}</TableCell>
                                <TableCell>{getStatusBadge(refund.status)}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem><CheckCircle className="mr-2" />Approve</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive"><XCircle className="mr-2" />Reject</DropdownMenuItem>
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
