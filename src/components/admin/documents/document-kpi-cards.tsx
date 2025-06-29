'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileStack, FileClock, Eye, FileWarning } from "lucide-react";

interface KpiCardProps {
    title: string;
    value: string;
    icon: React.ElementType;
}

const StatCard = ({ title, value, icon: Icon }: KpiCardProps) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
        </CardContent>
    </Card>
);


export function DocumentKpiCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Total Documents" value="3,450" icon={FileStack} />
            <StatCard title="Pending Signatures" value="12" icon={FileClock} />
            <StatCard title="Expiring Soon" value="3" icon={FileWarning} />
            <StatCard title="Recently Viewed" value="25" icon={Eye} />
        </div>
    );
}
