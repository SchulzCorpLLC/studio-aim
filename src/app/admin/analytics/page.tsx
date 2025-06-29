'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { DateRangePicker } from '@/components/admin/analytics/date-range-picker';
import { Download } from 'lucide-react';
import { JobPerformanceSection } from '@/components/admin/analytics/job-performance-section';
import { ConversionRatesSection } from '@/components/admin/analytics/conversion-rates-section';
import { RevenueSection } from '@/components/admin/analytics/revenue-section';
import { CrewProductivitySection } from '@/components/admin/analytics/crew-productivity-section';

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Analytics & Reports</h1>
          <p className="text-muted-foreground">
            Visualize your business performance and identify trends.
          </p>
        </div>
        <div className="flex items-center gap-2">
            <DateRangePicker />
            <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export PDF
            </Button>
        </div>
      </header>

      <Tabs defaultValue="jobs">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="jobs">Job Performance</TabsTrigger>
          <TabsTrigger value="conversion">Conversion Rates</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="crew">Crew Productivity</TabsTrigger>
        </TabsList>
        <TabsContent value="jobs" className="mt-6">
            <JobPerformanceSection />
        </TabsContent>
        <TabsContent value="conversion" className="mt-6">
            <ConversionRatesSection />
        </TabsContent>
        <TabsContent value="revenue" className="mt-6">
            <RevenueSection />
        </TabsContent>
        <TabsContent value="crew" className="mt-6">
            <CrewProductivitySection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
