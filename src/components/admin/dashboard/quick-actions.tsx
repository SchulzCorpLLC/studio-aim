import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Briefcase, UserPlus, Truck, FilePlus, MessageSquare } from "lucide-react";
import Link from 'next/link';

const actions = [
    { label: "New Quote", icon: PlusCircle, href: "/admin/leads" },
    { label: "New Job", icon: Briefcase, href: "/admin/jobs" },
    { label: "Assign Crew", icon: UserPlus, href: "/admin/crew" },
    { label: "Dispatch Truck", icon: Truck, href: "/admin/fleet" },
    { label: "Send Invoice", icon: FilePlus, href: "/admin/billing" },
    { label: "Open Ticket", icon: MessageSquare, href: "/admin/support" },
];

export function QuickActions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    {actions.map((action) => (
                         <Button key={action.label} variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                            <Link href={action.href}>
                                <action.icon className="h-6 w-6" />
                                <span>{action.label}</span>
                            </Link>
                         </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
