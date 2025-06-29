import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, CheckCircle } from "lucide-react";

const activities = [
  { icon: CheckCircle, text: "Your move has been successfully scheduled.", time: "1 day ago" },
  { icon: FileText, text: "You signed the 'Moving Agreement'.", time: "2 days ago" },
  { icon: Calendar, text: "A new quote was generated for you.", time: "3 days ago" },
];

export function RecentActivity() {
  return (
    <Card className="w-full rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <activity.icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{activity.text}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
