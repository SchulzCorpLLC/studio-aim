import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface Activity {
  status: 'New' | 'Info' | 'Warning';
  text: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
}

const mockActivities: Activity[] = [
  // Example data has been removed for cleanup.
  // This should be populated from a real-time data source.
];

const statusConfig = {
    New: { badgeClass: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    Info: { badgeClass: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
    Warning: { badgeClass: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
};

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Activity Feed</CardTitle>
        <CardDescription>Latest updates from across the platform.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-6">
            {mockActivities.length > 0 ? mockActivities.map((activity, index) => {
              const config = statusConfig[activity.status as keyof typeof statusConfig] || statusConfig.Info;
              const Icon = activity.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                   <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                     <Icon className="h-5 w-5 text-muted-foreground" />
                   </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.text}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className={cn("text-xs", config.badgeClass)}>{activity.status}</Badge>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                </div>
              );
            }) : (
              <div className="text-center py-16 text-muted-foreground">
                  <List className="mx-auto h-12 w-12" />
                  <h3 className="text-xl font-semibold mt-4">No Recent Activity</h3>
                  <p>Live updates will appear here as they happen.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
