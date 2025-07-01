import type { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  Truck,
  FileText,
  MessageSquare,
  Settings,
} from 'lucide-react';

export type NavSubItem = {
    href: string;
    label: string;
    badge?: number;
}

export type NavItem = {
    href?: string; // Optional for groups
    label: string;
    icon: LucideIcon;
    badge?: number;
    subItems?: NavSubItem[]; // Optional sub-items for accordions
}

export const navItems: NavItem[] = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'My Move',
    icon: Truck,
    subItems: [
      { href: '/move-details', label: 'Move Details' },
      { href: '/inventory', label: 'Inventory' },
      { href: '/checklist', label: 'Checklist' },
    ],
  },
  {
    label: 'Paperwork',
    icon: FileText,
    subItems: [
      { href: '/documents', label: 'Documents' },
      { href: '/payments', label: 'Payments' },
      { href: '/claims', label: 'Claims' },
    ],
  },
  {
    label: 'Connect',
    icon: MessageSquare,
    subItems: [
      { href: '/messaging', label: 'Messages' },
      { href: '/referrals', label: 'Referrals' },
    ],
  },
  {
    href: '/account-settings',
    label: 'Settings',
    icon: Settings,
  },
];
