'use client';
import { Funnel, FunnelChart, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

const chartData = [
  { value: 100, name: 'Quote Request', fill: 'hsl(var(--chart-1))' },
  { value: 80, name: 'Contacted', fill: 'hsl(var(--chart-2))' },
  { value: 50, name: 'Quote Sent', fill: 'hsl(var(--chart-3))' },
  { value: 40, name: 'Follow-up', fill: 'hsl(var(--chart-4))' },
  { value: 30, name: 'Booked', fill: 'hsl(var(--chart-5))' },
];

const chartConfig = {
  value: { label: 'Count' },
  name: { label: 'Stage' },
};

export function ConversionFunnelChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full min-h-80">
        <ResponsiveContainer width="100%" height={400}>
            <FunnelChart layout="vertical">
                <Tooltip />
                <Funnel dataKey="value" data={chartData} isAnimationActive>
                <LabelList position="right" fill="#fff" stroke="none" dataKey="name" />
                </Funnel>
            </FunnelChart>
        </ResponsiveContainer>
    </ChartContainer>
  );
}
