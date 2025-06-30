'use client';
import { useState, useEffect } from 'react';
import { Funnel, FunnelChart, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';

const chartConfig = {
  value: { label: 'Count' },
  name: { label: 'Stage' },
};

export function ConversionFunnelChart() {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // In a real app, you would fetch this data.
    // Leaving it empty for now to prep for real data.
  }, []);

  if (chartData.length === 0) {
    return <Skeleton className="min-h-80 h-full w-full" />;
  }

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
