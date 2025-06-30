'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilePlus, Download, Search } from 'lucide-react';

import { BillingKpiCards } from '@/components/admin/finance/billing-kpi-cards';
import { PaymentsTable } from '@/components/admin/finance/payments-table';
import type { Payment } from '@/components/admin/operations/mock-data';

export default function AdminBillingPage() {
    const [payments] = useState<Payment[]>([]);

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Billing & Payments</h1>
                    <p className="text-muted-foreground">Oversee all financial transactions and statuses.</p>
                </div>
                <div className="flex gap-2">
                    <Button size="lg" variant="outline">
                        <Download className="mr-2 h-5 w-5" />
                        Export CSV
                    </Button>
                    <Button size="lg">
                        <FilePlus className="mr-2 h-5 w-5" />
                        Create Invoice
                    </Button>
                </div>
            </header>

            <BillingKpiCards />

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search by customer or job ID..." className="pl-10 h-12 text-base" />
                </div>
                <div className="flex gap-4">
                    <Select>
                        <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="paid">Paid</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                        </SelectContent>
                    </Select>
                     <Select>
                        <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
                            <SelectValue placeholder="Filter by method" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Methods</SelectItem>
                            <SelectItem value="visa">Visa</SelectItem>
                            <SelectItem value="mastercard">Mastercard</SelectItem>
                            <SelectItem value="ach">ACH</SelectItem>
                            <SelectItem value="crypto">Crypto</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <PaymentsTable payments={payments} />
        </div>
    );
}
