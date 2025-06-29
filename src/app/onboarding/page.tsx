'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (step === 2) {
      router.push('/request-quote');
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const progress = step === 1 ? 50 : 100;

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to MovePortal</CardTitle>
          <CardDescription>
            Let's get your account set up. ({step}/2)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Progress value={progress} className="w-full" />
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Step 1: Contact Information</h3>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Current Address</Label>
                <Input
                  id="address"
                  placeholder="123 Main St, San Francisco, CA"
                />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Step 2: Preferences</h3>
              <p>This is a placeholder for step 2 preferences.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack} disabled={step === 1}>
            Back
          </Button>
          <Button onClick={handleNext}>
            {step === 2 ? 'Get a Quote' : 'Next'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
