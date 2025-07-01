import { WelcomeCard } from "@/components/dashboard/welcome-card";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { ReferralsCta } from "@/components/dashboard/referrals-cta";
import { ClaimsCta } from "@/components/dashboard/claims-cta";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <WelcomeCard />
          <RecentActivity />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <QuickActions />
          <ReferralsCta />
          <ClaimsCta />
        </div>
      </div>
    </div>
  );
} 