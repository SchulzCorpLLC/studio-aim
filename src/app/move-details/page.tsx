'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Home, MapPin, Clock, Calendar, CheckSquare, Wallet, ArrowRight, Truck, MessageCircle, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock data, as per instructions
const moveDetails = {
    moveId: "SF-OAK-102624",
    pickupAddress: "123 Main St, San Francisco, CA 94105",
    deliveryAddress: "456 Market St, Oakland, CA 94607",
    moveDate: "October 26, 2024",
    scheduledTime: "9:00 AM - 11:00 AM",
    serviceType: "Full-Service Packing",
    contactNumber: "(555) 123-4567",
    status: "In Progress" as "Scheduled" | "In Progress" | "Completed",
    eta: "25 min",
    driver: {
        name: "John Smith",
        avatarUrl: "https://placehold.co/100x100.png",
    },
    vehicle: {
        id: "TRUCK-07",
    },
    inventory: [
        { category: "Living Room", items: ["Sofa", "Coffee Table", "TV Stand", "Bookshelf"] },
        { category: "Kitchen", items: ["Boxes (x5)", "Dining Table", "Chairs (x4)"] },
        { category: "Bedroom", items: ["Queen Bed Frame", "Mattress", "Dresser", "Nightstand (x2)"] },
        { category: "Office", items: ["Desk", "Office Chair", "Boxes (x2)"] },
    ],
    quoteTotal: 1250.00,
    balanceDue: 750.00,
};


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
                {/* Route Line SVG Placeholder */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M 15 70 Q 50 80 85 30"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="4 4"
                    />
                </svg>
                {/* Pins and Truck */}
                <div className="absolute top-[65%] left-[15%] -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="h-8 w-8 text-green-400 fill-green-400/50" />
                </div>
                 <div className="absolute top-[30%] left-[85%] -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="h-8 w-8 text-red-400 fill-red-400/50" />
                </div>
                 <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 animate-pulse">
                    <Truck className="h-10 w-10 text-white" />
                </div>
            </div>

            {/* Tracking Details */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex items-center gap-4">
                     <Avatar className="h-12 w-12 border-2 border-primary">
                        <AvatarImage src={moveDetails.driver.avatarUrl} alt={moveDetails.driver.name} data-ai-hint="person portrait" />
                        <AvatarFallback>{moveDetails.driver.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{moveDetails.driver.name}</p>
                        <p className="text-sm text-muted-foreground">{moveDetails.vehicle.id}</p>
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">Status</p>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">{moveDetails.status}</Badge>
                </div>
                 <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">ETA</p>
                    <p className="text-2xl font-bold">{moveDetails.eta}</p>
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
            <ScrollArea className="h-72 w-full">
                <div className="space-y-4">
                    {moveDetails.inventory.map(category => (
                        <div key={category.category}>
                            <h4 className="font-semibold text-primary mb-2">{category.category}</h4>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                                {category.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </CardContent>
    </Card>
);


export default function MoveDetailsPage() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Your Move Details</h1>
                <p className="text-muted-foreground">Live status and information for move #{moveDetails.moveId}.</p>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <h4 className="font-semibold flex items-center gap-2 text-muted-foreground"><Home className="h-4 w-4" /> Pickup Location</h4>
                                    <p>{moveDetails.pickupAddress}</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> Delivery Location</h4>
                                    <p>{moveDetails.deliveryAddress}</p>
                                </div>
                                 <div className="space-y-2">
                                    <h4 className="font-semibold flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /> Date & Arrival Window</h4>
                                    <p>{moveDetails.moveDate} at {moveDetails.scheduledTime}</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold flex items-center gap-2 text-muted-foreground"><CheckSquare className="h-4 w-4" /> Service Type</h4>
                                    <p>{moveDetails.serviceType}</p>
                                </div>
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
                                <span className="font-bold text-lg">${moveDetails.quoteTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-muted-foreground">Balance Due</span>
                                <span className="font-bold text-lg text-primary">${moveDetails.balanceDue.toFixed(2)}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
