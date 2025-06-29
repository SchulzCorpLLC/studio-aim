'use client';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { mockApiKeys, mockWebhooks } from '@/components/admin/operations/mock-data';
import { ApiKeysTable } from '@/components/admin/settings/api-keys-table';
import { WebhooksTable } from '@/components/admin/settings/webhooks-table';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function ApiSettingsPage() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold">Developer Tools</h1>
                <p className="text-muted-foreground">Manage API keys and webhooks for custom integrations.</p>
            </header>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>API Keys</CardTitle>
                        <CardDescription>Grant access to the MovePortal API for your applications.</CardDescription>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create API Key
                    </Button>
                </CardHeader>
                <CardContent>
                    <ApiKeysTable apiKeys={mockApiKeys} />
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Webhooks</CardTitle>
                        <CardDescription>Send real-time data to your other applications when events happen.</CardDescription>
                    </div>
                     <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create Webhook
                    </Button>
                </CardHeader>
                <CardContent>
                    <WebhooksTable webhooks={mockWebhooks} />
                </CardContent>
            </Card>
        </div>
    );
}
