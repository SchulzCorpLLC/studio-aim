import { CommunicationView } from '@/components/admin/communications/communication-view';
import { mockCommunications } from '@/components/admin/operations/mock-data';

export default function AdminMessagesPage() {
  return (
    <CommunicationView communications={mockCommunications} />
  );
}
