'use client';
import type { InventoryItem } from '../../mock-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle,StickyNote, MessageSquare } from 'lucide-react';

interface AdminInventoryTableProps {
    items: InventoryItem[];
}

export function AdminInventoryTable({ items }: AdminInventoryTableProps) {
    const flaggedItems = items.filter(item => item.tags?.includes('Damaged') || item.tags?.includes('Missing'));
    
    return (
        <CardContent className="p-0">
            {flaggedItems.length > 0 && (
                <div className="p-4 m-6 mb-0 border-l-4 border-yellow-400 bg-yellow-400/10">
                    <div className="flex items-start gap-3">
                         <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1"/>
                         <div>
                            <h4 className="font-semibold text-yellow-300">Flagged Items</h4>
                            <p className="text-sm text-yellow-400/80">
                                {flaggedItems.length} item(s) are flagged as damaged or missing. Review and contact customer if necessary.
                            </p>
                             <Button variant="ghost" size="sm" className="mt-2 h-auto p-0 text-yellow-300 hover:text-yellow-200">
                                 <MessageSquare className="mr-2"/> Contact Customer
                             </Button>
                         </div>
                    </div>
                </div>
            )}
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="pl-6">Item Name</TableHead>
                            <TableHead>Room</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Tags</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.length > 0 ? (
                            items.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell className="pl-6 font-medium">{item.name}</TableCell>
                                    <TableCell>{item.room}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            {item.tags?.map(tag => (
                                                <Badge 
                                                    key={tag} 
                                                    variant={tag === 'Fragile' ? 'secondary' : 'destructive'}
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {item.notes && <div className="flex items-start gap-2"><StickyNote className="h-4 w-4 mt-1 flex-shrink-0" /><span>{item.notes}</span></div>}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No inventory items for this job.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </CardContent>
    );
}
