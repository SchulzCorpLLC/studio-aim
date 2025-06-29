import { KpiCard } from "./kpi-card";
import { Briefcase, DollarSign, FileText, Users } from "lucide-react";

export function KpiSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <KpiCard title="Jobs Today" value="6 / 9" change={-10} icon={Briefcase} />
      <KpiCard title="Revenue This Week" value="$18,450" change={12} icon={DollarSign} />
      <KpiCard title="New Quotes" value="12" change={20} icon={FileText} />
      <KpiCard title="Crew Availability" value="3 / 8" change={-5} icon={Users} />
    </div>
  );
}
