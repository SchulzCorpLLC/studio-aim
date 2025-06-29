'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, Search } from 'lucide-react';
import { mockPromos } from '@/components/admin/operations/mock-data';
import type { Promo } from '@/components/admin/operations/mock-data';
import { PromosTable } from '@/components/admin/finance/promos-table';

export default function AdminPromosPage() {
    const [promos] = useState<Promo[]>(mockPromos);

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Discounts & Promos</h1>
                    <p className="text-muted-foreground">Manage seasonal offers, referral discounts, and promo codes.</p>
                </div>
                <Button size="lg">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    New Promo Code
                </Button>
            </header>
            
            <div className="relative flex-grow max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search by promo code..." className="pl-10 h-12 text-base" />
            </div>
            
            <PromosTable promos={promos} />
        </div>
    );
}
