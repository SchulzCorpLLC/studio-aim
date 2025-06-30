import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface KpiCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
}

export function KpiCard({ title, value, change, icon: Icon }: KpiCardProps) {
  const isPositive = change >= 0;
  return (
    <Link href="#" className="block">
        <Card variant="hover">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className={cn("flex items-center gap-1", isPositive ? "text-green-500" : "text-red-500")}>
                {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                {Math.abs(change)}%
            </span>
            vs. last week
            </p>
        </CardContent>
        </Card>
    </Link>
  );
}
