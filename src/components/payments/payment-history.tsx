import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Transaction, TransactionStatus } from "./payments-data";
import { Download, CheckCircle2, XCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";


interface PaymentHistoryProps {
  transactions: Transaction[];
}

const getStatusBadge = (status: TransactionStatus) => {
    const baseClasses = "gap-1.5";
    switch (status) {
        case "Success":
            return <Badge variant="default" className={cn(baseClasses, "bg-green-500/20 text-green-400 border-green-500/30")}><CheckCircle2 className="h-3 w-3" />{status}</Badge>;
        case "Failed":
             return <Badge variant="destructive" className={cn(baseClasses, "bg-red-500/20 text-red-400 border-red-500/30")}><XCircle className="h-3 w-3" />{status}</Badge>;
        case "Refunded":
            return <Badge variant="secondary" className={cn(baseClasses, "bg-yellow-500/20 text-yellow-400 border-yellow-500/30")}><RefreshCw className="h-3 w-3" />{status}</Badge>;
    }
};

export function PaymentHistory({ transactions }: PaymentHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
        <CardDescription>A record of all your transactions.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="pl-6">Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right pr-6">Receipt</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.length > 0 ? (
                        transactions.map(tx => (
                            <TableRow key={tx.id}>
                                <TableCell className="pl-6">{new Date(tx.date).toLocaleDateString('en-US', { timeZone: 'UTC' })}</TableCell>
                                <TableCell className="font-medium">${tx.amount.toFixed(2)}</TableCell>
                                <TableCell>{tx.method}</TableCell>
                                <TableCell>{getStatusBadge(tx.status)}</TableCell>
                                <TableCell className="text-right pr-6">
                                    <Button variant="ghost" size="icon">
                                        <Download className="h-4 w-4" />
                                        <span className="sr-only">Download Receipt</span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center">
                                No transactions found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
      </CardContent>
    </Card>
  );
}
