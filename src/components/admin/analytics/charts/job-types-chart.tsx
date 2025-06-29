'use client';
import { Pie, PieChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';

const chartData = [
  { type: 'Local', jobs: 275, fill: 'var(--color-local)' },
  { type: 'Long-distance', jobs: 120, fill: 'var(--color-long-distance)' },
  { type: 'Commercial', jobs: 80, fill: 'var(--color-commercial)' },
  { type: 'Storage', jobs: 50, fill: 'var(--color-storage)' },
];

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
