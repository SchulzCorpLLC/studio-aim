import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Invoice, InvoiceStatus } from "./payments-data";
import { FileText, Download, CheckCircle2, Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface InvoiceSummaryProps {
  invoices: Invoice[];
  onViewInvoice: (invoiceId: string) => void;
}

const getStatusBadge = (status: InvoiceStatus) => {
    const baseClasses = "gap-1.5";
    switch (status) {
        case "Paid":
            return <Badge variant="default" className={cn(baseClasses, "bg-green-500/20 text-green-400 border-green-500/30")}><CheckCircle2 className="h-3 w-3" />{status}</Badge>;
        case "Open":
            return <Badge variant="secondary" className={cn(baseClasses, "bg-blue-500/20 text-blue-400 border-blue-500/30")}><Clock className="h-3 w-3" />{status}</Badge>;
        case "Overdue":
             return <Badge variant="destructive" className={cn(baseClasses, "bg-red-500/20 text-red-400 border-red-500/30")}><AlertTriangle className="h-3 w-3" />{status}</Badge>;
    }
};

export function InvoiceSummary({ invoices, onViewInvoice }: InvoiceSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice Summary</CardTitle>
        <CardDescription>Review and download your past and present invoices.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
            {invoices.map((invoice) => (
              <AccordionItem value={invoice.id} key={invoice.id}>
                <AccordionTrigger>
                    <div className="flex items-center gap-4 text-left">
                        <FileText className="h-5 w-5 text-primary" />
                        <div className="flex-grow">
                            <p className="font-semibold">{invoice.id}</p>
                            <p className="text-sm text-muted-foreground">Issued: {new Date(invoice.date).toLocaleDateString('en-US', { timeZone: 'UTC' })}</p>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pl-6 pr-2">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-muted-foreground">Status</p>
                                {getStatusBadge(invoice.status)}
                            </div>
                            <div>
                                <p className="text-muted-foreground">Total</p>
                                <p className="font-bold text-lg">${invoice.amount.toFixed(2)}</p>
                            </div>
                        </div>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                            {invoice.services.map(service => (
                                <li key={service.description} className="flex justify-between">
                                    <span>{service.description}</span>
                                    <span>${service.amount.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-end gap-2 pt-2">
                            <Button variant="outline" size="sm" onClick={() => onViewInvoice(invoice.id)}>View Invoice</Button>
                            <Button variant="ghost" size="sm"><Download className="mr-2"/>Download PDF</Button>
                        </div>
                    </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
