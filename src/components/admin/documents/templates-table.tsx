'use client';
import type { DocumentTemplate } from '../operations/mock-data';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Pencil, Eye, Send, Trash2 } from 'lucide-react';

interface TemplatesTableProps {
    templates: DocumentTemplate[];
}

export function TemplatesTable({ templates }: TemplatesTableProps) {
    return (
        <Card className="hover-none">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Template Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Last Updated</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {templates.map(template => (
                            <TableRow key={template.id}>
                                <TableCell className="font-medium">{template.name}</TableCell>
                                <TableCell><Badge variant="outline">{template.category}</Badge></TableCell>
                                <TableCell>{template.lastUpdated}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem><Pencil className="mr-2 h-4 w-4" />Edit</DropdownMenuItem>
                                            <DropdownMenuItem><Eye className="mr-2 h-4 w-4" />Preview</DropdownMenuItem>
                                            <DropdownMenuItem><Send className="mr-2 h-4 w-4" />Use Template</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Delete</DropdownMenuItem>
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
