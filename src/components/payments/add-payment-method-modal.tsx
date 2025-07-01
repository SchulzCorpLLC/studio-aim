'use client';

import type { PaymentMethod } from './payments-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard } from 'lucide-react';

interface AddPaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newMethod: Omit<PaymentMethod, 'id'>) => void;
}

export function AddPaymentMethodModal({ isOpen, onClose, onSubmit }: AddPaymentMethodModalProps) {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd get form data. Here we just submit a mock.
    onSubmit({
        type: 'Visa',
        last4: Math.floor(1000 + Math.random() * 9000).toString(),
        expiry: '12/28',
        isDefault: false,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2"><CreditCard /> Add New Payment Method</DialogTitle>
          <DialogDescription>
            Your payment information is securely handled by Stripe.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="•••• •••• •••• ••••" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="expiry-date">Expiry Date</Label>
                    <Input id="expiry-date" placeholder="MM / YY" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="•••" />
                </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="name-on-card">Name on Card</Label>
                <Input id="name-on-card" placeholder="Alex Doe" />
            </div>
            <DialogFooter>
            <Button variant="outline" type="button" onClick={onClose}>
                Cancel
            </Button>
            <Button type="submit">Add Card</Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
