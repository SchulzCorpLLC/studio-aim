'use client';

import { useState, useEffect } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--primary))',
  },
};

interface RevenueData {
  date: string;
  revenue: number;
}

export function RevenueChart() {
  const [data] = useState<RevenueData[]>([]);

  useEffect(() => {
    // In a real app, you would fetch this data from your backend.
    // We are leaving this empty to represent a clean, production-ready state.
    // setTimeout(() => {
    //     setData([
    //         { date: 'Mon', revenue: Math.floor(Math.random() * 2500) + 500 },
    //         { date: 'Tue', revenue: Math.floor(Math.random() * 2500) + 500 },
    //         { date: 'Wed', revenue: Math.floor(Math.random() * 2500) + 500 },
    //         { date: 'Thu', revenue: Math.floor(Math.random() * 2500) + 500 },
    //         { date: 'Fri', revenue: Math.floor(Math.random() * 2500) + 500 },
    //         { date: 'Sat', revenue: Math.floor(Math.random() * 2500) + 500 },
    //         { date: 'Sun', revenue: Math.floor(Math.random() * 2500) + 500 },
    //     ]);
    // }, 500);
  }, []);

  if (data.length === 0) {
      return <Skeleton className="h-80 w-full" />
  }

  return (
    <div className="h-80 w-full">
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={data} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
            <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
            />
          <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
