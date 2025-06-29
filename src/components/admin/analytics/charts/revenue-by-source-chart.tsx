'use client';
import { Pie, PieChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';

const chartData = [
  { source: 'Website', revenue: 45000, fill: 'var(--color-website)' },
  { source: 'Referral', revenue: 25000, fill: 'var(--color-referral)' },
  { source: 'Ads', revenue: 10000, fill: 'var(--color-ads)' },
  { source: 'Repeat', revenue: 5231, fill: 'var(--color-repeat)' },
];

const chartConfig = {
  revenue: { label: 'Revenue' },
  website: { label: 'Website', color: 'hsl(var(--chart-1))' },
  referral: { label: 'Referral', color: 'hsl(var(--chart-2))' },
  ads: { label: 'Ads', color: 'hsl(var(--chart-3))' },
  repeat: { label: 'Repeat', color: 'hsl(var(--chart-4))' },
};

export function RevenueBySourceChart() {
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
