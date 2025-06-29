'use client';
import type { ApiKey } from '../operations/mock-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, KeyRound, Copy, RotateCcw, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ApiKeysTableProps {
    apiKeys: ApiKey[];
}

export function ApiKeysTable({ apiKeys }: ApiKeysTableProps) {
    const { toast } = useToast();

    const handleCopy = (token: string) => {
        navigator.clipboard.writeText(token);
        toast({ title: 'Token Copied!' });
    };

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Token</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Last Used</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {apiKeys.map((key) => (
                        <TableRow key={key.id}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-3">
                                    <KeyRound className="h-5 w-5 text-muted-foreground" />
                                    <span>{key.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs">{key.token}</span>
                                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleCopy(key.token)}>
                                        <Copy className="h-3 w-3" />
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant={key.status === 'Active' ? 'default' : 'destructive'}>{key.status}</Badge>
                            </TableCell>
                            <TableCell>{key.createdDate}</TableCell>
                            <TableCell>{key.lastUsed}</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem><RotateCcw className="mr-2 h-4 w-4" />Rotate Key</DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Revoke Key</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
