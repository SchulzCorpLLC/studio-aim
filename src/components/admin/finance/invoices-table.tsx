'use client';
import type { Invoice } from '../operations/mock-data';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, FileText, CheckCircle2, Clock, AlertTriangle, Send, Download, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InvoicesTableProps {
    invoices: Invoice[];
}

const getStatusBadge = (status: Invoice['status']) => {
    switch (status) {
        case 'Paid':
            return <Badge variant="default" className={cn("bg-green-500/20 text-green-400 gap-1.5 border-green-500/30")}><CheckCircle2 className="h-3 w-3" />{status}</Badge>;
        case 'Sent':
            return <Badge variant="secondary" className={cn("bg-blue-500/20 text-blue-400 gap-1.5 border-blue-500/30")}><Send className="h-3 w-3" />{status}</Badge>;
        case 'Overdue':
            return <Badge variant="destructive" className={cn("bg-red-500/20 text-red-400 gap-1.5 border-red-500/30")}><AlertTriangle className="h-3 w-3" />{status}</Badge>;
        case 'Draft':
             return <Badge variant="outline"><FileText className="h-3 w-3 mr-1.5" />{status}</Badge>;
    }
};

export function InvoicesTable({ invoices }: InvoicesTableProps) {
    return (
        <Card className="hover-none">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Date Issued</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map(invoice => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-mono">{invoice.id}</TableCell>
                                <TableCell className="font-medium">{invoice.customerName}</TableCell>
                                <TableCell>{invoice.dateIssued}</TableCell>
                                <TableCell>${invoice.total.toLocaleString()}</TableCell>
                                <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem><FileText className="mr-2" />View Details</DropdownMenuItem>
                                            <DropdownMenuItem><Download className="mr-2" />Download PDF</DropdownMenuItem>
                                            <DropdownMenuItem><Send className="mr-2" />Resend Invoice</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive"><XCircle className="mr-2" />Void Invoice</DropdownMenuItem>
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
