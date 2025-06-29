import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import Link from "next/link";

export function ReferralsCta() {
    return (
        <Card className="w-full rounded-lg shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
                <Gift className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                    <CardTitle className="text-xl">Refer a Friend</CardTitle>
                    <CardDescription>Earn rewards for sharing!</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                   Enjoying our service? Share the love and get a $25 credit for every friend who books a move with us.
                </p>
                <Button asChild className="w-full">
                    <Link href="/referrals">
                        Get Your Referral Code
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
