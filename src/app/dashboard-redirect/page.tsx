import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function DashboardRedirectPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Login Successful</CardTitle>
          <CardDescription>
            Based on your role, you would be redirected. For this demo, please
            select a dashboard to view.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild className="w-full justify-between" variant="outline">
            <Link href="/request-quote">
              Client Login
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="w-full justify-between" variant="outline">
            <Link href="/crew">
              Crew Login
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="w-full justify-between" variant="outline">
            <Link href="/admin">
              Admin Login
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
