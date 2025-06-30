'use client';
import { useState, useEffect } from 'react';
import { Pie, PieChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';

const chartConfig = {
  jobs: {
    label: 'Jobs',
  },
  local: {
    label: 'Local',
    color: 'hsl(var(--chart-1))',
  },
  'long-distance': {
    label: 'Long-distance',
    color: 'hsl(var(--chart-2))',
  },
  commercial: {
    label: 'Commercial',
    color: 'hsl(var(--chart-3))',
  },
  storage: {
    label: 'Storage',
    color: 'hsl(var(--chart-4))',
  },
};

export function JobTypesChart() {
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
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="type" />} />
        <Pie data={chartData} dataKey="jobs" nameKey="type" innerRadius={60} />
        <ChartLegend content={<ChartLegendContent nameKey="type" />} />
      </PieChart>
    </ChartContainer>
  );
}
