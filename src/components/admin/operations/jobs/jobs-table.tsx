'use client';
import type { Job } from '../mock-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, CheckCircle2, Clock, XCircle, Ban, Pencil, Users, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface JobsTableProps {
    jobs: Job[];
}

const getStatusBadge = (status: Job['status']) => {
    switch (status) {
        case 'Completed':
            return <Badge variant="default" className={cn("bg-green-500/20 text-green-400 gap-1.5 border-green-500/30")}><CheckCircle2 className="h-3 w-3" />{status}</Badge>;
        case 'Scheduled':
            return <Badge variant="secondary" className={cn("bg-blue-500/20 text-blue-400 gap-1.5 border-blue-500/30")}><Clock className="h-3 w-3" />{status}</Badge>;
        case 'In Progress':
             return <Badge variant="outline" className={cn("bg-yellow-500/20 text-yellow-400 gap-1.5 border-yellow-500/30")}><Truck className="h-3 w-3" />{status}</Badge>;
        case 'Cancelled':
             return <Badge variant="destructive" className={cn("bg-red-500/20 text-red-400 gap-1.5 border-red-500/30")}><XCircle className="h-3 w-3" />{status}</Badge>;
        case 'On Hold':
             return <Badge variant="outline"><Ban className="h-3 w-3 mr-1.5" />{status}</Badge>;
    }
};

export function JobsTable({ jobs }: JobsTableProps) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Job ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Crew</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {jobs.length > 0 ? (
                        jobs.map(job => (
                            <TableRow key={job.id}>
                                <TableCell className="font-mono">{job.id}</TableCell>
                                <TableCell className="font-medium">{job.customer}</TableCell>
                                <TableCell>{job.date}</TableCell>
                                <TableCell>{getStatusBadge(job.status)}</TableCell>
                                <TableCell>{job.crew.join(', ')}</TableCell>
                                <TableCell>${job.revenue.toFixed(2)}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem><Pencil className="mr-2" />Edit Job</DropdownMenuItem>
                                            <DropdownMenuItem><Users className="mr-2" />Assign Crew</DropdownMenuItem>
                                            <DropdownMenuItem><Truck className="mr-2" />Assign Vehicle</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive"><XCircle className="mr-2" />Cancel Job</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={7} className="h-24 text-center">
                                No jobs found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
