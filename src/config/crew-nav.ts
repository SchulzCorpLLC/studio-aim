import type { NavItem } from './nav';
import { Truck, MapPin, Camera, PenSquare, User } from 'lucide-react';

export const crewNavItems: NavItem[] = [
  { href: '/crew', label: 'My Job', icon: Truck },
  { href: '/crew/directions', label: 'Directions', icon: MapPin },
  { href: '/crew/photos', label: 'Photos', icon: Camera },
  { href: '/crew/sign-off', label: 'Sign-Off', icon: PenSquare },
  { href: '/crew/profile', label: 'Profile', icon: User },
];
