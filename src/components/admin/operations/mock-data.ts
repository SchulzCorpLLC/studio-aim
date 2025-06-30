import type { LucideIcon } from 'lucide-react';

export type Lead = {
    id: string;
    name: string;
    contact: string;
    source: 'Web Form' | 'Phone Call' | 'Referral';
    status: 'New' | 'Contacted' | 'Converted' | 'Closed';
    priority: 'High' | 'Medium' | 'Low';
    quoteAmount: number;
    lastContacted: string;
};

export const mockLeads: Lead[] = [];

export type Job = {
    id: string;
    customer: string;
    date: string;
    status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled' | 'On Hold';
    crew: string[];
    truckId: string;
    revenue: number;
};

export const mockJobs: Job[] = [];

export type CrewMember = {
    id: string;
    name: string;
    role: 'Driver' | 'Mover' | 'Lead Mover';
    status: 'Available' | 'On Job' | 'Unavailable' | 'On Break';
    contact: string;
    avatarUrl: string;
    assignedJobId?: string;
};

export const mockCrew: CrewMember[] = [];

export type Vehicle = {
    id: string;
    makeModel: string;
    capacity: string;
    status: 'Available' | 'In Use' | 'Maintenance';
    assignedJobId?: string;
    imageUrl: string;
};

export const mockFleet: Vehicle[] = [];

export type MaintenanceTask = {
    id: string;
    vehicleId: string;
    issue: string;
    dateReported: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Pending' | 'In Progress' | 'Completed';
}

export const mockMaintenance: MaintenanceTask[] = [];

export type InventoryItem = {
    id: string;
    name: string;
    room: string;
    quantity: number;
    tags?: ('Fragile' | 'Oversized' | 'Damaged' | 'Missing')[];
    notes?: string;
}

export const mockInventories: Record<string, InventoryItem[]> = {};

// CRM Data
export type Customer = {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: 'Client' | 'Lead' | 'Archived';
    jobsCount: number;
    totalSpent: number;
    avatarUrl: string;
    tags: ('VIP' | 'Repeat' | 'High-Risk')[];
};

export const mockCustomers: Customer[] = [];

export type Review = {
    id: string;
    customerName: string;
    jobId: string;
    rating: 1 | 2 | 3 | 4 | 5;
    reviewText: string;
    date: string;
    responseStatus: 'Responded' | 'Pending';
};

export const mockReviews: Review[] = [];

export type Communication = {
    id: string;
    participantId: string;
    participantName: string;
    avatarUrl: string;
    type: 'Email' | 'Call' | 'SMS' | 'System' | 'Internal Note';
    subject: string;
    lastMessage: string;
    timestamp: string;
    isRead: boolean;
    thread: {
        sender: string;
        message: string;
        time: string;
    }[];
};

export const mockCommunications: Communication[] = [];

// FINANCE DATA

export type Payment = {
    id: string;
    customerName: string;
    jobId: string;
    amount: number;
    method: 'Visa' | 'Mastercard' | 'ACH' | 'Manual' | 'Crypto';
    date: string;
    status: 'Paid' | 'Pending' | 'Failed';
};

export const mockPayments: Payment[] = [];

export type Invoice = {
    id: string;
    customerName: string;
    jobId: string;
    dateIssued: string;
    total: number;
    status: 'Paid' | 'Sent' | 'Overdue' | 'Draft';
};

export const mockInvoices: Invoice[] = [];

export type Promo = {
    id: string;
    code: string;
    type: 'Percentage' | 'Fixed Amount';
    value: number;
    useCount: number;
    status: 'Active' | 'Expired' | 'Scheduled';
    expiryDate: string;
};

export const mockPromos: Promo[] = [];

export type Refund = {
    id: string;
    customerName: string;
    jobId: string;
    type: 'Refund' | 'Credit';
    amount: number;
    reason: string;
    date: string;
    status: 'Issued' | 'In Review' | 'Rejected';
};

export const mockRefunds: Refund[] = [];

// DOCUMENTS DATA
export type Document = {
    id: string;
    name: string;
    type: 'Contract' | 'Bill of Lading' | 'Inventory Sheet' | 'Claim Form' | 'Crew Agreement';
    status: 'Signed' | 'Pending Signature' | 'Draft' | 'Archived';
    linkedTo: string; // Job ID, Customer ID, etc.
    createdBy: string;
    date: string;
};

export const mockDocuments: Document[] = [];

export type DocumentTemplate = {
    id: string;
    name: string;
    category: 'Client Facing' | 'Crew Management' | 'Internal';
    lastUpdated: string;
};

export const mockDocumentTemplates: DocumentTemplate[] = [];

// SUPPORT DATA

export type AdminClaim = {
    id: string;
    jobId: string;
    customerName: string;
    type: 'Damage' | 'Lost Item' | 'Overcharge';
    status: 'Under Review' | 'Approved' | 'Rejected';
    date: string;
    amount: number;
}

export const mockAdminClaims: AdminClaim[] = [];

export type SupportTicket = {
    id: string;
    subject: string;
    customerName: string;
    status: 'Open' | 'Pending' | 'Resolved';
    priority: 'High' | 'Medium' | 'Low';
    date: string;
    assignedTo: string;
}

export const mockSupportTickets: SupportTicket[] = [];

export type Notification = {
    id: string;
    icon: LucideIcon;
    text: string;
    timestamp: string;
    isRead: boolean;
    link: string;
    category: 'Jobs' | 'Payments' | 'Users' | 'Claims';
}

export const mockNotifications: Notification[] = [];

// SETTINGS DATA
export type AdminUser = {
    id: string;
    name: string;
    email: string;
    role: 'Owner' | 'Admin' | 'Dispatcher' | 'Support';
    status: 'Active' | 'Invited' | 'Deactivated';
    lastLogin: string;
    avatarUrl: string;
};

export const mockAdminUsers: AdminUser[] = [];

export type ApiKey = {
    id: string;
    name: string;
    token: string;
    status: 'Active' | 'Revoked';
    createdDate: string;
    lastUsed: string;
}

export const mockApiKeys: ApiKey[] = [];

export type Webhook = {
    id: string;
    url: string;
    status: 'Active' | 'Disabled';
    events: string[];
}

export const mockWebhooks: Webhook[] = [];
