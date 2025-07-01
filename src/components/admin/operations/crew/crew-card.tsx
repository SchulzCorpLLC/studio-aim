'use client';
import type { CrewMember } from '../mock-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, Briefcase, CheckCircle2, XCircle, Clock } from 'lucide-react';

interface CrewCardProps {
    member: CrewMember;
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

export function CrewCard({ member }: CrewCardProps) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center text-center p-6">
                <Avatar className="h-24 w-24 mb-4 border-4 border-primary">
                    <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
                {getStatusBadge(member.status)}
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-end">
                <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                        <Briefcase className="mr-2" />
                        Assign to Job
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                         <Button variant="secondary" className="w-full">
                            <Phone className="mr-2" />
                            Call
                        </Button>
                         <Button variant="secondary" className="w-full">
                            <MessageSquare className="mr-2" />
                            Message
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
