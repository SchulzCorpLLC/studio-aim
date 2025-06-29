import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Logo } from '@/components/logo';
import type { Invoice } from './payments-data';
import { Badge } from '../ui/badge';

interface InvoiceViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoice: Invoice | null;
}

export function InvoiceViewerModal({ isOpen, onClose, invoice }: InvoiceViewerModalProps) {
  if (!invoice) return null;

  const totalAmount = invoice.services.reduce((acc, item) => acc + item.amount, 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Invoice {invoice.id}</DialogTitle>
          <DialogDescription>
            Issued on {new Date(invoice.date).toLocaleDateString('en-US', { timeZone: 'UTC' })}. Due by {new Date(invoice.dueDate).toLocaleDateString('en-US', { timeZone: 'UTC' })}.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] p-1 border rounded-md">
            <div className="p-6">
                <header className="flex justify-between items-start mb-8">
                    <Logo />
                    <div className="text-right">
                        <h2 className="text-2xl font-bold uppercase">Invoice</h2>
                        <p className="text-muted-foreground">{invoice.id}</p>
                        <Badge variant={invoice.status === 'Paid' ? 'default' : 'destructive'} className="mt-2">{invoice.status}</Badge>
                    </div>
                </header>
                <section className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="font-semibold text-muted-foreground mb-2">Billed To</h3>
                        <p>Alex Doe</p>
                        <p>123 Main St</p>
                        <p>San Francisco, CA, 94107</p>
                    </div>
                    <div className="text-right">
                        <h3 className="font-semibold text-muted-foreground mb-2">From</h3>
                        <p>MovePortal Inc.</p>
                        <p>789 Mover Ave</p>
                        <p>San Francisco, CA, 94102</p>
                    </div>
                </section>
                <section>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Service Description</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoice.services.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.description}</TableCell>
                                    <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </section>
                 <section className="mt-8 flex justify-end">
                    <div className="w-full max-w-xs space-y-2">
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                         <div className="flex justify-between font-bold text-xl text-primary border-t pt-2">
                            <span>Amount Due</span>
                            <span>${invoice.status === 'Paid' ? '0.00' : totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                 </section>
                 <footer className="text-center text-xs text-muted-foreground mt-12">
                    <p>Thank you for your business!</p>
                    <p>Questions? Contact support@moveportal.com</p>
                 </footer>
            </div>
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button>Download PDF</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
