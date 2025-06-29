'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Settings, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntegrationCardProps {
    name: string;
    description: string;
    logo: LucideIcon;
    isConnected: boolean;
}

export function IntegrationCard({ name, description, logo: Logo, isConnected }: IntegrationCardProps) {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="bg-muted p-3 rounded-lg">
                            <Logo className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-xl">{name}</CardTitle>
                    </div>
                    <Badge variant={isConnected ? 'default' : 'outline'} className={cn(isConnected && "bg-green-500/20 text-green-400 border-green-500/30", "gap-1.5")}>
                        {isConnected ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                        {isConnected ? 'Connected' : 'Not Connected'}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription>{description}</CardDescription>
                <Button variant="outline" className="w-full mt-6">
                    <Settings className="mr-2 h-4 w-4" />
                    Configure
                </Button>
            </CardContent>
        </Card>
    )
}
