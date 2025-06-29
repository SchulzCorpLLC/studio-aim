import type { LucideIcon } from 'lucide-react';
import { FileText, DollarSign, UserPlus, ShieldAlert, CheckCircle } from 'lucide-react';


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

export const mockLeads: Lead[] = [
    { id: 'LEAD-001', name: 'John Doe', contact: 'john.d@example.com', source: 'Web Form', status: 'New', priority: 'High', quoteAmount: 2200, lastContacted: '2 hours ago' },
    { id: 'LEAD-002', name: 'Jane Smith', contact: '555-1234', source: 'Phone Call', status: 'Contacted', priority: 'Medium', quoteAmount: 3100, lastContacted: '1 day ago' },
    { id: 'LEAD-003', name: 'Sam Wilson', contact: 'sam.w@example.com', source: 'Referral', status: 'Converted', priority: 'Medium', quoteAmount: 4500, lastContacted: '3 days ago' },
    { id: 'LEAD-004', name: 'Alice Brown', contact: 'alice.b@example.com', source: 'Web Form', status: 'Closed', priority: 'Low', quoteAmount: 1850, lastContacted: '1 week ago' },
    { id: 'LEAD-005', name: 'Bob Johnson', contact: '555-5678', source: 'Phone Call', status: 'New', priority: 'Medium', quoteAmount: 2600, lastContacted: '3 hours ago' },
];

export type Job = {
    id: string;
    customer: string;
    date: string;
    status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled' | 'On Hold';
    crew: string[];
    truckId: string;
    revenue: number;
};

export const mockJobs: Job[] = [
    { id: 'JOB-001', customer: 'Sam Wilson', date: '2024-11-10', status: 'Completed', crew: ['Mike', 'Dave'], truckId: 'TRUCK-01', revenue: 2500 },
    { id: 'JOB-002', customer: 'Emily Clark', date: '2024-11-12', status: 'Scheduled', crew: ['John', 'Leo'], truckId: 'TRUCK-03', revenue: 1800 },
    { id: 'JOB-003', customer: 'Chris Lee', date: '2024-11-11', status: 'In Progress', crew: ['Frank', 'Paul'], truckId: 'TRUCK-02', revenue: 3200 },
    { id: 'JOB-004', customer: 'Sarah Adams', date: '2024-11-15', status: 'Scheduled', crew: [], truckId: '', revenue: 2100 },
    { id: 'JOB-005', customer: 'Kevin Harris', date: '2024-10-28', status: 'Cancelled', crew: ['John'], truckId: 'TRUCK-01', revenue: 0 },
];

export type CrewMember = {
    id: string;
    name: string;
    role: 'Driver' | 'Mover' | 'Lead Mover';
    status: 'Available' | 'On Job' | 'Unavailable' | 'On Break';
    contact: string;
    avatarUrl: string;
    assignedJobId?: string;
};

export const mockCrew: CrewMember[] = [
    { id: 'CREW-01', name: 'Mike Ross', role: 'Lead Mover', status: 'On Job', contact: '555-1111', avatarUrl: 'https://placehold.co/100x100.png', assignedJobId: 'JOB-001' },
    { id: 'CREW-02', name: 'Dave Rogers', role: 'Mover', status: 'On Job', contact: '555-2222', avatarUrl: 'https://placehold.co/100x100.png', assignedJobId: 'JOB-001' },
    { id: 'CREW-03', name: 'John Smith', role: 'Driver', status: 'Available', contact: '555-3333', avatarUrl: 'https://placehold.co/100x100.png' },
    { id: 'CREW-04', name: 'Leo Maxwell', role: 'Mover', status: 'On Break', contact: '555-4444', avatarUrl: 'https://placehold.co/100x100.png' },
    { id: 'CREW-05', name: 'Frank Castle', role: 'Lead Mover', status: 'Unavailable', contact: '555-5555', avatarUrl: 'https://placehold.co/100x100.png' },
    { id: 'CREW-06', name: 'Paul Atreides', role: 'Driver', status: 'Available', contact: '555-6666', avatarUrl: 'https://placehold.co/100x100.png' },
];

export type Vehicle = {
    id: string;
    makeModel: string;
    capacity: string;
    status: 'Available' | 'In Use' | 'Maintenance';
    assignedJobId?: string;
    imageUrl: string;
};

