'use client';

import type { Task } from './tasks-data';
import { TaskItem } from './task-item';
import { AnimatePresence, motion } from 'framer-motion';

interface ChecklistViewProps {
    tasks: Task[];
    onTaskUpdate: (taskId: string, completed: boolean) => void;
}

export function ChecklistView({ tasks, onTaskUpdate }: ChecklistViewProps) {

    if (tasks.length === 0) {
        return (
            <div className="text-center py-16 px-6 text-muted-foreground">
                <p>No tasks for this stage.</p>
                <p className="text-sm">Add a custom task below to get started!</p>
            </div>
        );
    }
    
    return (
        <div className="space-y-3">
            <AnimatePresence>
                {tasks.map((task) => (
                    <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <TaskItem
                            task={task}
                            onUpdate={(completed) => onTaskUpdate(task.id, completed)}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
