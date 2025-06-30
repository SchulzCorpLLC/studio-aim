'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Notification } from '@/components/admin/operations/mock-data';
import { NotificationsFeed } from '@/components/admin/support/notifications-feed';
import { Card } from '@/components/ui/card';

export default function AdminNotificationsPage() {
  const [notifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState('all');

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !n.isRead;
    return n.category.toLowerCase() === filter;
  });

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">
            A feed of all important events and alerts.
          </p>
        </div>
        <Button variant="outline">Mark All as Read</Button>
      </header>

      <Tabs defaultValue="all" onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="claims">Claims</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card>
        <NotificationsFeed notifications={filteredNotifications} />
      </Card>
    </div>
  );
}
