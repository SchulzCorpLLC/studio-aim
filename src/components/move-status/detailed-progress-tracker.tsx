"use client";

import { cn } from "@/lib/utils";
import { CalendarCheck, Truck, Package, Route, Home, Check } from "lucide-react";

export type StepName = "Scheduled" | "En Route" | "Loading" | "In Transit" | "Delivered";

const steps: { name: StepName; icon: React.ElementType }[] = [
  { name: "Scheduled", icon: CalendarCheck },
  { name: "En Route", icon: Truck },
  { name: "Loading", icon: Package },
  { name: "In Transit", icon: Route },
  { name: "Delivered", icon: Home },
];

export function DetailedProgressTracker({ currentStep }: { currentStep: StepName }) {
  const currentStepIndex = steps.findIndex(step => step.name === currentStep);

  return (
    <div className="w-full py-4">
        <div className="relative flex items-center justify-between">
            <div className="absolute left-0 top-6 h-2 w-full -translate-y-1/2 bg-gray-200 dark:bg-gray-700">
                <div
                    className="h-full bg-primary transition-all duration-500 ease-in-out"
                    style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
                />
            </div>

            {steps.map((step, index) => {
                const isCompleted = index < currentStepIndex;
                const isCurrent = index === currentStepIndex;
                const isActive = index <= currentStepIndex;
                
                return (
                    <div key={step.name} className="z-10 flex flex-col items-center text-center gap-2">
                        <div
                            className={cn(
                                "flex h-12 w-12 items-center justify-center rounded-full border-4 transition-all duration-300",
                                isCompleted ? "border-primary bg-primary text-primary-foreground" :
                                isCurrent ? "border-primary bg-background scale-110 shadow-lg" : 
                                "border-gray-300 bg-background dark:border-gray-600"
                            )}
                        >
                            {isCompleted ? <Check className="h-6 w-6" /> : <step.icon className={cn("h-6 w-6", isActive ? "text-primary" : "text-muted-foreground")} />}
                        </div>
                        <p className={cn(
                            "w-24 text-sm font-medium",
                            isActive ? "text-foreground" : "text-muted-foreground",
                            isCurrent && "font-bold text-primary"
                        )}>
                            {step.name}
                        </p>
                    </div>
                );
            })}
        </div>
    </div>
  );
}
