
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Clock, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type ClaimStatus = "Submitted" | "Under Review" | "Approved" | "Closed" | "Denied";

export type Claim = {
  id: string;
  title: string;
  dateSubmitted: string;
  status: ClaimStatus;
};

interface ClaimHistoryProps {
  claims: Claim[];
}

const getStatusBadge = (status: ClaimStatus) => {
    const baseClasses = "gap-1.5";
    switch (status) {
        case "Submitted":
        case "Under Review":
            return <Badge variant="secondary" className={cn(baseClasses, "bg-yellow-500/20 text-yellow-400 border-yellow-500/30")}><Clock className="h-3 w-3" />{status}</Badge>;
        case "Approved":
            return <Badge variant="default" className={cn(baseClasses, "bg-green-500/20 text-green-400 border-green-500/30")}><CheckCircle2 className="h-3 w-3" />{status}</Badge>;
        case "Closed":
             return <Badge variant="outline">{status}</Badge>;
        case "Denied":
             return <Badge variant="destructive" className={cn(baseClasses, "bg-red-500/20 text-red-400 border-red-500/30")}><XCircle className="h-3 w-3" />{status}</Badge>;
        default:
            return <Badge variant="outline">{status}</Badge>;
    }
};

export function ClaimHistory({ claims }: ClaimHistoryProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Claim History</CardTitle>
        <CardDescription>A log of all claims you have submitted.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {claims.length > 0 ? (
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="pl-6">Claim ID</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right pr-6">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {claims.map(claim => (
                            <TableRow key={claim.id}>
                                <TableCell className="pl-6 font-mono text-xs">{claim.id}</TableCell>
                                <TableCell className="font-medium">{claim.title}</TableCell>
                                <TableCell>{new Date(claim.dateSubmitted).toLocaleDateString('en-US', { timeZone: 'UTC' })}</TableCell>
                                <TableCell>{getStatusBadge(claim.status)}</TableCell>
                                <TableCell className="text-right pr-6">
                                    <Button variant="ghost" size="sm">
                                        <Eye className="mr-2 h-4 w-4" /> View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        ) : (
            <div className="text-center py-16 px-6">
                <p className="text-muted-foreground">You have not submitted any claims yet.</p>
                <p className="text-sm text-muted-foreground/80">Click &quot;Start New Claim&quot; to begin.</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
