import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export default function CrewProfilePage() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader className="items-center text-center">
            <Avatar className="h-24 w-24 mb-4 border-4 border-primary">
              <AvatarImage src="https://placehold.co/100x100.png" alt="Crew Member" data-ai-hint="person portrait" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          <CardTitle className="text-3xl font-bold">John Smith</CardTitle>
          <CardDescription>Lead Mover / Driver</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button size="lg" className="h-16 text-xl bg-green-600 hover:bg-green-700">Clock In</Button>
            <Button size="lg" variant="destructive" className="h-16 text-xl">Clock Out</Button>
          </div>
           <Button asChild size="lg" variant="outline" className="w-full h-16 text-xl">
             <Link href="tel:555-123-4567">
                <Phone className="mr-4 h-6 w-6" />
                Call Dispatch
             </Link>
           </Button>
        </CardContent>
      </Card>
    </div>
  );
}
