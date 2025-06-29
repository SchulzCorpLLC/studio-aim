'use client';

import type { Task } from './tasks-data';
import { categoryIcons } from './tasks-data';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';

interface TaskItemProps {
    task: Task;
    onUpdate: (completed: boolean) => void;
}

export function TaskItem({ task, onUpdate }: TaskItemProps) {
    const Icon = categoryIcons[task.category];

    return (
        <div className={cn(
            "flex items-start gap-4 p-4 rounded-lg border transition-all",
            task.completed ? 'bg-muted/50 border-transparent' : 'bg-background hover:bg-muted/50'
        )}>
            <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={(checked) => onUpdate(checked as boolean)}
                className="mt-1 h-5 w-5"
            />
            <div className="flex-grow grid gap-1">
                <label
                    htmlFor={`task-${task.id}`}
                    className={cn(
                        "font-medium cursor-pointer",
                        task.completed && "line-through text-muted-foreground"
                    )}
                >
                    {task.title}
                </label>
                <p className={cn(
                    "text-sm text-muted-foreground",
                     task.completed && "line-through"
                )}>
                    {task.description}
                </p>
                <div className="flex items-center gap-4 mt-2">
                    <Badge variant="outline" className="gap-1.5 font-normal">
                       <Icon className="h-3 w-3" />
                       {task.category}
                    </Badge>
                     {task.dueDate && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{task.dueDate}</span>
                        </div>
                     )}
                </div>
            </div>
        </div>
    );
}
