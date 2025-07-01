'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Link from 'next/link';

import {
  LifeBuoy,
  FileText,
  Star,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

export default function AccountSettingsPage() {
  const [isProfileEditing, setIsProfileEditing] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pass = e.target.value;
    let strength = 0;
    if (pass.length > 5) strength += 25;
    if (pass.length > 8) strength += 25;
    if (/[A-Z]/.test(pass)) strength += 25;
    if (/[0-9]/.test(pass)) strength += 25;
    setPasswordStrength(strength);
  };
  
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Account Settings</h1>
        <p className="text-muted-foreground">Manage your profile, security, and notification preferences.</p>
      </div>

      {/* Profile Information */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal details here.</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={() => setIsProfileEditing(!isProfileEditing)}>
            {isProfileEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your Name" disabled={!isProfileEditing} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" disabled={!isProfileEditing} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" disabled={!isProfileEditing} />
            </div>
          </div>
        </CardContent>
        {isProfileEditing && (
          <CardFooter>
            <Button onClick={() => setIsProfileEditing(false)}>Save Changes</Button>
          </CardFooter>
        )}
      </Card>

      {/* Password & Security */}
      <Card>
        <CardHeader>
          <CardTitle>Password & Security</CardTitle>
          <CardDescription>Manage your security settings and connected devices.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
              <Label>Change Password</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="password" placeholder="New Password" onChange={handlePasswordChange}/>
                  <Input type="password" placeholder="Confirm New Password" />
              </div>
              {passwordStrength > 0 && (
                <div>
                  <Label className="text-sm">Password Strength</Label>
                  <Progress value={passwordStrength} className="h-2 mt-1" />
                </div>
              )}
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="2fa" className="font-medium">Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
            </div>
            <Switch id="2fa" />
          </div>
           <Separator />
           <div>
              <Label className="font-medium">Session History</Label>
              <p className="text-sm text-muted-foreground pb-4">Manage your active sessions.</p>
              <div className="space-y-3">
                 <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
                    <p>No other active sessions.</p>
                </div>
              </div>
           </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Choose how you want to be notified.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
           <div className="space-y-4">
                <h4 className="font-semibold text-lg">By Email</h4>
                <div className="flex items-center justify-between">
                    <Label htmlFor="email-updates" className="flex flex-col gap-1 cursor-pointer">
                        <span>Move Status Updates</span>
                        <span className="font-normal text-muted-foreground">Get notified about your move&apos;s progress.</span>
                    </Label>
                    <Switch id="email-updates" defaultChecked />
                </div>
                 <div className="flex items-center justify-between">
                    <Label htmlFor="email-reminders" className="flex flex-col gap-1 cursor-pointer">
                        <span>Reminders</span>
                        <span className="font-normal text-muted-foreground">Checklist items, payment due dates, etc.</span>
                    </Label>
                    <Switch id="email-reminders" defaultChecked />
                </div>
           </div>
           <Separator />
           <div className="space-y-4">
                <h4 className="font-semibold text-lg">By SMS</h4>
                <div className="flex items-center justify-between">
                    <Label htmlFor="sms-updates" className="flex flex-col gap-1 cursor-pointer">
                        <span>Move Status Updates</span>
                         <span className="font-normal text-muted-foreground">Get critical alerts on the day of the move.</span>
                    </Label>
                    <Switch id="sms-updates" />
                </div>
                 <div className="flex items-center justify-between">
                    <Label htmlFor="sms-messages" className="flex flex-col gap-1 cursor-pointer">
                        <span>New Messages</span>
                        <span className="font-normal text-muted-foreground">Get notified when you receive a new message.</span>
                    </Label>
                    <Switch id="sms-messages" defaultChecked />
                </div>
           </div>
        </CardContent>
        <CardFooter>
            <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
      
      {/* Support & Help Links */}
      <Card>
        <CardHeader>
            <CardTitle>Support & Help</CardTitle>
            <CardDescription>Find resources or get in touch with our team.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-2">
                <Link href="/messaging" className="block rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between p-3 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <LifeBuoy className="h-5 w-5 text-primary" />
                            <span className="font-medium">Contact Support</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                </Link>
                <Link href="/help-center" className="block rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between p-3 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <HelpCircle className="h-5 w-5 text-primary" />
                            <span className="font-medium">FAQ / Help Center</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                </Link>
                <Link href="#" className="block rounded-lg hover:bg-muted/50 transition-colors">
                     <div className="flex items-center justify-between p-3 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-primary" />
                            <span className="font-medium">Submit Feedback</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                </Link>
                <Link href="#" className="block rounded-lg hover:bg-muted/50 transition-colors">
                     <div className="flex items-center justify-between p-3 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-primary" />
                            <span className="font-medium">Terms & Privacy</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                </Link>
            </div>
        </CardContent>
      </Card>

    </div>
  );
}
