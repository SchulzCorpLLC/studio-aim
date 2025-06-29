'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, Search } from 'lucide-react';
import { mockDocumentTemplates } from '@/components/admin/operations/mock-data';
import { TemplatesTable } from '@/components/admin/documents/templates-table';

export default function DocumentTemplatesPage() {
    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Contract Templates</h1>
                    <p className="text-muted-foreground">Create, edit, and manage reusable document templates.</p>
                </div>
                <Button size="lg">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    New Template
                </Button>
            </header>

            <div className="relative flex-grow max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search templates..." className="pl-10 h-12 text-base" />
            </div>

            <TemplatesTable templates={mockDocumentTemplates} />
        </div>
    );
}
