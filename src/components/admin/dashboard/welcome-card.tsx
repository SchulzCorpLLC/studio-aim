import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressTracker } from "./progress-tracker";

export function WelcomeCard() {
  return (
    <Card variant="hover">
      <CardHeader>
        <CardTitle className="text-3xl tracking-tight">Welcome!</CardTitle>
        <CardDescription className="text-base pt-1">
          Here's an overview of your upcoming move.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 rounded-lg border bg-card p-4 dark:bg-card/50 sm:grid-cols-2">
            <div>
                <p className="text-sm text-muted-foreground">From</p>
                <p className="font-semibold">TBD</p>
            </div>
            <div className="sm:text-right">
                <p className="text-sm text-muted-foreground">To</p>
                <p className="font-semibold">TBD</p>
            </div>
            <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-semibold">TBD</p>
            </div>
            <div className="sm:text-right">
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">Quote Requested</Badge>
            </div>
        </div>
        <ProgressTracker currentStep={"Confirmed"} />
      </CardContent>
    </Card>
  );
}
