"use client";

import { cn } from "@/lib/utils";
import { CheckCircle, Package, Truck, Home } from "lucide-react";

const steps = [
  { name: "Confirmed", icon: CheckCircle },
  { name: "Packed", icon: Package },
  { name: "In Transit", icon: Truck },
  { name: "Delivered", icon: Home },
];

export function ProgressTracker({ currentStep }: { currentStep: "Confirmed" | "Packed" | "In Transit" | "Delivered" }) {
  const currentStepIndex = steps.findIndex(step => step.name === currentStep);

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Move Progress</h3>
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 top-5 h-1 w-full -translate-y-1/2 bg-gray-200 dark:bg-gray-700">
          <div
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step, index) => {
          const isActive = index <= currentStepIndex;
          return (
            <div key={step.name} className="z-10 flex flex-col items-center text-center">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-500",
                  isActive ? "border-primary bg-primary text-primary-foreground" : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"
                )}
              >
                <step.icon className="h-5 w-5" />
              </div>
              <p className={cn("mt-2 w-20 text-sm font-medium", isActive ? "text-primary" : "text-muted-foreground")}>
                {step.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
