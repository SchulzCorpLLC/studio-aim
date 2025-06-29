'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, Search, User, List } from 'lucide-react';
import { mockCrew } from '@/components/admin/operations/mock-data';
import type { CrewMember } from '@/components/admin/operations/mock-data';
import { CrewCard } from '@/components/admin/operations/crew/crew-card';
import { CrewTable } from '@/components/admin/operations/crew/crew-table';
import { Card } from '@/components/ui/card';

export default function AdminCrewPage() {
    const [crew] = useState<CrewMember[]>(mockCrew);

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Crew & Drivers</h1>
                    <p className="text-muted-foreground">Manage workforce availability, assignments, and performance.</p>
                </div>
                <Button size="lg" className="shrink-0">
                    <User className="mr-2 h-5 w-5" />
                    Add Crew Member
                </Button>
            </header>

            <Tabs defaultValue="grid">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="relative w-full md:w-80">
                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Search crew..." className="pl-10 h-12 text-base" />
                    </div>
                     <TabsList className="grid w-full grid-cols-2 md:w-auto">
                        <TabsTrigger value="grid"><User className="mr-2" /> Card View</TabsTrigger>
                        <TabsTrigger value="table"><List className="mr-2"/> Table View</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="grid" className="mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {crew.map((member) => (
                            <CrewCard key={member.id} member={member} />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="table" className="mt-6">
                   <Card className="hover-none">
                     <CrewTable crew={crew} />
                   </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
