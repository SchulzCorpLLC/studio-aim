'use client';
import { useState } from 'react';
import { CommunicationView } from '@/components/admin/communications/communication-view';
import type { Communication } from '@/components/admin/operations/mock-data';

export default function AdminMessagesPage() {
  const [communications] = useState<Communication[]>([]);
  
  return (
    <CommunicationView communications={communications} />
  );
}
