import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, AlertCircle } from "lucide-react";

interface BalanceOverviewProps {
  balanceDue: number;
  dueDate?: string;
}

export function BalanceOverview({ balanceDue, dueDate }: BalanceOverviewProps) {
  const isPaid = balanceDue <= 0;

  return (
    <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Wallet className="h-8 w-8" />
          <span>Current Balance</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-5xl font-bold tracking-tighter">
          ${balanceDue.toFixed(2)}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div>
            {isPaid ? (
              <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30 text-base">All Paid Up!</Badge>
            ) : (
              <Badge variant="destructive" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-base">Unpaid</Badge>
            )}
            {!isPaid && dueDate && (
              <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1.5">
                <AlertCircle className="h-4 w-4" />
                Due by {new Date(dueDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}
              </p>
            )}
          </div>
          <Button size="lg" disabled={isPaid}>
            Pay Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
