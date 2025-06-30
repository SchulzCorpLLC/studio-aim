'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Search } from 'lucide-react';
import type { Refund } from '@/components/admin/operations/mock-data';
import { RefundsTable } from '@/components/admin/finance/refunds-table';

export default function AdminRefundsPage() {
    const [refunds] = useState<Refund[]>([]);

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Refunds & Adjustments</h1>
                    <p className="text-muted-foreground">Handle post-job financial changes quickly and visibly.</p>
                </div>
                <Button size="lg">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Issue Refund/Credit
                </Button>
            </header>
            
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search by customer or job ID..." className="pl-10 h-12 text-base" />
                </div>
                <Select>
                    <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
                        <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="issued">Issued</SelectItem>
                        <SelectItem value="in-review">In Review</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            
            <RefundsTable refunds={refunds} />
        </div>
    );
}
