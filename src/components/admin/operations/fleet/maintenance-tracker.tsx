'use client';
import type { MaintenanceTask } from '../mock-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface MaintenanceTrackerProps {
    tasks: MaintenanceTask[];
}

const getPriorityBadge = (priority: MaintenanceTask['priority']) => {
    switch(priority) {
        case 'High': return <Badge variant="destructive">{priority}</Badge>;
        case 'Medium': return <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">{priority}</Badge>;
        case 'Low': return <Badge variant="outline">{priority}</Badge>;
    }
}

export function MaintenanceTracker({ tasks }: MaintenanceTrackerProps) {
    return (
        <Card className="hover-none">
            <CardHeader>
                <CardTitle>Maintenance Tracker</CardTitle>
                <CardDescription>Log and view all vehicle maintenance tasks.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Vehicle</TableHead>
                                <TableHead>Issue Reported</TableHead>
                                <TableHead>Date Reported</TableHead>
                                <TableHead>Priority</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tasks.map(task => (
                                <TableRow key={task.id}>
                                    <TableCell className="font-medium">{task.vehicleId}</TableCell>
                                    <TableCell>{task.issue}</TableCell>
                                    <TableCell>{task.dateReported}</TableCell>
                                    <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                                    <TableCell>
                                        <Badge variant={task.status === 'Completed' ? 'default' : 'secondary'}>{task.status}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}
