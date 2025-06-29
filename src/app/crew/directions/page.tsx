'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export default function CrewDirectionsPage() {
    const address = "123 Main St, San Francisco, CA 94105";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Directions</CardTitle>
                    <CardDescription>Get directions to the job site.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <MapPin className="h-8 w-8 text-primary" />
                        <p className="text-lg font-semibold">{address}</p>
                    </div>
                    <Button asChild size="lg" className="w-full h-16 text-xl">
                        <Link href={mapsUrl} target="_blank" rel="noopener noreferrer">
                            Open in Google Maps
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