export const mockFleet: Vehicle[] = [
    { id: 'TRUCK-01', makeModel: 'Ford Transit', capacity: "15' Box Truck", status: 'In Use', assignedJobId: 'JOB-001', imageUrl: 'https://placehold.co/600x400.png' },
    { id: 'TRUCK-02', makeModel: 'Isuzu NPR', capacity: "26' Box Truck", status: 'In Use', assignedJobId: 'JOB-003', imageUrl: 'https://placehold.co/600x400.png' },
    { id: 'TRUCK-03', makeModel: 'Ram ProMaster', capacity: 'Cargo Van', status: 'Available', imageUrl: 'https://placehold.co/600x400.png' },
    { id: 'TRUCK-04', makeModel: 'Ford F-650', capacity: "26' Box Truck", status: 'Maintenance', imageUrl: 'https://placehold.co/600x400.png' },
];

export type MaintenanceTask = {
    id: string;
    vehicleId: string;
    issue: string;
    dateReported: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Pending' | 'In Progress' | 'Completed';
}

export const mockMaintenance: MaintenanceTask[] = [
    { id: 'MAINT-01', vehicleId: 'TRUCK-04', issue: 'Brake fluid leaking', dateReported: '2024-11-09', priority: 'High', status: 'In Progress' },
    { id: 'MAINT-02', vehicleId: 'TRUCK-01', issue: 'Check engine light on', dateReported: '2024-11-05', priority: 'Medium', status: 'Pending' },
    { id: 'MAINT-03', vehicleId: 'TRUCK-03', issue: 'Routine oil change', dateReported: '2024-11-01', priority: 'Low', status: 'Completed' },
]

export type InventoryItem = {
    id: string;
    name: string;
    room: string;
    quantity: number;
    tags?: ('Fragile' | 'Oversized' | 'Damaged' | 'Missing')[];
    notes?: string;
}

export const mockInventories: Record<string, InventoryItem[]> = {
    "JOB-001": [
        { id: 'i1', name: 'Sofa', room: 'Living Room', quantity: 1, tags: ['Oversized'], notes: 'Leather, brown' },
        { id: 'i2', name: 'Dining Table', room: 'Dining Room', quantity: 1, tags: ['Oversized', 'Fragile'], notes: 'Glass top, handle with care' },
        { id: 'i3', name: 'Box of Plates', room: 'Kitchen', quantity: 2, tags: ['Fragile'], notes: 'Marked "Kitchenware"' },
        { id: 'i4', name: 'Floor Lamp', room: 'Living Room', quantity: 1, tags: ['Damaged'], notes: 'Shade is cracked, pre-existing damage noted.' },
    ],
    "JOB-002": [
        { id: 'i5', name: 'Queen Bed', room: 'Bedroom', quantity: 1, tags: ['Oversized'] },
        { id: 'i6', name: 'Office Desk', room: 'Office', quantity: 1, notes: 'Disassemble if needed' },
    ],
     "JOB-003": [
        { id: 'i7', name: 'Artwork', room: 'Living Room', quantity: 5, tags: ['Fragile'] },
        { id: 'i8', name: 'Gym Equipment', room: 'Garage', quantity: 1, tags: ['Oversized'], notes: 'Treadmill, very heavy.' },
        { id: 'i9', name: 'Toolbox', room: 'Garage', quantity: 1, tags: ['Missing'], notes: 'Customer reported missing after unload.' },
    ]
}

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

export const mockCustomers: Customer[] = [
    { id: 'CUST-001', name: 'John Doe', email: 'john.d@example.com', phone: '555-1234', status: 'Client', jobsCount: 3, totalSpent: 7200, avatarUrl: 'https://placehold.co/100x100.png', tags: ['VIP', 'Repeat'] },
    { id: 'CUST-002', name: 'Jane Smith', email: 'jane.s@example.com', phone: '555-5678', status: 'Client', jobsCount: 1, totalSpent: 1800, avatarUrl: 'https://placehold.co/100x100.png', tags: [] },
    { id: 'CUST-003', name: 'Alice Brown', email: 'alice.b@example.com', phone: '555-8765', status: 'Lead', jobsCount: 0, totalSpent: 0, avatarUrl: 'https://placehold.co/100x100.png', tags: [] },
    { id: 'CUST-004', name: 'Bob Johnson', email: 'bob.j@example.com', phone: '555-4321', status: 'Archived', jobsCount: 1, totalSpent: 2500, avatarUrl: 'https://placehold.co/100x100.png', tags: ['High-Risk'] },
    { id: 'CUST-005', name: 'Sam Wilson', email: 'sam.w@example.com', phone: '555-1122', status: 'Client', jobsCount: 1, totalSpent: 4500, avatarUrl: 'https://placehold.co/100x100.png', tags: ['Repeat'] },
];

export type Review = {
    id: string;
    customerName: string;
    jobId: string;
    rating: 1 | 2 | 3 | 4 | 5;
    reviewText: string;
    date: string;
    responseStatus: 'Responded' | 'Pending';
};

