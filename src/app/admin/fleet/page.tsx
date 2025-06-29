'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, Search, Truck, Wrench } from 'lucide-react';
import { mockFleet, mockMaintenance } from '@/components/admin/operations/mock-data';
import { VehicleCard } from '@/components/admin/operations/fleet/vehicle-card';
import { MaintenanceTracker } from '@/components/admin/operations/fleet/maintenance-tracker';

export default function AdminFleetPage() {
    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Fleet & Equipment</h1>
                    <p className="text-muted-foreground">Track trucks, vans, and key equipment status.</p>
                </div>
                <Button size="lg" className="shrink-0">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Add Vehicle
                </Button>
            </header>

            <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search vehicles..." className="pl-10 h-12 text-base" />
            </div>

            <Tabs defaultValue="vehicles">
                <TabsList className="grid w-full grid-cols-2 md:w-auto">
                    <TabsTrigger value="vehicles"><Truck className="mr-2" />Vehicles</TabsTrigger>
                    <TabsTrigger value="maintenance"><Wrench className="mr-2"/>Maintenance</TabsTrigger>
                </TabsList>
                <TabsContent value="vehicles" className="mt-6">
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {mockFleet.map((vehicle) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="maintenance" className="mt-6">
                   <MaintenanceTracker tasks={mockMaintenance} />
                </TabsContent>
            </Tabs>

        </div>
    );
}
