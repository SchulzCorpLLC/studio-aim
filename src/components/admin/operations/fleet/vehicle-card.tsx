'use client';
import type { Vehicle } from '../mock-data';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreVertical, Pencil, Trash2, Wrench, CheckCircle2, Clock } from 'lucide-react';

interface VehicleCardProps {
    vehicle: Vehicle;
}

const getStatusBadge = (status: Vehicle['status']) => {
    switch (status) {
        case "Available":
            return <Badge variant="default" className="bg-green-500/20 text-green-400 gap-1.5 border-green-500/30"><CheckCircle2 className="h-3 w-3" />{status}</Badge>;
        case "In Use":
            return <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 gap-1.5 border-blue-500/30"><Clock className="h-3 w-3" />{status}</Badge>;
        case "Maintenance":
            return <Badge variant="destructive" className="bg-yellow-500/20 text-yellow-400 gap-1.5 border-yellow-500/30"><Wrench className="h-3 w-3" />{status}</Badge>;
    }
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
    return (
        <Card className="w-full overflow-hidden flex flex-col">
            <div className="relative aspect-video w-full bg-muted">
                <Image src={vehicle.imageUrl} alt={vehicle.makeModel} layout="fill" objectFit="cover" data-ai-hint="truck van" />
            </div>
            <CardContent className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg">{vehicle.id}</h3>
                            <p className="text-sm text-muted-foreground">{vehicle.makeModel}</p>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="flex-shrink-0 -mr-2 -mt-2">
                                <MoreVertical className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem><Pencil className="mr-2 h-4 w-4" />Edit</DropdownMenuItem>
                                <DropdownMenuItem><Wrench className="mr-2 h-4 w-4" />Log Maintenance</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Status</span>
                            {getStatusBadge(vehicle.status)}
                        </div>
                         <div className="flex justify-between">
                            <span className="text-muted-foreground">Capacity</span>
                            <span className="font-medium">{vehicle.capacity}</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-muted-foreground">Assigned Job</span>
                            <span className="font-medium">{vehicle.assignedJobId || 'N/A'}</span>
                        </div>
                    </div>
                </div>
                <Button variant="outline" className="w-full mt-4">Assign to Job</Button>
            </CardContent>
        </Card>
    );
}
