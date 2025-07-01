'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download } from 'lucide-react';
import Image from 'next/image';

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Company Settings</h1>
        <p className="text-muted-foreground">Manage your brand, legal, and operational details.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <Card>
            <CardHeader>
                <CardTitle>Company Profile</CardTitle>
                <CardDescription>Update your company&apos;s public information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Your Company Name" />
                </div>
                 <div className="space-y-2">
                    <Label>Company Logo</Label>
                    <div className="flex items-center gap-6">
                        <div className="relative h-20 w-20 rounded-md border bg-muted flex items-center justify-center">
                            <Image src="https://placehold.co/100x100.png" alt="Company Logo" layout="fill" objectFit="contain" className="p-2" data-ai-hint="logo" />
                        </div>
                        <Button variant="outline"><Upload className="mr-2 h-4 w-4"/> Change Logo</Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="contact-email">Public Email</Label>
                        <Input id="contact-email" type="email" placeholder="contact@yourcompany.com" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="contact-phone">Public Phone</Label>
                        <Input id="contact-phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                </div>
            </CardContent>
             <CardFooter>
                <Button>Save Profile</Button>
            </CardFooter>
           </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Legal &amp; Financial</CardTitle>
                    <CardDescription>Manage addresses and financial defaults.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="legal-address">Legal Address</Label>
                        <Input id="legal-address" placeholder="123 Example St, City, State 12345" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                            <Input id="tax-rate" type="number" placeholder="8.5" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="currency">Currency</Label>
                            <Input id="currency" placeholder="USD" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Save Financial Info</Button>
                </CardFooter>
            </Card>

        </div>
        <div className="lg:col-span-1 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Business Documents</CardTitle>
                    <CardDescription>Upload and store important legal documents.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <Button variant="outline" className="w-full justify-start"><Download className="mr-2 h-4 w-4"/> Download W-9</Button>
                     <Button variant="outline" className="w-full justify-start"><Download className="mr-2 h-4 w-4"/> Download COI</Button>
                     <Button variant="secondary" className="w-full"><Upload className="mr-2 h-4 w-4"/> Upload a Document</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
