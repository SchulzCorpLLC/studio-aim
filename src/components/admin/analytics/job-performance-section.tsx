import { AnalyticsStatCard } from './stat-card';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Briefcase, Clock, Star, TrendingUp } from 'lucide-react';
import { JobsPerWeekChart } from './charts/jobs-per-week-chart';
import { JobTypesChart } from './charts/job-types-chart';

export function JobPerformanceSection() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <AnalyticsStatCard title="Total Jobs (30d)" value="128" icon={Briefcase} description="+20% from last month" />
                <AnalyticsStatCard title="On-Time Completion" value="96%" icon={TrendingUp} />
                <AnalyticsStatCard title="Avg. Job Duration" value="3.5 hrs" icon={Clock} />
                <AnalyticsStatCard title="Avg. Rating" value="4.8" icon={Star} />
            </div>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Jobs per Week</CardTitle>
                        <CardDescription>Scheduled vs. Completed jobs over the last 4 weeks.</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <JobsPerWeekChart />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Job Types</CardTitle>
                        <CardDescription>Breakdown of all jobs by service type in the last 30 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <JobTypesChart />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
