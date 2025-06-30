'use client';
import type { Customer } from '../operations/mock-data';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Edit, Trash2, MessageSquare, Briefcase, Star, Ban } from 'lucide-react';

interface CustomersTableProps {
    customers: Customer[];
}

const getStatusBadge = (status: Customer['status']) => {
    switch (status) {
        case 'Client':
            return <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30">{status}</Badge>;
        case 'Lead':
            return <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">{status}</Badge>;
        case 'Archived':
            return <Badge variant="outline">{status}</Badge>;
    }
}

const TagBadge = ({ tag }: { tag: Customer['tags'][number] }) => {
     switch (tag) {
        case 'VIP':
            return <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"><Star className="h-3 w-3 mr-1"/>{tag}</Badge>;
        case 'Repeat':
            return <Badge variant="outline">{tag}</Badge>;
        case 'High-Risk':
            return <Badge variant="destructive"><Ban className="h-3 w-3 mr-1"/>{tag}</Badge>;
    }
    return null;
}


export function CustomersTable({ customers }: CustomersTableProps) {
    return (
        <Card>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Jobs</TableHead>
                            <TableHead>Total Spent</TableHead>
                            <TableHead>Tags</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.length > 0 ? (
                            customers.map(customer => (
                                <TableRow key={customer.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={customer.avatarUrl} alt={customer.name} data-ai-hint="person portrait" />
                                                <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p>{customer.name}</p>
                                                <p className="text-xs text-muted-foreground">{customer.email}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{getStatusBadge(customer.status)}</TableCell>
                                    <TableCell>{customer.jobsCount}</TableCell>
                                    <TableCell>${customer.totalSpent.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-1">
                                            {customer.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem><Briefcase className="mr-2" />View Jobs</DropdownMenuItem>
                                                <DropdownMenuItem><MessageSquare className="mr-2" />Send Message</DropdownMenuItem>
                                                <DropdownMenuItem><Edit className="mr-2" />Edit Profile</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2" />Archive</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">
                                    No customers found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}
