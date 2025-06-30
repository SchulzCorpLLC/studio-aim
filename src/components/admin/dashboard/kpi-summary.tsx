import { KpiCard } from "./kpi-card";
import { Briefcase, DollarSign, FileText, Users } from "lucide-react";

export function KpiSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <KpiCard title="Jobs Today" value="--" change={0} icon={Briefcase} />
      <KpiCard title="Revenue This Week" value="$0" change={0} icon={DollarSign} />
      <KpiCard title="New Quotes" value="0" change={0} icon={FileText} />
      <KpiCard title="Crew Availability" value="-- / --" change={0} icon={Users} />
    </div>
  );
}
