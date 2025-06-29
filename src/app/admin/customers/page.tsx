'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Search } from 'lucide-react';
import { mockCustomers } from '@/components/admin/operations/mock-data';
import type { Customer } from '@/components/admin/operations/mock-data';
import { CustomersTable } from '@/components/admin/crm/customers-table';

export default function AdminCustomersPage() {
    const [customers] = useState<Customer[]>(mockCustomers);

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Customer Profiles</h1>
                    <p className="text-muted-foreground">Search, manage, and view customer details.</p>
                </div>
                <Button size="lg">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Add Customer
                </Button>
            </header>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search by name, email, or phone..." className="pl-10 h-12 text-base" />
                </div>
                <div className="flex gap-4">
                    <Select>
                        <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="client">Client</SelectItem>
                            <SelectItem value="lead">Lead</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
                            <SelectValue placeholder="Filter by tag" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Tags</SelectItem>
                            <SelectItem value="vip">VIP</SelectItem>
                            <SelectItem value="repeat">Repeat</SelectItem>
                            <SelectItem value="high-risk">High-Risk</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            
            <CustomersTable customers={customers} />
        </div>
    );
}
