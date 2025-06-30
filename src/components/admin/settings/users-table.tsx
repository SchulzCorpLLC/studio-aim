'use client';
import type { AdminUser } from '../operations/mock-data';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Edit, Lock, Trash2, Mail } from 'lucide-react';

interface UsersTableProps {
    users: AdminUser[];
}

const getStatusBadge = (status: AdminUser['status']) => {
    switch (status) {
        case 'Active':
            return <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30">{status}</Badge>;
        case 'Invited':
            return <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">{status}</Badge>;
        case 'Deactivated':
            return <Badge variant="destructive">{status}</Badge>;
    }
};

export function UsersTable({ users }: UsersTableProps) {
    return (
        <Card>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Login</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.length > 0 ? (
                            users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person portrait" />
                                                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p>{user.name}</p>
                                                <p className="text-xs text-muted-foreground">{user.email}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell><Badge variant="outline">{user.role}</Badge></TableCell>
                                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                                    <TableCell>{user.lastLogin}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem><Edit className="mr-2 h-4 w-4" />Edit User</DropdownMenuItem>
                                                <DropdownMenuItem><Lock className="mr-2 h-4 w-4" />Change Permissions</DropdownMenuItem>
                                                <DropdownMenuItem><Mail className="mr-2 h-4 w-4" />Resend Invitation</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Deactivate User</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No users found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}
