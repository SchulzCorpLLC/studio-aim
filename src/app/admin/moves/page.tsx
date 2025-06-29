import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function AdminMovesPage() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Admin Moves</CardTitle>
          <CardDescription>
            This page is a placeholder for managing moves.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for managing moves would go here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
