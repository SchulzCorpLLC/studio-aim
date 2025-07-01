'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  documentName: string;
}

export function SignatureModal({ isOpen, onClose, onConfirm, documentName }: SignatureModalProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Sign Document: {documentName}</DialogTitle>
          <DialogDescription>
            Please review the document below and click &quot;Sign & Accept&quot; to confirm.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <h4 className="font-bold text-lg text-foreground">Terms of Service</h4>
            <p>
              This Agreement is made and entered into on this day, by and between MovePortal (&quot;the Company&quot;) and the undersigned client (&quot;the Client&quot;).
            </p>
            <p>
              The Company agrees to provide moving services as detailed in the &quot;Inventory List&quot; and &quot;Moving Agreement&quot; documents. This includes the packing, loading, transportation, and unloading of the Client&apos;s belongings from the pickup address to the delivery address specified.
            </p>
            <h5 className="font-semibold text-foreground">1. Scope of Services</h5>
            <p>
              The services will be performed by the assigned crew on the scheduled date and time. The Company will provide the necessary vehicle and equipment to complete the move safely and efficiently. Any changes to the scope of services must be agreed upon in writing by both parties.
            </p>
            <h5 className="font-semibold text-foreground">2. Payment</h5>
            <p>
              The Client agrees to pay the total amount specified in the final quote. Payment is due upon completion of the move unless otherwise specified in writing. Late payments may incur additional fees.
            </p>
            <h5 className="font-semibold text-foreground">3. Liability</h5>
            <p>
              The Company&apos;s liability for any lost or damaged goods is limited as described in the &quot;Insurance Waiver&quot; document. The Client is encouraged to purchase additional insurance coverage if desired. The Company is not responsible for damage to items that were not packed by its crew.
            </p>
            <p>
              By signing below, the Client acknowledges that they have read, understood, and agree to the terms and conditions outlined in this document.
            </p>
            <div className="pt-8">
              <div className="w-1/2 border-b-2 border-foreground h-8"></div>
              <p className="pt-2">Client Signature</p>
            </div>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Sign & Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
