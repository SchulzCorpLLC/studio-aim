import { KpiSummary } from '@/components/admin/dashboard/kpi-summary';
import { ActivityFeed } from '@/components/admin/dashboard/activity-feed';
import { QuickActions } from '@/components/admin/dashboard/quick-actions';
import { ReportsPanel } from '@/components/admin/dashboard/reports-panel';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's a bird's-eye view of your operations.
        </p>
      </header>
      
      <main className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <KpiSummary />
          <ReportsPanel />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <QuickActions />
          <ActivityFeed />
        </div>
      </main>
    </div>
  );
}
