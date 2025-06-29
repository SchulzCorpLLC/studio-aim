'use client';
import type { Payment } from '../operations/mock-data';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaymentsTableProps {
    payments: Payment[];
}

const getStatusBadge = (status: Payment['status']) => {
    switch (status) {
        case 'Paid':
            return <Badge variant="default" className={cn("bg-green-500/20 text-green-400 gap-1.5 border-green-500/30")}><CheckCircle2 className="h-3 w-3" />{status}</Badge>;
        case 'Pending':
            return <Badge variant="secondary" className={cn("bg-yellow-500/20 text-yellow-400 gap-1.5 border-yellow-500/30")}><Clock className="h-3 w-3" />{status}</Badge>;
        case 'Failed':
            return <Badge variant="destructive" className={cn("bg-red-500/20 text-red-400 gap-1.5 border-red-500/30")}><XCircle className="h-3 w-3" />{status}</Badge>;
    }
};

export function PaymentsTable({ payments }: PaymentsTableProps) {
    return (
        <Card className="hover-none">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Job ID</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payments.map(payment => (
                            <TableRow key={payment.id}>
                                <TableCell className="font-medium">{payment.customerName}</TableCell>
                                <TableCell className="font-mono text-xs">{payment.jobId}</TableCell>
                                <TableCell>${payment.amount.toLocaleString()}</TableCell>
                                <TableCell>{payment.method}</TableCell>
                                <TableCell>{payment.date}</TableCell>
                                <TableCell>{getStatusBadge(payment.status)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}
