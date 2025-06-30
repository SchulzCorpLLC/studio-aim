'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, FileText, Check, MessageSquare, Clock, AlertTriangle } from "lucide-react";

interface KpiCardProps {
    title: string;
    value: string;
    change: number;
    icon: React.ElementType;
}

const StatCard = ({ title, value, change, icon: Icon }: KpiCardProps) => {
    const isPositive = change >= 0;
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className={`flex items-center gap-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>
                        {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                        {Math.abs(change)}%
                    </span>
                    vs. last week
                </p>
            </CardContent>
        </Card>
    );
}


export function LeadsKpiCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Quotes Pending Response" value="0" change={0} icon={FileText} />
            <StatCard title="Converted This Week" value="0" change={0} icon={Check} />
            <StatCard title="Follow-ups Due Today" value="0" change={0} icon={MessageSquare} />
            <StatCard title="Cold Leads (>7 days)" value="0" change={0} icon={AlertTriangle} />
        </div>
    );
}
