'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Search, Upload } from 'lucide-react';
import { mockDocuments } from '@/components/admin/operations/mock-data';
import { DocumentKpiCards } from '@/components/admin/documents/document-kpi-cards';
import { DocumentsTable } from '@/components/admin/documents/documents-table';

export default function AdminDocumentsPage() {
    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Documents & Contracts</h1>
                    <p className="text-muted-foreground">Search, manage, and track all company documents.</p>
                </div>
                <Button size="lg">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Document
                </Button>
            </header>

            <DocumentKpiCards />
            
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search by name, job ID, or customer..." className="pl-10 h-12 text-base" />
                </div>
                <div className="flex gap-4">
                     <Select>
                        <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
                            <SelectValue placeholder="Filter by type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="bill-of-lading">Bill of Lading</SelectItem>
                            <SelectItem value="inventory">Inventory Sheet</SelectItem>
                        </SelectContent>
                    </Select>
                     <Select>
                        <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                             <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="signed">Signed</SelectItem>
                            <SelectItem value="pending">Pending Signature</SelectItem>
                            <SelectItem value="draft">Draft</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <DocumentsTable documents={mockDocuments} />
        </div>
    );
}
