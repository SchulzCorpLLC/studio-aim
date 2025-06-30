'use client';
import type { CrewMember } from '../mock-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Briefcase, CheckCircle2, XCircle, Clock, Phone, MessageSquare } from 'lucide-react';

interface CrewTableProps {
    crew: CrewMember[];
}

const getStatusBadge = (status: CrewMember['status']) => {
    switch (status) {
        case "Available":
            return <Badge variant="default" className="bg-green-500/20 text-green-400 gap-1.5 border-green-500/30"><CheckCircle2 className="h-3 w-3" />{status}</Badge>;
        case "On Job":
            return <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 gap-1.5 border-blue-500/30"><Briefcase className="h-3 w-3" />{status}</Badge>;
        case "Unavailable":
            return <Badge variant="destructive" className="bg-red-500/20 text-red-400 gap-1.5 border-red-500/30"><XCircle className="h-3 w-3" />{status}</Badge>;
        case "On Break":
            return <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 gap-1.5 border-yellow-500/30"><Clock className="h-3 w-3" />{status}</Badge>;
    }
};

export function CrewTable({ crew }: CrewTableProps) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Assigned Job</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {crew.length > 0 ? (
                        crew.map((member) => (
                            <TableRow key={member.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint="person portrait" />
                                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <span>{member.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{member.role}</TableCell>
                                <TableCell>{getStatusBadge(member.status)}</TableCell>
                                <TableCell>{member.contact}</TableCell>
                                <TableCell>{member.assignedJobId || 'N/A'}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem><Briefcase className="mr-2" />Assign Job</DropdownMenuItem>
                                            <DropdownMenuItem><MessageSquare className="mr-2" />Send Message</DropdownMenuItem>
                                            <DropdownMenuItem><Phone className="mr-2" />Call</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} className="h-24 text-center">
                                No crew members found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
