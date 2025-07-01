'use client';

import { useState } from 'react';
import type { Invoice, PaymentMethod, Transaction } from '@/components/payments/payments-data';
import { BalanceOverview } from '@/components/payments/balance-overview';
import { InvoiceSummary } from '@/components/payments/invoice-summary';
import { PaymentMethods } from '@/components/payments/payment-methods';
import { PaymentHistory } from '@/components/payments/payment-history';
import { AddPaymentMethodModal } from '@/components/payments/add-payment-method-modal';
import { InvoiceViewerModal } from '@/components/payments/invoice-viewer-modal';
import { Lock } from 'lucide-react';

export default function PaymentsPage() {
  const [invoices] = useState<Invoice[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [transactions] = useState<Transaction[]>([]);

  const [isAddMethodModalOpen, setAddMethodModalOpen] = useState(false);
  const [isInvoiceViewerOpen, setInvoiceViewerOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleViewInvoice = (invoiceId: string) => {
    const invoice = invoices.find(inv => inv.id === invoiceId);
    if (invoice) {
      setSelectedInvoice(invoice);
      setInvoiceViewerOpen(true);
    }
  };
  
  const handleAddPaymentMethod = (newMethod: Omit<PaymentMethod, 'id'>) => {
    const newId = `pm_${Date.now()}`;
    setPaymentMethods(prev => [...prev, {id: newId, ...newMethod}]);
    setAddMethodModalOpen(false);
  };
  
  const handleRemovePaymentMethod = (methodId: string) => {
    setPaymentMethods(prev => prev.filter(pm => pm.id !== methodId));
  };

  const handleSetDefault = (methodId: string) => {
    setPaymentMethods(prev => 
        prev.map(pm => ({...pm, isDefault: pm.id === methodId}))
    );
  };

  const balanceDue = invoices
    .filter(inv => inv.status === 'Open' || inv.status === 'Overdue')
    .reduce((acc, inv) => acc + inv.amount, 0);

  const latestDueDate = invoices
    .filter(inv => inv.status === 'Open' || inv.status === 'Overdue')
    .sort((a,b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0]?.dueDate;

  return (
    <>
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Payments</h1>
          <p className="text-muted-foreground">View invoices, manage payment methods, and see your transaction history.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
                <BalanceOverview balanceDue={balanceDue} dueDate={latestDueDate} />
                <InvoiceSummary invoices={invoices} onViewInvoice={handleViewInvoice} />
                <PaymentHistory transactions={transactions} />
            </div>
            <div className="lg:col-span-1 space-y-8">
                 <PaymentMethods 
                    methods={paymentMethods} 
                    onAdd={() => setAddMethodModalOpen(true)}
                    onRemove={handleRemovePaymentMethod}
                    onSetDefault={handleSetDefault}
                 />
                 <div className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Lock className="h-4 w-4" />
                    <span>Secure payments powered by Stripe</span>
                 </div>
            </div>
        </div>
      </div>
      
      <AddPaymentMethodModal 
        isOpen={isAddMethodModalOpen}
        onClose={() => setAddMethodModalOpen(false)}
        onSubmit={handleAddPaymentMethod}
      />

      <InvoiceViewerModal 
        isOpen={isInvoiceViewerOpen}
        onClose={() => setInvoiceViewerOpen(false)}
        invoice={selectedInvoice}
      />
    </>
  );
}
