'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Minus, Plus, MoreVertical, Pencil, Trash2, StickyNote } from 'lucide-react';
import type { InventoryItem as InventoryItemType } from './inventory-data';
import { roomIcons } from './inventory-data';

interface InventoryItemProps {
  item: InventoryItemType;
  onUpdate: (item: InventoryItemType) => void;
  onDelete: (itemId: string) => void;
  onEdit: (item: InventoryItemType) => void;
}

export function InventoryItem({ item, onUpdate, onDelete, onEdit }: InventoryItemProps) {
  const handleQuantityChange = (amount: number) => {
    const newQuantity = Math.max(1, item.quantity + amount);
    onUpdate({ ...item, quantity: newQuantity });
  };
  
  const RoomIcon = roomIcons[item.room];

  return (
    <Card className="w-full overflow-hidden flex flex-col">
      {item.photo && (
        <div className="relative aspect-video w-full bg-muted">
          <Image src={item.photo} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.name.toLowerCase().split(' ').slice(0,2).join(' ')} />
        </div>
      )}
      <CardContent className="p-4 space-y-4 flex-grow flex flex-col justify-between">
        <div>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <RoomIcon className="h-4 w-4" />
                        <span>{item.room}</span>
                    </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="flex-shrink-0 -mr-2 -mt-2">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onEdit(item)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      <span>Edit Details</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive" onClick={() => onDelete(item.id)}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
            {item.notes && (
                <p className="text-sm text-muted-foreground p-3 bg-muted/50 rounded-md flex gap-2 mt-3"><StickyNote className="h-4 w-4 mt-0.5 flex-shrink-0" /> "{item.notes}"</p>
            )}
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(-1)}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-bold text-lg w-10 text-center">{item.quantity}</span>
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          {item.isLarge && <Badge variant="outline">Large Item</Badge>}
        </div>
      </CardContent>
    </Card>
  );
}
