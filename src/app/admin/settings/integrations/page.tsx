'use client';
import { IntegrationCard } from '@/components/admin/settings/integration-card';
import { CreditCard, Calendar, MessageSquare, Briefcase, DollarSign, Slack } from 'lucide-react';

const integrations = [
    { name: 'Stripe', description: 'Connect your Stripe account to process payments.', logo: CreditCard, isConnected: true },
    { name: 'Google Calendar', description: 'Sync your job schedule with Google Calendar.', logo: Calendar, isConnected: true },
    { name: 'Twilio', description: 'Enable SMS notifications and communication.', logo: MessageSquare, isConnected: false },
    { name: 'QuickBooks', description: 'Sync invoices and payments with QuickBooks.', logo: DollarSign, isConnected: false },
    { name: 'Slack', description: 'Get real-time notifications in your Slack workspace.', logo: Slack, isConnected: true },
    { name: 'HubSpot', description: 'Sync customer data and leads with HubSpot CRM.', logo: Briefcase, isConnected: false },
];

export default function IntegrationsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold">Integrations</h1>
                <p className="text-muted-foreground">Connect MovePortal with your favorite tools to automate workflows.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations.map(integration => (
                    <IntegrationCard key={integration.name} {...integration} />
                ))}
            </div>
        </div>
    );
}
