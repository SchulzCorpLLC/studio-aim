import { AnalyticsStatCard } from './stat-card';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Users, Briefcase, Star, Clock } from 'lucide-react';
import { CrewJobsChart } from './charts/crew-jobs-chart';

export function CrewProductivitySection() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <AnalyticsStatCard title="Avg. Jobs per Crew" value="0" icon={Briefcase} />
                <AnalyticsStatCard title="Top Crew Rating" value="0.0" icon={Star} />
                <AnalyticsStatCard title="On-Time Start %" value="0%" icon={Clock} />
                <AnalyticsStatCard title="Total Crew" value="0" icon={Users} />
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Jobs Completed by Crew</CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                    <CrewJobsChart />
                </CardContent>
            </Card>
        </div>
    );
}
