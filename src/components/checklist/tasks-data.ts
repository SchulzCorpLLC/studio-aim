import type { LucideIcon } from 'lucide-react';
import { Package, Wrench, Bus, User, Trash2 } from 'lucide-react';

export type TaskCategory = 'Packing' | 'Utilities' | 'Logistics' | 'Personal' | 'Cleaning';

export const categoryIcons: Record<TaskCategory, LucideIcon> = {
    Packing: Package,
    Utilities: Wrench,
    Logistics: Bus,
    Personal: User,
    Cleaning: Trash2,
};

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: string;
  category: TaskCategory;
};

export type TaskStage = 'Before' | 'During' | 'After';

export const initialTasks: Record<TaskStage, Task[]> = {
    Before: [
        { id: 'b1', title: 'Declutter and Donate', description: 'Go through belongings and donate or discard items you no longer need.', completed: false, category: 'Packing', dueDate: '4 weeks before' },
        { id: 'b2', title: 'Research Moving Companies', description: 'Get quotes and book your preferred mover.', completed: false, category: 'Logistics', dueDate: '3 weeks before' },
        { id: 'b3', title: 'Order Packing Supplies', description: 'Boxes, tape, bubble wrap, and markers.', completed: false, category: 'Packing', dueDate: '3 weeks before' },
        { id: 'b4', title: 'Notify Utilities', description: 'Schedule service disconnection at your old home and connection at your new one.', completed: false, category: 'Utilities', dueDate: '2 weeks before' },
        { id: 'b5', title: 'Change Address', description: 'Update your address with USPS, banks, and subscriptions.', completed: false, category: 'Personal', dueDate: '1 week before' },
        { id: 'b6', title: 'Pack a "First Night" Box', description: 'Essentials like toiletries, medications, chargers, and a change of clothes.', completed: false, category: 'Packing', dueDate: '2 days before' },
        { id: 'b7', title: 'Defrost Fridge/Freezer', description: 'Ensure it\'s clean and dry for moving.', completed: false, category: 'Cleaning', dueDate: '1 day before' },
    ],
    During: [
        { id: 'd1', title: 'Protect Floors and Carpets', description: 'Lay down protective coverings to prevent damage.', completed: false, category: 'Cleaning' },
        { id: 'd2', title: 'Supervise Movers', description: 'Be available to answer questions and direct placement of items.', completed: false, category: 'Logistics' },
        { id: 'd3', title: 'Final Walkthrough', description: 'Check all rooms, closets, and cabinets before leaving the old home.', completed: false, category: 'Logistics' },
        { id: 'd4', title: 'Sign Bill of Lading', description: 'Confirm all items are loaded and details are correct before the truck departs.', completed: false, category: 'Personal' },
    ],
    After: [
        { id: 'a1', title: 'Unpack Essentials First', description: 'Start with the "First Night" box, kitchen, and bathroom.', completed: false, category: 'Packing' },
        { id: 'a2', title: 'Inspect for Damages', description: 'Check your furniture and belongings for any damage that occurred during the move.', completed: false, 'category': 'Personal' },
        { id: 'a3', title: 'Set Up Utilities', description: 'Confirm that internet, electricity, gas, and water are all working.', completed: false, category: 'Utilities' },
        { id: 'a4', title: 'Update Driver\'s License', description: 'Visit the DMV to update your address on your license and vehicle registration.', completed: false, category: 'Personal' },
        { id: 'a5', title: 'Break Down Boxes', description: 'Flatten and recycle all used moving boxes.', completed: false, category: 'Cleaning' },
    ]
};
