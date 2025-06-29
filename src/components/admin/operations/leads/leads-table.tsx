'use client';
import type { Lead } from '../mock-data';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, ArrowRight, Pencil, MessageSquare, XCircle, CheckCircle2, Phone, Clock, Plus } from 'lucide-react';

interface LeadsTableProps {
    leads: Lead[];
}

const getStatusBadge = (status: Lead['status']) => {
    switch (status) {
        case 'New':
            return <Badge variant="default" className="bg-blue-500/20 text-blue-400 border-blue-500/30">{status}</Badge>;
        case 'Contacted':
            return <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">{status}</Badge>;
        case 'Converted':
            return <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30">{status}</Badge>;
        case 'Closed':
            return <Badge variant="outline">{status}</Badge>;
    }
};

const getPriorityBadge = (priority: Lead['priority']) => {
    switch(priority) {
        case 'High': return <Badge variant="destructive">{priority}</Badge>;
        case 'Medium': return <Badge variant="secondary">{priority}</Badge>;
        case 'Low': return <Badge variant="outline">{priority}</Badge>;
    }
}


export function LeadsTable({ leads }: LeadsTableProps) {
    return (
        <Card className="hover-none">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Quote Amount</TableHead>
                            <TableHead>Source</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Contacted</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {leads.map(lead => (
                            <TableRow key={lead.id}>
                                <TableCell>
                                    <p className="font-medium">{lead.name}</p>
                                    <p className="text-xs text-muted-foreground">{lead.contact}</p>
                                </TableCell>
                                <TableCell>${lead.quoteAmount.toLocaleString()}</TableCell>
                                <TableCell>{lead.source}</TableCell>
                                <TableCell>{getStatusBadge(lead.status)}</TableCell>
                                <TableCell>{lead.lastContacted}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                <CheckCircle2 className="mr-2" />Convert to Job
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <MessageSquare className="mr-2" />Send Follow-up
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Clock className="mr-2" />Snooze Lead
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Plus className="mr-2" />Add Note
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Pencil className="mr-2" />Edit Quote
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive">
                                                <XCircle className="mr-2" />Close Lead
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}