export const mockReviews: Review[] = [
    { id: 'REV-001', customerName: 'John Doe', jobId: 'JOB-001', rating: 5, reviewText: 'The team was fantastic! So professional and careful with all our belongings. Highly recommend!', date: '2024-11-11', responseStatus: 'Responded' },
    { id: 'REV-002', customerName: 'Jane Smith', jobId: 'JOB-002', rating: 4, reviewText: 'Good service overall, but they arrived a bit late. The movers themselves were great.', date: '2024-11-13', responseStatus: 'Pending' },
    { id: 'REV-003', customerName: 'Bob Johnson', jobId: 'JOB-005', rating: 2, reviewText: 'A few of my boxes were damaged. Not happy about that. Filing a claim now.', date: '2024-10-29', responseStatus: 'Pending' },
    { id: 'REV-004', customerName: 'Sam Wilson', jobId: 'JOB-003', rating: 5, reviewText: 'Effortless move. The crew was fast and friendly.', date: '2024-11-12', responseStatus: 'Pending' },
];

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

export const mockCommunications: Communication[] = [
    {
        id: 'COM-001', participantId: 'CUST-001', participantName: 'John Doe', avatarUrl: 'https://placehold.co/100x100.png', type: 'Email', subject: 'Re: Question about your upcoming move', lastMessage: 'That sounds great, thank you!', timestamp: '2 hours ago', isRead: true,
        thread: [
            { sender: 'Admin', message: 'Hi John, just confirming the details for your move on the 10th.', time: '10:30 AM' },
            { sender: 'John Doe', message: 'Hi! Yes, can we add one more wardrobe box?', time: '10:32 AM' },
            { sender: 'Admin', message: 'Absolutely, I\'ve updated the inventory. No extra charge for that.', time: '10:35 AM' },
            { sender: 'John Doe', message: 'That sounds great, thank you!', time: '10:36 AM' },
        ]
    },
    {
        id: 'COM-002', participantId: 'CUST-002', participantName: 'Jane Smith', avatarUrl: 'https://placehold.co/100x100.png', type: 'SMS', subject: 'Your crew is on the way!', lastMessage: 'OK', timestamp: 'Yesterday', isRead: true,
        thread: [
            { sender: 'System', message: 'Your crew is on the way! Track them here: [link]', time: 'Yesterday 8:45 AM' },
            { sender: 'Jane Smith', message: 'OK', time: 'Yesterday 8:46 AM' },
        ]
    },
    {
        id: 'COM-003', participantId: 'CREW-01', participantName: 'Mike Ross (Crew)', avatarUrl: 'https://placehold.co/100x100.png', type: 'Internal Note', subject: 'RE: JOB-001', lastMessage: 'Just confirming job is complete.', timestamp: '3 days ago', isRead: false,
        thread: [
             { sender: 'Mike Ross', message: 'Just confirming job is complete. Customer was happy.', time: '3 days ago 2:15 PM' },
             { sender: 'Admin', message: 'Noted, thank you Mike.', time: '3 days ago 2:20 PM' },
        ]
    },
];

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

export const mockPayments: Payment[] = [
    { id: 'PAY-001', customerName: 'John Doe', jobId: 'JOB-001', amount: 2500, method: 'Visa', date: '2024-11-10', status: 'Paid' },
    { id: 'PAY-002', customerName: 'Jane Smith', jobId: 'JOB-002', amount: 1800, method: 'Mastercard', date: '2024-11-12', status: 'Paid' },
    { id: 'PAY-003', customerName: 'Chris Lee', jobId: 'JOB-003', amount: 1600, method: 'ACH', date: '2024-11-11', status: 'Pending' },
    { id: 'PAY-004', customerName: 'Sarah Adams', jobId: 'JOB-004', amount: 2100, method: 'Visa', date: '2024-11-14', status: 'Failed' },
    { id: 'PAY-005', customerName: 'Satoshi Nakamoto', jobId: 'JOB-005', amount: 5000, method: 'Crypto', date: '2024-11-15', status: 'Paid' },
];

export type Invoice = {
    id: string;
    customerName: string;
    jobId: string;
    dateIssued: string;
    total: number;
    status: 'Paid' | 'Sent' | 'Overdue' | 'Draft';
};

