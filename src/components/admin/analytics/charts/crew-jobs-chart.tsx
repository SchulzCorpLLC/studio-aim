'use client';
import { useState, useEffect } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';

const chartConfig = {
  jobs: { label: 'Jobs' },
  mike: { color: 'hsl(var(--chart-1))' },
  dave: { color: 'hsl(var(--chart-2))' },
  john: { color: 'hsl(var(--chart-3))' },
  leo: { color: 'hsl(var(--chart-4))' },
  frank: { color: 'hsl(var(--chart-5))' },
  paul: { color: 'hsl(var(--chart-1))' },
};

export function CrewJobsChart() {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // In a real app, you would fetch this data.
    // Leaving it empty for now to prep for real data.
  }, []);

  if (chartData.length === 0) {
    return <Skeleton className="h-80 w-full" />;
  }

  return (
    <ChartContainer config={chartConfig} className="h-80 w-full">
      <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ left: -10 }}>
        <YAxis
          dataKey="name"
          type="category"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />
        <XAxis type="number" hide />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="jobs" radius={5} />
      </BarChart>
    </ChartContainer>
  );
}
