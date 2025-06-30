'use client';
import Link from 'next/link';
import { CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Notification } from '../operations/mock-data';
import { Bell } from 'lucide-react';

interface NotificationsFeedProps {
  notifications: Notification[];
}

export function NotificationsFeed({ notifications }: NotificationsFeedProps) {
  return (
    <CardContent>
      {notifications.length > 0 ? (
        <div className="space-y-2">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Link
                href={notification.link}
                key={notification.id}
                className={cn(
                  'block rounded-lg p-4 transition-colors',
                  notification.isRead
                    ? 'bg-transparent hover:bg-muted/50'
                    : 'bg-primary/10 hover:bg-primary/20'
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full',
                      notification.isRead ? 'bg-muted' : 'bg-primary/20'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-5 w-5',
                        notification.isRead
                          ? 'text-muted-foreground'
                          : 'text-primary'
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{notification.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.timestamp}
                    </p>
                  </div>
                  {!notification.isRead && (
                    <div className="h-2.5 w-2.5 rounded-full bg-primary mt-1"></div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
            <Bell className="mx-auto h-12 w-12" />
            <h3 className="text-xl font-semibold mt-4">All Caught Up!</h3>
            <p>You have no new notifications.</p>
        </div>
      )}
    </CardContent>
  );
}
