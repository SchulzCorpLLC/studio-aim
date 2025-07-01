import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { PaymentMethod } from "./payments-data";
import { CreditCard, PlusCircle, Trash2, Star } from "lucide-react";

interface PaymentMethodsProps {
  methods: PaymentMethod[];
  onAdd: () => void;
  onRemove: (methodId: string) => void;
}

const CardIcon = () => {
    // In a real app, you'd use brand icons. For now, a generic one.
    return <CreditCard className="h-8 w-8" />;
}

export function PaymentMethods({ methods, onAdd, onRemove }: PaymentMethodsProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your saved cards.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        <div className="space-y-4 flex-grow">
          {methods.map((method) => (
            <div key={method.id} className="p-3 rounded-lg bg-muted/50 flex items-center gap-4">
              <CardIcon />
              <div className="flex-grow">
                <p className="font-semibold">{method.type} •••• {method.last4}</p>
                <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
              </div>
              <div className="flex items-center gap-1">
                {method.isDefault && <Star className="h-4 w-4 text-yellow-400" />}
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onRemove(method.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
          {methods.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">No payment methods saved.</p>
          )}
        </div>
        <div className="mt-6">
            <Button variant="outline" className="w-full" onClick={onAdd}>
              <PlusCircle className="mr-2" />
              Add New Card
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
