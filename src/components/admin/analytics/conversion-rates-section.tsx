import { AnalyticsStatCard } from './stat-card';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Briefcase, FileText, Percent, Clock } from 'lucide-react';
import { ConversionFunnelChart } from './charts/conversion-funnel-chart';

export function ConversionRatesSection() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <AnalyticsStatCard title="Total Leads (30d)" value="250" icon={FileText} description="+15% from last month" />
                <AnalyticsStatCard title="Booked Jobs" value="80" icon={Briefcase} />
                <AnalyticsStatCard title="Conversion Rate" value="32%" icon={Percent} />
                <AnalyticsStatCard title="Avg. Time to Book" value="4.2 days" icon={Clock} />
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Sales Conversion Funnel</CardTitle>
                    <CardDescription>From initial contact to a booked job.</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex justify-center items-center">
                    <ConversionFunnelChart />
                </CardContent>
            </Card>
        </div>
    );
}
