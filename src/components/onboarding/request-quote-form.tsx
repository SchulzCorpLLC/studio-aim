'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, CheckCircle2, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { completeOnboarding } from '@/app/actions';

export function RequestQuoteForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [moveDate, setMoveDate] = useState<Date>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Quote Request Sent!',
      description: 'We will get back to you shortly. Redirecting you to the dashboard...',
    });
    setIsSubmitted(true);
    
    // Mark onboarding as complete and redirect to dashboard
    setTimeout(async () => {
      try {
        await completeOnboarding();
      } catch (error) {
        console.error('Error completing onboarding:', error);
        router.push('/dashboard');
      }
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
            <CardTitle className="text-3xl">Thank You!</CardTitle>
            <CardDescription className="text-lg">Your quote request has been submitted successfully.</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-center text-muted-foreground">We are preparing your quote and will notify you via email shortly. You will now be redirected to your dashboard.</p>
        </CardContent>
        <CardFooter>
            <Button className="w-full" onClick={() => router.push('/dashboard')}>
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-3xl">Get a Free Moving Quote</CardTitle>
        <CardDescription>Tell us about your move, and we'll get back to you with a quote in 24 hours.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="Enter first name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Enter last name" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickup">Address From</Label>
              <Input id="pickup" placeholder="Enter starting address" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dropoff">Address To</Label>
              <Input id="dropoff" placeholder="Enter destination address" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="move-date">Requested Move Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal h-auto py-4',
                      !moveDate && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {moveDate ? format(moveDate, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={moveDate} onSelect={setMoveDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="home-size">Home Size</Label>
              <Select required>
                <SelectTrigger id="home-size" className="h-auto py-4">
                  <SelectValue placeholder="Select home size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="studio-1br">Studio / 1 Bedroom</SelectItem>
                  <SelectItem value="2br">2 Bedrooms</SelectItem>
                  <SelectItem value="3br">3 Bedrooms</SelectItem>
                  <SelectItem value="4br+">4+ Bedrooms</SelectItem>
                  <SelectItem value="commercial">Commercial / Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea id="notes" placeholder="Anything else we should know? (e.g., stairs, heavy items, etc.)" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" size="lg" className="w-full text-lg">Request My Quote</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
