import { Truck } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
      <div className="rounded-md bg-primary p-2">
        <Truck className="h-6 w-6 text-primary-foreground" />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        MovePortal
      </h1>
    </Link>
  );
}
