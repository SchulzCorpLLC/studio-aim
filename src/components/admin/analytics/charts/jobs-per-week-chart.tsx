'use client';
import { useState, useEffect } from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';

const chartConfig = {
  scheduled: {
    label: 'Scheduled',
    color: 'hsl(var(--muted-foreground))',
  },
  completed: {
    label: 'Completed',
    color: 'hsl(var(--primary))',
  },
};

interface JobsPerWeekData {
  week: string;
  scheduled: number;
  completed: number;
}

export function JobsPerWeekChart() {
  const [chartData] = useState<JobsPerWeekData[]>([]);

  useEffect(() => {
    // In a real app, you would fetch this data.
    // Leaving it empty for now to prep for real data.
  }, []);

  if (chartData.length === 0) {
    return <Skeleton className="h-80 w-full" />;
  }

  return (
    <ChartContainer config={chartConfig} className="h-80 w-full">
      <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="week"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="scheduled" stroke="var(--color-scheduled)" strokeWidth={2} strokeDasharray="5 5" />
        <Line type="monotone" dataKey="completed" stroke="var(--color-completed)" strokeWidth={2} />
      </LineChart>
    </ChartContainer>
  );
}