export const mockInvoices: Invoice[] = [
    { id: 'INV-001', customerName: 'John Doe', jobId: 'JOB-001', dateIssued: '2024-11-10', total: 2500, status: 'Paid' },
    { id: 'INV-002', customerName: 'Jane Smith', jobId: 'JOB-002', dateIssued: '2024-11-12', total: 1800, status: 'Paid' },
    { id: 'INV-003', customerName: 'Chris Lee', jobId: 'JOB-003', dateIssued: '2024-11-01', total: 3200, status: 'Overdue' },
    { id: 'INV-004', customerName: 'Sarah Adams', jobId: 'JOB-004', dateIssued: '2024-11-15', total: 2100, status: 'Sent' },
    { id: 'INV-005', customerName: 'New Client', jobId: '', dateIssued: '2024-11-16', total: 1500, status: 'Draft' },
];

export type Promo = {
    id: string;
    code: string;
    type: 'Percentage' | 'Fixed Amount';
    value: number;
    useCount: number;
    status: 'Active' | 'Expired' | 'Scheduled';
    expiryDate: string;
};

export const mockPromos: Promo[] = [
    { id: 'PROMO-01', code: 'FALL2024', type: 'Percentage', value: 10, useCount: 23, status: 'Active', expiryDate: '2024-12-31' },
    { id: 'PROMO-02', code: 'WELCOME50', type: 'Fixed Amount', value: 50, useCount: 152, status: 'Active', expiryDate: 'N/A' },
    { id: 'PROMO-03', code: 'SUMMER23', type: 'Percentage', value: 15, useCount: 78, status: 'Expired', expiryDate: '2023-08-31' },
];

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

export const mockRefunds: Refund[] = [
    { id: 'REF-001', customerName: 'Bob Johnson', jobId: 'JOB-005', type: 'Refund', amount: 150, reason: 'Damaged item claim approved', date: '2024-11-05', status: 'Issued' },
    { id: 'REF-002', customerName: 'Sarah Adams', jobId: 'JOB-004', type: 'Credit', amount: 100, reason: 'Service delay goodwill gesture', date: '2024-11-15', status: 'In Review' },
];

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

export const mockDocuments: Document[] = [
    { id: 'DOC-001', name: 'Moving Agreement - Sam Wilson', type: 'Contract', status: 'Signed', linkedTo: 'JOB-001', createdBy: 'Admin', date: '2024-11-08' },
    { id: 'DOC-002', name: 'Bill of Lading - Emily Clark', type: 'Bill of Lading', status: 'Pending Signature', linkedTo: 'JOB-002', createdBy: 'Admin', date: '2024-11-12' },
    { id: 'DOC-003', name: 'Inventory Sheet - Chris Lee', type: 'Inventory Sheet', status: 'Signed', linkedTo: 'JOB-003', createdBy: 'Chris Lee', date: '2024-11-10' },
    { id: 'DOC-004', name: 'Crew Agreement - Mike Ross', type: 'Crew Agreement', status: 'Signed', linkedTo: 'CREW-01', createdBy: 'HR', date: '2023-01-15' },
    { id: 'DOC-005', name: 'Damage Claim - Bob Johnson', type: 'Claim Form', status: 'Draft', linkedTo: 'JOB-005', createdBy: 'Admin', date: '2024-11-05' },
];

export type DocumentTemplate = {
    id: string;
    name: string;
    category: 'Client Facing' | 'Crew Management' | 'Internal';
    lastUpdated: string;
};

export const mockDocumentTemplates: DocumentTemplate[] = [
    { id: 'TPL-01', name: 'Standard Moving Service Agreement', category: 'Client Facing', lastUpdated: '2024-10-01' },
    { id: 'TPL-02', name: 'Bill of Lading', category: 'Client Facing', lastUpdated: '2024-09-15' },
    { id: 'TPL-03', name: 'Employee Handbook', category: 'Crew Management', lastUpdated: '2024-08-20' },
    { id: 'TPL-04', name: 'Damage Claim Form', category: 'Internal', lastUpdated: '2024-05-30' },
];

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

export const mockAdminClaims: AdminClaim[] = [
    { id: 'CLM-001', jobId: 'JOB-003', customerName: 'Chris Lee', type: 'Damage', status: 'Under Review', date: '2024-11-12', amount: 250 },
    { id: 'CLM-002', jobId: 'JOB-001', customerName: 'Sam Wilson', type: 'Lost Item', status: 'Approved', date: '2024-11-11', amount: 100 },
    { id: 'CLM-003', jobId: 'JOB-005', customerName: 'Kevin Harris', type: 'Overcharge', status: 'Rejected', date: '2024-10-29', amount: 50 },
];

export type SupportTicket = {
    id: string;
    subject: string;
    customerName: string;
    status: 'Open' | 'Pending' | 'Resolved';
    priority: 'High' | 'Medium' | 'Low';
    date: string;
    assignedTo: string;
}

