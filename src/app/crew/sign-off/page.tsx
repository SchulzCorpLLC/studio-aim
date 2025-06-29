'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { SignaturePad } from '@/components/crew/signature-pad';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

export default function CrewSignOffPage() {
    const { toast } = useToast();
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [signature, setSignature] = useState<string | null>(null);

    const handleSaveSignature = (dataUrl: string) => {
        setSignature(dataUrl);
        toast({ title: "Signature Saved!", description: "Ready for customer confirmation." });
    };

    const handleSubmit = () => {
        if (!isConfirmed || !signature) {
            toast({
                variant: 'destructive',
                title: 'Incomplete',
                description: 'Please confirm the move is complete and capture a signature.',
            });
            return;
        }
        toast({
            title: "Job Sign-Off Complete!",
            description: "Signature has been uploaded."
        });
    }

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Customer Sign-Off</CardTitle>
                    <CardDescription>Have the customer sign below to confirm the move is complete.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="flex items-center space-x-2">
                        <Checkbox id="confirm-move" checked={isConfirmed} onCheckedChange={(checked) => setIsConfirmed(checked as boolean)} />
                        <Label htmlFor="confirm-move" className="text-base font-medium">
                            The customer confirms the move is complete to their satisfaction.
                        </Label>
                    </div>

                    <SignaturePad onSave={handleSaveSignature} />
                    
                    {signature && (
                        <div>
                            <h4 className="font-semibold mb-2">Saved Signature Preview:</h4>
                            <div className="p-4 border rounded-lg bg-muted/50">
                                <Image src={signature} alt="Customer signature" width={300} height={150} style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                    )}
                    
                    <Button size="lg" className="w-full h-16 text-xl" onClick={handleSubmit} disabled={!isConfirmed || !signature}>
                       Complete Sign-Off
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
