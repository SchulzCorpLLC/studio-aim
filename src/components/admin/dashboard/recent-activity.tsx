import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, CheckCircle, List } from "lucide-react";

export function RecentActivity() {
  return (
    <Card variant="hover">
      <CardHeader>
        <CardTitle className="text-2xl">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8 text-muted-foreground">
            <List className="mx-auto h-12 w-12" />
            <h3 className="text-xl font-semibold mt-4">No Recent Activity</h3>
            <p>Your recent actions will appear here.</p>
        </div>
      </CardContent>
    </Card>
  );
}
