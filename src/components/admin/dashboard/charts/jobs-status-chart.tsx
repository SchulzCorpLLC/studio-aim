'use client';
import { useState, useEffect } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';

const chartConfig = {
  jobs: {
    label: 'Jobs',
    color: 'hsl(var(--primary))',
  },
};

interface JobStatusData {
  status: string;
  jobs: number;
}

export function JobsStatusChart() {
    const [data] = useState<JobStatusData[]>([]);

    useEffect(() => {
      // In a real app, you would fetch this data from your backend.
      // We are leaving this empty to represent a clean, production-ready state.
      // setTimeout(() => {
      //   setData([
      //       { status: 'Scheduled', jobs: Math.floor(Math.random() * 20) },
      //       { status: 'In Progress', jobs: Math.floor(Math.random() * 10) },
      //       { status: 'Completed', jobs: Math.floor(Math.random() * 30) },
      //       { status: 'Cancelled', jobs: Math.floor(Math.random() * 5) },
      //   ]);
      // }, 500)
    }, []);

    if (data.length === 0) {
        return <Skeleton className="h-80 w-full" />
    }

  return (
    <div className="h-80 w-full">
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={data} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <YAxis dataKey="status" type="category" tickLine={false} axisLine={false} tickMargin={10} />
            <XAxis type="number" hide />
             <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
          <Bar dataKey="jobs" fill="var(--color-jobs)" radius={5} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
