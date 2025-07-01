import type { LucideIcon } from 'lucide-react';
import { Bed, Armchair, Box, UtensilsCrossed, Monitor, HelpCircle } from 'lucide-react';

export const roomOptions = ["Living Room", "Dining Room", "Kitchen", "Bedroom", "Office", "Garage", "Other"] as const;
export type Room = typeof roomOptions[number];

export const categoryOptions = ["Furniture", "Electronics", "Boxes", "Appliances", "Decor", "Misc"] as const;
export type Category = typeof categoryOptions[number];

export type InventoryItem = {
  id: string;
  name: string;
  room: Room;
  category: Category;
  quantity: number;
  photo?: string;
  notes?: string;
  isLarge?: boolean;
  cubicFeet: number; 
};

export const roomIcons: Record<Room, LucideIcon> = {
    "Living Room": Armchair,
    "Dining Room": UtensilsCrossed,
    "Kitchen": UtensilsCrossed,
    "Bedroom": Bed,
    "Office": Monitor,
    "Garage": Box,
    "Other": HelpCircle
};

export const initialInventoryItems: InventoryItem[] = [
  { id: '1', name: 'Sofa', room: 'Living Room', category: 'Furniture', quantity: 1, isLarge: true, cubicFeet: 50, photo: 'https://placehold.co/600x400.png', notes: 'Cream colored, 3-seater' },
  { id: '2', name: '65" OLED TV', room: 'Living Room', category: 'Electronics', quantity: 1, isLarge: true, cubicFeet: 15, photo: 'https://placehold.co/600x400.png' },
  { id: '3', name: 'King Bed Frame', room: 'Bedroom', category: 'Furniture', quantity: 1, isLarge: true, cubicFeet: 60 },
  { id: '4', name: 'King Mattress', room: 'Bedroom', category: 'Furniture', quantity: 1, isLarge: true, cubicFeet: 40 },
  { id: '5', name: 'Medium Box', room: 'Bedroom', category: 'Boxes', quantity: 5, cubicFeet: 3 },
  { id: '6', name: 'Dining Table', room: 'Dining Room', category: 'Furniture', quantity: 1, isLarge: true, cubicFeet: 45 },
  { id: '7', name: 'Dining Chairs', room: 'Dining Room', category: 'Furniture', quantity: 4, cubicFeet: 5 },
  { id: '8', name: 'Microwave', room: 'Kitchen', category: 'Appliances', quantity: 1, cubicFeet: 2 },
  { id: '9', name: 'Floor Lamp', room: 'Living Room', category: 'Decor', quantity: 1, cubicFeet: 4, photo: 'https://placehold.co/600x400.png' },
  { id: '10', name: 'Office Desk', room: 'Office', category: 'Furniture', quantity: 1, isLarge: true, cubicFeet: 30 },
  { id: '11', name: 'Office Chair', room: 'Office', category: 'Furniture', quantity: 1, cubicFeet: 10 },
  { id: '12', name: 'Bookshelf', room: 'Office', category: 'Furniture', quantity: 1, cubicFeet: 25 },
];

export const quickAddItems = [
    { name: 'Sofa', category: 'Furniture' as Category, cubicFeet: 50, isLarge: true },
    { name: 'Queen Bed', category: 'Furniture' as Category, cubicFeet: 50, isLarge: true },
    { name: 'TV', category: 'Electronics' as Category, cubicFeet: 10, isLarge: true },
    { name: 'Large Box', category: 'Boxes' as Category, cubicFeet: 4.5, isLarge: false },
    { name: 'Medium Box', category: 'Boxes' as Category, cubicFeet: 3, isLarge: false },
    { name: 'Small Box', category: 'Boxes' as Category, cubicFeet: 1.5, isLarge: false },
    { name: 'Dining Table', category: 'Furniture' as Category, cubicFeet: 45, isLarge: true },
    { name: 'Chair', category: 'Furniture' as Category, cubicFeet: 5, isLarge: false },
];
