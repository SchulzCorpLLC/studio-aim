'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Upload } from 'lucide-react';

interface NewClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newClaim: { title: string }) => void;
}

export function NewClaimModal({ isOpen, onClose, onSubmit }: NewClaimModalProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (!title) return; // Basic validation
    onSubmit({ title });
    setTitle('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Start a New Claim</DialogTitle>
          <DialogDescription>
            Please provide as much detail as possible. This will help our team resolve your issue quickly.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] p-1">
          <div className="space-y-6 pr-4">
            <div className="space-y-2">
              <Label htmlFor="claim-title">Claim Title</Label>
              <Input 
                id="claim-title" 
                placeholder="e.g., Broken lamp in bedroom box" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="claim-category">Category</Label>
                <Select>
                  <SelectTrigger id="claim-category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="damaged">Damaged</SelectItem>
                    <SelectItem value="missing">Missing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="affected-items">Affected Item(s)</Label>
                <Input id="affected-items" placeholder="e.g., Floor Lamp, Box #14" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="claim-description">Description of Issue</Label>
              <Textarea id="claim-description" placeholder="Describe the damage or what is missing in detail..." rows={4} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo-upload">Upload Photos or Video</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="photo-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PNG, JPG, MP4 accepted</p>
                  </div>
                  <Input id="photo-upload" type="file" className="hidden" multiple />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="estimated-value">Estimated Value ($)</Label>
                    <Input id="estimated-value" type="number" placeholder="150.00" />
                </div>
                 <div className="flex items-end pb-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="fragile-item" />
                        <label
                        htmlFor="fragile-item"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                        Item was marked as fragile
                        </label>
                    </div>
                </div>
            </div>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit Claim</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
