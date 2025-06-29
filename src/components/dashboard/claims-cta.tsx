import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";

export function ClaimsCta() {
    return (
        <Card className="w-full rounded-lg shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
                <ShieldAlert className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                    <CardTitle className="text-xl">Move Completed</CardTitle>
                    <CardDescription>Need to report an issue?</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                    If any of your items were damaged or are missing, please file a claim within 90 days of your move date.
                </p>
                <Button asChild className="w-full">
                    <Link href="/claims">
                        Submit a Claim
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
