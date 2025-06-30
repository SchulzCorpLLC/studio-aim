export type InvoiceStatus = 'Paid' | 'Open' | 'Overdue';
export type PaymentMethodType = 'Visa' | 'Mastercard' | 'Amex';
export type TransactionStatus = 'Success' | 'Failed' | 'Refunded';

export type Invoice = {
  id: string;
  date: string;
  dueDate: string;
  services: { description: string; amount: number }[];
  amount: number;
  status: InvoiceStatus;
};

export type PaymentMethod = {
  id: string;
  type: PaymentMethodType;
  last4: string;
  expiry: string;
  isDefault: boolean;
};

export type Transaction = {
  id: string;
  date: string;
  amount: number;
  method: string; // e.g., "Visa •••• 4242"
  invoiceId: string;
  status: TransactionStatus;
};

export const initialInvoices: Invoice[] = [];

export const initialPaymentMethods: PaymentMethod[] = [];

export const initialTransactions: Transaction[] = [];
