'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';
import { initialTasks } from '@/components/checklist/tasks-data';
import type { Task, TaskStage } from '@/components/checklist/tasks-data';
import { ChecklistView } from '@/components/checklist/checklist-view';

export default function ChecklistPage() {
    const [tasks, setTasks] = useState<Record<TaskStage, Task[]>>(initialTasks);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [activeTab, setActiveTab] = useState<TaskStage>('Before');

    const handleTaskUpdate = (stage: TaskStage, taskId: string, completed: boolean) => {
        setTasks(prev => ({
            ...prev,
            [stage]: prev[stage].map(task =>
                task.id === taskId ? { ...task, completed } : task
            ),
        }));
    };

    const handleAddTask = () => {
        if (!newTaskTitle.trim()) return;
        const newTask: Task = {
            id: `task-${Date.now()}`,
            title: newTaskTitle.trim(),
            description: 'Custom user-added task.',
            completed: false,
            category: 'Personal',
        };
        setTasks(prev => ({
            ...prev,
            [activeTab]: [...prev[activeTab], newTask],
        }));
        setNewTaskTitle('');
    };
    
    const totalTasks = useMemo(() => Object.values(tasks).flat().length, [tasks]);
    const completedTasks = useMemo(() => Object.values(tasks).flat().filter(t => t.completed).length, [tasks]);
    const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <div className="w-full max-w-4xl mx-auto">
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-3xl">Ultimate Move Checklist</CardTitle>
                    <CardDescription>Stay organized and on track. We&apos;ve pre-filled a list of tasks to guide you.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Progress Tracker */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center font-medium">
                            <span>Overall Progress</span>
                            <span>{Math.round(progressPercentage)}%</span>
                        </div>
                        <Progress value={progressPercentage} className="h-4" />
                        <p className="text-sm text-muted-foreground text-right">{completedTasks} of {totalTasks} tasks completed</p>
                    </div>

                    {/* Task Tabs */}
                    <Tabs defaultValue="Before" onValueChange={(value) => setActiveTab(value as TaskStage)}>
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="Before">Before the Move</TabsTrigger>
                            <TabsTrigger value="During">Move Day</TabsTrigger>
                            <TabsTrigger value="After">After the Move</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Before" className="mt-4">
                            <ChecklistView
                                tasks={tasks.Before}
                                onTaskUpdate={(taskId, completed) => handleTaskUpdate('Before', taskId, completed)}
                            />
                        </TabsContent>
                        <TabsContent value="During" className="mt-4">
                             <ChecklistView
                                tasks={tasks.During}
                                onTaskUpdate={(taskId, completed) => handleTaskUpdate('During', taskId, completed)}
                            />
                        </TabsContent>
                        <TabsContent value="After" className="mt-4">
                             <ChecklistView
                                tasks={tasks.After}
                                onTaskUpdate={(taskId, completed) => handleTaskUpdate('After', taskId, completed)}
                            />
                        </TabsContent>
                    </Tabs>
                </CardContent>
                <CardFooter className="bg-muted/50 p-4 border-t">
                    <div className="w-full flex items-center gap-4">
                        <Input
                            placeholder="Add a custom task to the current list..."
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
                            className="flex-grow bg-background"
                        />
                        <Button onClick={handleAddTask}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Task
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