export const mockSupportTickets: SupportTicket[] = [
    { id: 'TKT-001', subject: 'Question about invoice INV-003', customerName: 'Chris Lee', status: 'Open', priority: 'High', date: '2024-11-13', assignedTo: 'Admin' },
    { id: 'TKT-002', subject: 'Reschedule request for JOB-004', customerName: 'Sarah Adams', status: 'Pending', priority: 'Medium', date: '2024-11-12', assignedTo: 'Admin' },
    { id: 'TKT-003', subject: 'Compliment for Crew B', customerName: 'John Doe', status: 'Resolved', priority: 'Low', date: '2024-11-11', assignedTo: 'Admin' },
];

export type Notification = {
    id: string;
    icon: LucideIcon;
    text: string;
    timestamp: string;
    isRead: boolean;
    link: string;
    category: 'Jobs' | 'Payments' | 'Users' | 'Claims';
}

export const mockNotifications: Notification[] = [
    { id: 'N-1', icon: FileText, text: 'Document "Moving Agreement" was signed by John Doe.', timestamp: '5m ago', isRead: false, link: '/admin/documents', category: 'Users' },
    { id: 'N-2', icon: DollarSign, text: 'Payment for INV-002 has failed.', timestamp: '1h ago', isRead: false, link: '/admin/billing', category: 'Payments' },
    { id: 'N-3', icon: UserPlus, text: 'A new user "test@example.com" just signed up.', timestamp: '3h ago', isRead: true, link: '/admin/customers', category: 'Users' },
    { id: 'N-4', icon: ShieldAlert, text: 'New claim CLM-001 has been opened for JOB-003.', timestamp: '1d ago', isRead: true, link: '/admin/claims', category: 'Claims' },
    { id: 'N-5', icon: CheckCircle, text: 'Job #2043 marked complete by Crew B', timestamp: '2d ago', isRead: true, link: '/admin/jobs', category: 'Jobs' },
];

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

export const mockAdminUsers: AdminUser[] = [
    { id: 'AU-1', name: 'Harvey Specter', email: 'harvey@moveportal.com', role: 'Owner', status: 'Active', lastLogin: '2 hours ago', avatarUrl: 'https://placehold.co/100x100.png' },
    { id: 'AU-2', name: 'Donna Paulsen', email: 'donna@moveportal.com', role: 'Admin', status: 'Active', lastLogin: '5 minutes ago', avatarUrl: 'https://placehold.co/100x100.png' },
    { id: 'AU-3', name: 'Louis Litt', email: 'louis@moveportal.com', role: 'Dispatcher', status: 'Active', lastLogin: '1 day ago', avatarUrl: 'https://placehold.co/100x100.png' },
    { id: 'AU-4', name: 'Rachel Zane', email: 'rachel@newinvite.com', role: 'Support', status: 'Invited', lastLogin: 'N/A', avatarUrl: 'https://placehold.co/100x100.png' },
    { id: 'AU-5', name: 'Jessica Pearson', email: 'jessica@moveportal.com', role: 'Admin', status: 'Deactivated', lastLogin: '2 weeks ago', avatarUrl: 'https://placehold.co/100x100.png' },
];

export type ApiKey = {
    id: string;
    name: string;
    token: string;
    status: 'Active' | 'Revoked';
    createdDate: string;
    lastUsed: string;
}

export const mockApiKeys: ApiKey[] = [
    { id: 'API-1', name: 'Internal Reporting Tool', token: 'mp_live_******************aBc1', status: 'Active', createdDate: '2024-01-15', lastUsed: '5 minutes ago' },
    { id: 'API-2', name: 'Old Mobile App Key', token: 'mp_live_******************dEf2', status: 'Revoked', createdDate: '2023-05-20', lastUsed: '3 months ago' },
    { id: 'API-3', name: 'Zapier Integration Key', token: 'mp_live_******************gHi3', status: 'Active', createdDate: '2024-08-01', lastUsed: '1 day ago' },
]

export type Webhook = {
    id: string;
    url: string;
    status: 'Active' | 'Disabled';
    events: string[];
}

export const mockWebhooks: Webhook[] = [
    { id: 'WH-1', url: 'https://api.thirdparty.com/webhook/job-completed', status: 'Active', events: ['job.completed', 'job.cancelled'] },
    { id: 'WH-2', url: 'https://api.crm.com/webhook/new-lead', status: 'Active', events: ['lead.created'] },
    { id: 'WH-3', url: 'https://api.slack.com/webhook/old-alerts', status: 'Disabled', events: ['payment.failed'] },
]
