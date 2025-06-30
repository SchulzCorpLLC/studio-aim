'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, ShieldAlert } from 'lucide-react';
import { NewClaimModal } from '@/components/claims/new-claim-modal';
import { ClaimHistory } from '@/components/claims/claim-history';
import { ClaimsFaq } from '@/components/claims/claims-faq';
import type { Claim } from '@/components/claims/claim-history';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ClaimsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [claims, setClaims] = useState<Claim[]>([]);

  const handleClaimSubmit = (newClaim: { title: string }) => {
    const newClaimWithId = {
      ...newClaim,
      id: `CLM-00${claims.length + 1}`,
      dateSubmitted: new Date().toISOString().split('T')[0],
      status: 'Submitted' as const,
    };
    setClaims(prev => [newClaimWithId, ...prev]);
    setIsModalOpen(false);
  };

  const openClaimsCount = claims.filter(c => c.status === 'Under Review' || c.status === 'Submitted').length;

  return (
    <>
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Claims Center</h1>
          <p className="text-muted-foreground">Report a damaged or missing item and track the status of your claims.</p>
        </div>

        {/* Claim Overview Section */}
        <Card className="bg-card/80">
          <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
                <CardTitle className="flex items-center gap-2">
                    <ShieldAlert className="h-6 w-6 text-primary" />
                    <span>Your Claims Overview</span>
                </CardTitle>
                <CardDescription>You have {openClaimsCount} open claim(s). We're here to help.</CardDescription>
            </div>
            <Button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" />
              Start New Claim
            </Button>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Claim History Table */}
            <div className="lg:col-span-2">
                <ClaimHistory claims={claims} />
            </div>

            {/* Help & Support */}
            <div className="lg:col-span-1">
                <ClaimsFaq />
            </div>
        </div>
      </div>
      
      <NewClaimModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleClaimSubmit}
      />
    </>
  );
}
