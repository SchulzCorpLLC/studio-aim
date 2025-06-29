import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, User, Home, FileText } from 'lucide-react';

export default function CrewJobPage() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Today's Job</CardTitle>
          <CardDescription>Job ID: SF-OAK-102624</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Clock className="h-6 w-6 text-primary" />
              <span>9:00 AM - 11:00 AM</span>
            </div>
            <div className="flex items-center gap-4">
              <User className="h-6 w-6 text-primary" />
              <span>Alex Doe</span>
            </div>
            <div className="flex items-center gap-4">
              <Home className="h-6 w-6 text-primary" />
              <span>123 Main St, San Francisco, CA 94105</span>
            </div>
          </div>
          <Card className="bg-muted/50">
            <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Job Notes
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-base text-muted-foreground">"Please be careful with the antique grandfather clock in the living room. It's a family heirloom."</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button size="lg" className="h-16 text-xl">Start Job</Button>
        <Button size="lg" variant="outline" className="h-16 text-xl">Complete Job</Button>
      </div>
    </div>
  );
}
