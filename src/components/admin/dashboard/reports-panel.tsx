import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RevenueChart } from "./charts/revenue-chart";
import { JobsStatusChart } from "./charts/jobs-status-chart";

export function ReportsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports</CardTitle>
        <CardDescription>Visual trends from your recent activity.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="revenue">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="jobs">Jobs by Status</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue">
            <RevenueChart />
          </TabsContent>
          <TabsContent value="jobs">
            <JobsStatusChart />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
