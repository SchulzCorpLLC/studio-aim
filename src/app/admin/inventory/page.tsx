'use client';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { mockJobs, mockInventories } from '@/components/admin/operations/mock-data';
import { AdminInventoryTable } from '@/components/admin/operations/inventory/admin-inventory-table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

export default function AdminInventoryPage() {
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
    const inventories = selectedJobId ? mockInventories[selectedJobId] || [] : [];
    
    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Inventory Logs</h1>
                    <p className="text-muted-foreground">Review inventory lists submitted for each job.</p>
                </div>
                <Button variant="outline" size="lg" disabled={!selectedJobId}>
                    <Download className="mr-2 h-5 w-5" />
                    Export as PDF
                </Button>
            </header>
            
            <Card>
                <CardHeader>
                    <CardTitle>Select a Job to View Inventory</CardTitle>
                    <Select onValueChange={setSelectedJobId} defaultValue={selectedJobId || ""}>
                        <SelectTrigger className="w-full md:w-[320px] h-12 text-base">
                            <SelectValue placeholder="Select a Job ID..." />
                        </SelectTrigger>
                        <SelectContent>
                            {mockJobs.length > 0 ? mockJobs.map(job => (
                                <SelectItem key={job.id} value={job.id}>
                                    {job.id} - {job.customer}
                                </SelectItem>
                            )) : (
                                <SelectItem value="no-jobs" disabled>No jobs available</SelectItem>
                            )}
                        </SelectContent>
                    </Select>
                </CardHeader>

                {selectedJobId ? (
                    <AdminInventoryTable items={inventories} />
                ) : (
                    <CardContent>
                        <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-lg">
                             <h3 className="text-xl font-semibold">No Job Selected</h3>
                            <p>Please select a job from the dropdown to view its inventory.</p>
                        </div>
                    </CardContent>
                )}

            </Card>
        </div>
    );
}
