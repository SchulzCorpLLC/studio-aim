'use client';
import type { Document } from '../operations/mock-data';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Eye, Download, Archive, Send } from 'lucide-react';

interface DocumentsTableProps {
    documents: Document[];
}

const getStatusBadge = (status: Document['status']) => {
    switch (status) {
        case 'Signed':
            return <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30">Signed</Badge>;
        case 'Pending Signature':
            return <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Pending</Badge>;
        case 'Draft':
            return <Badge variant="outline">Draft</Badge>;
        case 'Archived':
            return <Badge variant="destructive">Archived</Badge>;
    }
};


export function DocumentsTable({ documents }: DocumentsTableProps) {
    return (
        <Card>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Document Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Linked To</TableHead>
                            <TableHead>Date Created</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {documents.length > 0 ? (
                            documents.map(doc => (
                                <TableRow key={doc.id}>
                                    <TableCell className="font-medium">{doc.name}</TableCell>
                                    <TableCell>{doc.type}</TableCell>
                                    <TableCell>{getStatusBadge(doc.status)}</TableCell>
                                    <TableCell className="font-mono text-xs">{doc.linkedTo}</TableCell>
                                    <TableCell>{doc.date}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem><Eye className="mr-2 h-4 w-4" />View Document</DropdownMenuItem>
                                                <DropdownMenuItem><Send className="mr-2 h-4 w-4" />Send</DropdownMenuItem>
                                                <DropdownMenuItem><Download className="mr-2 h-4 w-4" />Download</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive"><Archive className="mr-2 h-4 w-4" />Archive</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">
                                    No documents found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}
