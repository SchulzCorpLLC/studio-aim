import { AnalyticsStatCard } from './stat-card';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { CreditCard, DollarSign, Wallet, TrendingUp } from 'lucide-react';
import { RevenueBySourceChart } from './charts/revenue-by-source-chart';

export function RevenueSection() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <AnalyticsStatCard title="Total Revenue (30d)" value="$0" icon={DollarSign} />
                <AnalyticsStatCard title="Revenue this Month" value="$0" icon={Wallet} />
                <AnalyticsStatCard title="Avg. Job Value" value="$0" icon={TrendingUp} />
                <AnalyticsStatCard title="Primary Payment" value="--" icon={CreditCard} />
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Revenue by Source</CardTitle>
                    <CardDescription>Breakdown of revenue from different acquisition channels.</CardDescription>
                </CardHeader>
                <CardContent>
                    <RevenueBySourceChart />
                </CardContent>
            </Card>
        </div>
    );
}
