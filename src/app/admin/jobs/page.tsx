'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { JobsTable } from '@/components/admin/operations/jobs/jobs-table';
import { mockJobs } from '@/components/admin/operations/mock-data';
import { PlusCircle, Calendar, List, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

export default function AdminJobsPage() {
  const [view, setView] = useState('list');
  
  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Jobs & Scheduling</h1>
          <p className="text-muted-foreground">Assign, monitor, and manage all moving jobs.</p>
        </div>
        <Button size="lg">
          <PlusCircle className="mr-2 h-5 w-5" />
          Add New Job
        </Button>
      </header>

      <Tabs defaultValue="list" value={view} onValueChange={(v) => setView(v as string)}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search jobs..." className="pl-10 h-12 text-base" />
            </div>
            <TabsList className="grid w-full grid-cols-2 md:w-auto">
                <TabsTrigger value="list"><List className="mr-2"/> Job List</TabsTrigger>
                <TabsTrigger value="calendar" disabled><Calendar className="mr-2"/> Calendar View</TabsTrigger>
            </TabsList>
        </div>

        <TabsContent value="list" className="mt-6">
            <Card className="hover-none">
                <JobsTable jobs={mockJobs} />
            </Card>
        </TabsContent>
        <TabsContent value="calendar" className="mt-6">
             <Card className="hover-none">
                <div className="text-center py-24 text-muted-foreground">
                    <Calendar className="mx-auto h-12 w-12" />
                    <h3 className="text-xl font-semibold mt-4">Calendar View Coming Soon</h3>
                    <p>A drag-and-drop scheduling interface is being built.</p>
                </div>
             </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
