'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search, Filter } from 'lucide-react';
import { InventoryItem } from '@/components/inventory/inventory-item';
import { InventoryCategory as AddItemModal } from '@/components/inventory/inventory-category';
import { InventoryEstimatesBar } from '@/components/inventory/inventory-estimates-bar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { InventoryItem as InventoryItemType, Room } from '@/components/inventory/inventory-data';
import { roomOptions } from '@/components/inventory/inventory-data';

export default function InventoryPage() {
  const [items, setItems] = useState<InventoryItemType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState<InventoryItemType | null>(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [roomFilter, setRoomFilter] = useState<Room | 'all'>('all');

  const handleAddItem = (newItem: InventoryItemType) => {
    setItems(prev => [...prev, newItem]);
  };

  const handleUpdateItem = (updatedItem: InventoryItemType) => {
    setItems(prev => prev.map(item => item.id === updatedItem.id ? updatedItem : item));
    // also close modal if it was an edit
    if (itemToEdit && itemToEdit.id === updatedItem.id) {
        setIsModalOpen(false);
        setItemToEdit(null);
    }
  };
  
  const handleSubmitItem = (submittedItem: InventoryItemType) => {
      if (items.some(i => i.id === submittedItem.id)) {
          handleUpdateItem(submittedItem);
      } else {
          handleAddItem(submittedItem);
      }
  };

  const handleDeleteItem = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleOpenEditModal = (item: InventoryItemType) => {
    setItemToEdit(item);
    setIsModalOpen(true);
  };
  
  const handleOpenAddModal = () => {
    setItemToEdit(null);
    setIsModalOpen(true);
  }

  const filteredItems = useMemo(() => {
    return items
      .filter(item => roomFilter === 'all' || item.room === roomFilter)
      .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [items, roomFilter, searchTerm]);

  const { totalItems, totalCubicFeet, estimatedWeight, recommendedTruck, suggestedCrew } = useMemo(() => {
    const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalCubicFeetCalc = items.reduce((acc, item) => acc + (item.cubicFeet * item.quantity), 0);
    
    // Mock logic for new estimates
    const estimatedWeightCalc = totalCubicFeetCalc * 7;
    
    let recTruck: string;
    if (totalCubicFeetCalc === 0) recTruck = "N/A";
    else if (totalCubicFeetCalc < 250) recTruck = 'Cargo Van';
    else if (totalCubicFeetCalc < 500) recTruck = "15' Truck";
    else if (totalCubicFeetCalc < 1000) recTruck = "20' Truck";
    else recTruck = "26' Truck";

    let crewSize: string;
    if (totalCubicFeetCalc === 0) crewSize = "N/A";
    else if (totalCubicFeetCalc < 500) crewSize = '2 Movers';
    else if (totalCubicFeetCalc < 1500) crewSize = '3 Movers';
    else crewSize = '4+ Movers';

    return { 
        totalItems: totalItemsCount, 
        totalCubicFeet: totalCubicFeetCalc, 
        estimatedWeight: estimatedWeightCalc,
        recommendedTruck: recTruck,
        suggestedCrew: crewSize
    };
  }, [items]);

  return (
    <>
      <div className="w-full space-y-8 pb-24">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Inventory Manager</h1>
          <p className="text-muted-foreground">Log, view, and organize all the items for your move.</p>
        </div>

        {/* Summary Card */}
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Your Inventory Overview</CardTitle>
                <CardDescription>A summary of the items you&apos;ve logged so far.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground">Total Items</p>
                        <p className="text-3xl font-bold">{totalItems}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground">Large Items</p>
                        <p className="text-3xl font-bold">{items.filter(i => i.isLarge).reduce((acc, item) => acc + item.quantity, 0)}</p>
                    </div>
                     <div className="p-4 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground">Total Rooms</p>
                        <p className="text-3xl font-bold">{[...new Set(items.map(i => i.room))].length}</p>
                    </div>
                     <div className="p-4 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground">Est. Volume</p>
                        <p className="text-3xl font-bold">{totalCubicFeet.toFixed(0)} ft³</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search inventory..." className="pl-10 h-12 text-base" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-4">
                <Select value={roomFilter} onValueChange={(v) => setRoomFilter(v as Room | 'all')}>
                    <SelectTrigger className="w-full md:w-[200px] h-12 text-base">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Filter by room" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Rooms</SelectItem>
                        {roomOptions.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                    </SelectContent>
                </Select>
                <Button onClick={handleOpenAddModal} className="w-full md:w-auto h-12 text-base">
                  <Plus className="mr-2 h-5 w-5" /> Add Item
                </Button>
            </div>
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
                <InventoryItem 
                    key={item.id} 
                    item={item} 
                    onUpdate={handleUpdateItem}
                    onDelete={handleDeleteItem}
                    onEdit={handleOpenEditModal}
                />
            ))}
        </div>
        
        {items.length > 0 && filteredItems.length === 0 && (
            <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-lg">
                <h3 className="text-xl font-semibold">No items found</h3>
                <p>Try adjusting your search or filter.</p>
            </div>
        )}

        {items.length === 0 && (
            <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-lg">
                <h3 className="text-xl font-semibold">Your Inventory is Empty</h3>
                <p>Click &quot;Add Item&quot; to start building your inventory list.</p>
            </div>
        )}

      </div>

      <InventoryEstimatesBar 
        itemCount={totalItems}
        totalCubicFeet={totalCubicFeet}
        estimatedWeight={estimatedWeight}
        recommendedTruck={recommendedTruck}
        suggestedCrew={suggestedCrew}
      />
      
      <AddItemModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitItem}
        itemToEdit={itemToEdit}
      />
    </>
  );
}
