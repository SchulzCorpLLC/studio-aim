import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CrewJobPage() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Today&apos;s Job</CardTitle>
          <CardDescription>No job assigned for today.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-lg">
          <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-lg">
             <h3 className="text-xl font-semibold">No Job Details</h3>
            <p>Please check with dispatch for your next assignment.</p>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button size="lg" className="h-16 text-xl" disabled>Start Job</Button>
        <Button size="lg" variant="outline" className="h-16 text-xl" disabled>Complete Job</Button>
      </div>
    </div>
  );
}
