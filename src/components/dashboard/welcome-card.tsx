import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressTracker } from "./progress-tracker";

export function WelcomeCard() {
  const customerName = "Alex Doe";
  const moveDetails = {
    date: "October 26, 2024",
    time: "9:00 AM - 11:00 AM",
    origin: "123 Main St, San Francisco, CA",
    destination: "456 Market St, San Francisco, CA",
    status: "Packed" as "Confirmed" | "Packed" | "In Transit" | "Delivered" | "Done"
  };

  return (
    <Card className="w-full rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-3xl tracking-tight">Hi, {customerName}!</CardTitle>
        <CardDescription className="text-base pt-1">
          Here's an overview of your upcoming move.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 rounded-lg border bg-card p-4 dark:bg-card/50 sm:grid-cols-2">
            <div>
                <p className="text-sm text-muted-foreground">From</p>
                <p className="font-semibold">{moveDetails.origin}</p>
            </div>
            <div className="sm:text-right">
                <p className="text-sm text-muted-foreground">To</p>
                <p className="font-semibold">{moveDetails.destination}</p>
            </div>
            <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-semibold">{moveDetails.date} at {moveDetails.time}</p>
            </div>
            <div className="sm:text-right">
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">{moveDetails.status}</Badge>
            </div>
        </div>
        <ProgressTracker currentStep={moveDetails.status} />
      </CardContent>
    </Card>
  );
}
