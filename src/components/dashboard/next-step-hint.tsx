import { Card } from "@/components/ui/card";
import { ArrowRight, FileWarning } from "lucide-react";
import Link from 'next/link';

export function NextStepHint() {
    // In a real app, this would come from an API based on the documents array
    const pendingDocumentsCount = 3; 

    if (pendingDocumentsCount === 0) {
        return null;
    }

    return (
        <Link href="/documents" className="group block">
            <Card className="bg-accent/50 border-primary/20 group-hover:bg-accent/80 transition-colors p-4 rounded-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <FileWarning className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-accent-foreground">Next Step: Sign Documents</h3>
                            <p className="text-sm text-muted-foreground">
                                You have {pendingDocumentsCount} {pendingDocumentsCount > 1 ? 'documents' : 'document'} waiting for your signature.
                            </p>
                        </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-accent-foreground opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
            </Card>
        </Link>
    );
}
