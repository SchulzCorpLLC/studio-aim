'use client';
import { useState, useEffect } from 'react';
import { Pie, PieChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';

const chartConfig = {
  revenue: { label: 'Revenue' },
  website: { label: 'Website', color: 'hsl(var(--chart-1))' },
  referral: { label: 'Referral', color: 'hsl(var(--chart-2))' },
  ads: { label: 'Ads', color: 'hsl(var(--chart-3))' },
  repeat: { label: 'Repeat', color: 'hsl(var(--chart-4))' },
};

export function RevenueBySourceChart() {
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
        <ChartTooltip formatter={(value) => `$${value.toLocaleString()}`} content={<ChartTooltipContent nameKey="source" />} />
        <Pie data={chartData} dataKey="revenue" nameKey="source" innerRadius={60} />
        <ChartLegend content={<ChartLegendContent nameKey="source" />} />
      </PieChart>
    </ChartContainer>
  );
}
