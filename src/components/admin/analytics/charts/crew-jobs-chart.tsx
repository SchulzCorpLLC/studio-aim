'use client';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { name: 'Mike R.', jobs: 18, fill: 'var(--color-mike)' },
  { name: 'Dave R.', jobs: 15, fill: 'var(--color-dave)' },
  { name: 'John S.', jobs: 12, fill: 'var(--color-john)' },
  { name: 'Leo M.', jobs: 10, fill: 'var(--color-leo)' },
  { name: 'Frank C.', jobs: 9, fill: 'var(--color-frank)' },
  { name: 'Paul A.', jobs: 5, fill: 'var(--color-paul)' },
];

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
