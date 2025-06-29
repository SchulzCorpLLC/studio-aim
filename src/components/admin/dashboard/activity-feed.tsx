import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, Info, FileText, Truck, User } from "lucide-react";

const mockActivities = [
  { text: "New quote submitted by John Doe (Los Angeles)", time: "2m ago", status: "New", icon: FileText },
  { text: "Job #2043 marked complete by Crew B", time: "15m ago", status: "Info", icon: CheckCircle },
  { text: "Claim opened on Job #1998", time: "45m ago", status: "Warning", icon: AlertTriangle },
  { text: "Invoice #A132 sent to Sarah Lin", time: "1h ago", status: "Info", icon: FileText },
  { text: "Truck 5 returned from Job #2031", time: "2h ago", status: "Info", icon: Truck },
  { text: "Crew A assigned to Job #2045", time: "3h ago", status: "Info", icon: User },
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
            {mockActivities.map((activity, index) => {
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
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
