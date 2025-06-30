import { Card, CardTitle } from "@/components/ui/card";
import {
  ClipboardList,
  FileText,
  CreditCard,
  HelpCircle,
  Boxes,
} from "lucide-react";
import Link from 'next/link';

const actions = [
  { title: "View Move Details", icon: ClipboardList, href: "/move-details" },
  { title: "Sign Documents", icon: FileText, href: "/documents" },
  { title: "Make a Payment", icon: CreditCard, href: "/payments" },
  { title: "Inventory Manager", icon: Boxes, href: "/inventory" },
  { title: "Get Help", icon: HelpCircle, href: "/help-center" },
];

export function QuickActions() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <Link href={action.href} key={action.title} className="group">
            <Card variant="hover" className="flex h-full flex-col items-center justify-center gap-3 rounded-lg p-4 text-center">
              <div className="rounded-lg bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <action.icon className="h-7 w-7" />
              </div>
              <CardTitle className="text-sm font-semibold md:text-base">{action.title}</CardTitle>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
