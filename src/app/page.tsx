import { WelcomeCard } from '@/components/dashboard/welcome-card';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { ClaimsCta } from '@/components/dashboard/claims-cta';
import { ReferralsCta } from '@/components/dashboard/referrals-cta';

export default function Home() {
  // In a real application, you would conditionally render the ClaimsCta
  // based on the move's status. For this demo, we'll show it.
  const isMoveCompleted = true; 

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="space-y-8 lg:col-span-2">
        <WelcomeCard />
        <QuickActions />
      </div>
      <div className="lg:col-span-1 space-y-8">
        <RecentActivity />
        {isMoveCompleted && <ClaimsCta />}
        {isMoveCompleted && <ReferralsCta />}
      </div>
    </div>
  );
}
