
import type { NavItem } from './nav';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  CreditCard,
  FileText,
  MessageSquare,
  BarChart2,
  Settings,
  Plug,
  KeyRound,
} from 'lucide-react';

export const adminNavItems: NavItem[] = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  {
    label: 'Operations',
    icon: Briefcase,
    subItems: [
      { href: '/admin/leads', label: 'Leads & Bookings' },
      { href: '/admin/jobs', label: 'Jobs & Scheduling' },
      { href: '/admin/crew', label: 'Crew & Drivers' },
      { href: '/admin/fleet', label: 'Fleet & Equipment' },
      { href: '/admin/inventory', label: 'Inventory' },
    ],
  },
  {
    label: 'Customers',
    icon: Users,
    subItems: [
      { href: '/admin/customers', label: 'Customer Profiles' },
      { href: '/admin/reviews', label: 'Reviews & Feedback' },
    ],
  },
  {
    label: 'Finance',
    icon: CreditCard,
    subItems: [
      { href: '/admin/billing', label: 'Billing & Payments' },
      { href: '/admin/invoices', label: 'Invoices' },
      { href: '/admin/promos', label: 'Discounts & Promos' },
      { href: '/admin/refunds', label: 'Refunds & Adjustments' },
    ],
  },
  {
    label: 'Documents',
    icon: FileText,
    subItems: [
      { href: '/admin/documents', label: 'Dashboard' },
      { href: '/admin/documents/templates', label: 'Templates' },
    ],
  },
  {
    label: 'Messaging & Support',
    icon: MessageSquare,
    subItems: [
      { href: '/admin/messages', label: 'In-App Messages' },
      { href: '/admin/notifications', label: 'Notifications' },
      { href: '/admin/support', label: 'Support Tickets' },
      { href: '/admin/claims', label: 'Claims & Disputes' },
    ],
  },
  {
    href: '/admin/analytics',
    label: 'Analytics',
    icon: BarChart2,
  },
  {
    label: 'Settings',
    icon: Settings,
    subItems: [
      { href: '/admin/settings', label: 'Company Profile' },
      { href: '/admin/users', label: 'Users & Roles' },
      { href: '/admin/settings/integrations', label: 'Integrations' },
      { href: '/admin/settings/api', label: 'API & Webhooks' },
    ],
  },
];
