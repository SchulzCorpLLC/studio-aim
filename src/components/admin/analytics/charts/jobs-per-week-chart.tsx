'use client';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';

const chartData = [
  { week: 'Week 1', scheduled: 40, completed: 32 },
  { week: 'Week 2', scheduled: 30, completed: 28 },
  { week: 'Week 3', scheduled: 52, completed: 48 },
  { week: 'Week 4', scheduled: 45, completed: 45 },
];

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

export function JobsPerWeekChart() {
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
