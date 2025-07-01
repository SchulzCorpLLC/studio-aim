'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Calendar, Wallet, ArrowRight, Truck, MessageCircle, Phone, Package, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Component for the map tracker
const GpsMapTracker = () => (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-primary" />
                <span>Live Truck Tracking</span>
            </CardTitle>
            <CardDescription>Your crew is on the way!</CardDescription>
        </CardHeader>
        <CardContent>
            {/* Map Placeholder */}
            <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg border bg-muted">
                <Image
                    src="https://placehold.co/1200x400.png"
                    alt="Map showing truck location"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                    data-ai-hint="dark map"
                />
            </div>

            {/* Tracking Details */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex items-center gap-4">
                     <Avatar className="h-12 w-12 border-2 border-primary">
                        <AvatarImage src="https://placehold.co/100x100.png" alt="Driver" data-ai-hint="person portrait" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">Your Driver</p>
                        <p className="text-sm text-muted-foreground">Vehicle ID</p>
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">Status</p>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Scheduled</Badge>
                </div>
                 <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">ETA</p>
                    <p className="text-2xl font-bold">--:--</p>
                </div>
            </div>
             <Separator className="my-6" />
             <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="flex-1"><MessageCircle className="mr-2 h-4 w-4" /> Live Chat With Crew</Button>
                <Button variant="outline" className="flex-1"><Phone className="mr-2 h-4 w-4" /> Notify Me on Arrival</Button>
             </div>
        </CardContent>
    </Card>
);

// Component for Inventory Summary
const InventorySummary = () => (
    <Card>
        <CardHeader>
            <CardTitle>Inventory Summary</CardTitle>
            <CardDescription>A list of items included in your move.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-lg">
                <Package className="mx-auto h-12 w-12" />
                <h3 className="text-xl font-semibold mt-4">No Inventory Logged</h3>
                <p>Add items in the Inventory section to see them here.</p>
            </div>
        </CardContent>
    </Card>
);


export default function MoveDetailsPage() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Your Move Details</h1>
                <p className="text-muted-foreground">Live status and information for your move.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-8">
                    {/* Main GPS Tracker */}
                    <GpsMapTracker />

                    {/* Move Summary Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3"><Calendar className="h-6 w-6 text-primary" /> Move Logistics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
                                <Info className="mx-auto h-12 w-12" />
                                <h3 className="text-xl font-semibold mt-4">Move Details Not Yet Confirmed</h3>
                                <p>Your move logistics will appear here once scheduled.</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Inventory List */}
                    <InventorySummary />
                </div>
                <div className="lg:col-span-1 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                             <Link href="/documents" passHref>
                                <Button variant="outline" className="w-full justify-between">Sign Documents <ArrowRight /></Button>
                            </Link>
                             <Link href="/payments" passHref>
                                <Button variant="outline" className="w-full justify-between">Make a Payment <ArrowRight /></Button>
                             </Link>
                             <Link href="/inventory" passHref>
                                <Button variant="outline" className="w-full justify-between">Inventory Manager <ArrowRight /></Button>
                             </Link>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3"><Wallet className="h-5 w-5 text-primary" /> Payment Status</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-baseline">
                                <span className="text-muted-foreground">Quote Total</span>
                                <span className="font-bold text-lg">$0.00</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-muted-foreground">Balance Due</span>
                                <span className="font-bold text-lg text-primary">$0.00</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
