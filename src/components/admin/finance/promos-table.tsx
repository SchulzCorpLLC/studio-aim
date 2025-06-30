'use client';
import type { Promo } from '../operations/mock-data';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Pencil, Trash2, Copy } from 'lucide-react';

interface PromosTableProps {
    promos: Promo[];
}

export function PromosTable({ promos }: PromosTableProps) {
    return (
        <Card>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Promo Code</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Uses</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Expiry Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {promos.length > 0 ? (
                            promos.map(promo => (
                                <TableRow key={promo.id}>
                                    <TableCell className="font-mono font-medium">{promo.code}</TableCell>
                                    <TableCell>{promo.type}</TableCell>
                                    <TableCell>{promo.type === 'Percentage' ? `${promo.value}%` : `$${promo.value}`}</TableCell>
                                    <TableCell>{promo.useCount}</TableCell>
                                    <TableCell>
                                        <Badge variant={promo.status === 'Active' ? 'default' : 'outline'}>
                                            {promo.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{promo.expiryDate}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem><Pencil className="mr-2" />Edit</DropdownMenuItem>
                                                <DropdownMenuItem><Copy className="mr-2" />Clone</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2" />Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center">
                                    No promos found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}
