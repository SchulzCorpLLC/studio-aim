'use client';
import type { Webhook } from '../operations/mock-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Globe, Pencil, Trash2 } from 'lucide-react';

interface WebhooksTableProps {
    webhooks: Webhook[];
}

export function WebhooksTable({ webhooks }: WebhooksTableProps) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Endpoint URL</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Subscribed Events</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {webhooks.length > 0 ? (
                        webhooks.map((webhook) => (
                            <TableRow key={webhook.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-3">
                                        <Globe className="h-5 w-5 text-muted-foreground" />
                                        <span className="font-mono text-xs">{webhook.url}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={webhook.status === 'Active' ? 'default' : 'outline'}>{webhook.status}</Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                        {webhook.events.map(event => (
                                            <Badge key={event} variant="secondary">{event}</Badge>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem><Pencil className="mr-2 h-4 w-4" />Edit Webhook</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Delete Webhook</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="h-24 text-center">
                                No webhooks found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
