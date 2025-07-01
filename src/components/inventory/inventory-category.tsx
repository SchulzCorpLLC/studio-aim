'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Upload } from 'lucide-react';
import type { InventoryItem, Room, Category } from './inventory-data';
import { roomOptions, categoryOptions, quickAddItems } from './inventory-data';

interface InventoryCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (item: InventoryItem) => void;
  itemToEdit?: InventoryItem | null;
}

const defaultItemState: Omit<InventoryItem, 'id'> = {
  name: '',
  room: roomOptions[0],
  category: categoryOptions[0],
  quantity: 1,
  notes: '',
  isLarge: false,
  photo: undefined,
  cubicFeet: 5
};

export function InventoryCategory({ isOpen, onClose, onSubmit, itemToEdit }: InventoryCategoryProps) {
  const [item, setItem] = useState<Omit<InventoryItem, 'id'>>(defaultItemState);

  useEffect(() => {
    if (isOpen) {
        if (itemToEdit) {
            setItem(itemToEdit);
        } else {
            setItem(defaultItemState);
        }
    }
  }, [itemToEdit, isOpen]);

  const handleQuickAdd = (quickItem: { name: string; category: Category; cubicFeet: number; isLarge: boolean; }) => {
    const newItem: InventoryItem = {
      id: `new-${Date.now()}`,
      ...defaultItemState,
      ...quickItem,
    };
    onSubmit(newItem);
    onClose();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!item.name) return;
    onSubmit({
      id: itemToEdit?.id || `new-${Date.now()}`,
      ...item,
    });
    onClose();
  };

  const handleChange = (field: keyof typeof item, value: string | number | boolean | undefined) => {
    setItem(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{itemToEdit ? 'Edit Item' : 'Add New Item'}</DialogTitle>
          <DialogDescription>
            {itemToEdit ? 'Update the details for your item.' : 'Log an item for your move. Add as much detail as you can.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6 py-4">
            
            {!itemToEdit && (
              <div>
                <Label className="text-sm font-medium">Quick Add Common Items</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {quickAddItems.map(qi => (
                      <Button type="button" variant="secondary" key={qi.name} onClick={() => handleQuickAdd(qi)}>
                          <PlusCircle className="mr-2 h-4 w-4" /> {qi.name}
                      </Button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="item-name">Item Name</Label>
              <Input
                id="item-name"
                placeholder="e.g., Floor Lamp, Box of Books"
                value={item.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="item-room">Room</Label>
                <Select value={item.room} onValueChange={(v) => handleChange('room', v as Room)}>
                  <SelectTrigger id="item-room"><SelectValue /></SelectTrigger>
                  <SelectContent>{roomOptions.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="item-quantity">Quantity</Label>
                <Input
                  id="item-quantity"
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleChange('quantity', parseInt(e.target.value, 10) || 1)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="item-notes">Notes / Condition</Label>
              <Textarea
                id="item-notes"
                placeholder="e.g., Small scratch on left leg, fragile"
                value={item.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo-upload">Upload Photo</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="photo-upload-modal"
                  className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                >
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                  </div>
                  <Input id="photo-upload-modal" type="file" className="hidden" />
                </label>
              </div>
            </div>

          </div>
          <DialogFooter className="pt-6">
            <Button variant="outline" type="button" onClick={onClose}>Cancel</Button>
            <Button type="submit">{itemToEdit ? 'Save Changes' : 'Add Item'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
