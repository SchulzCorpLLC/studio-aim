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

export const initialInvoices: Invoice[] = [
  {
    id: 'INV-2024-001',
    date: '2024-10-15',
    dueDate: '2024-10-30',
    services: [
        { description: 'Moving Services (Base)', amount: 400 },
        { description: 'Packing Supplies', amount: 80 }
    ],
    amount: 480.00,
    status: 'Open',
  },
  {
    id: 'INV-2024-000',
    date: '2024-09-01',
    dueDate: '2024-09-15',
    services: [
        { description: 'Booking Deposit', amount: 100 }
    ],
    amount: 100.00,
    status: 'Paid',
  },
];

export const initialPaymentMethods: PaymentMethod[] = [
  {
    id: 'pm_1',
    type: 'Visa',
    last4: '4242',
    expiry: '12/26',
    isDefault: true,
  },
  {
    id: 'pm_2',
    type: 'Mastercard',
    last4: '5555',
    expiry: '08/25',
    isDefault: false,
  },
];

export const initialTransactions: Transaction[] = [
  {
    id: 'TR-001',
    date: '2024-09-01',
    amount: 100.00,
    method: 'Visa •••• 4242',
    invoiceId: 'INV-2024-000',
    status: 'Success',
  },
];
