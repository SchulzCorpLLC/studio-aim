'use client';

import { Cuboid, Scale, Truck, Users, Box, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface InventoryEstimatesBarProps {
    itemCount: number;
    totalCubicFeet: number;
    estimatedWeight: number;
    recommendedTruck: string;
    suggestedCrew: string;
}

const Metric = ({ icon: Icon, label, value, tooltipText }: { icon: React.ElementType, label: string, value: string | number, tooltipText: string }) => (
    <div className="flex flex-col items-center justify-center p-2 text-center h-full">
        <div className="flex items-center gap-1.5 text-muted-foreground">
            <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
            <span className="hidden md:inline font-medium">{label}</span>
             <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button className="inline-flex items-center justify-center">
                            <HelpCircle className="h-4 w-4 opacity-70" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="max-w-xs">{tooltipText}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
        <p className="text-lg sm:text-xl font-bold">{value}</p>
        <p className="text-[10px] sm:text-xs md:hidden text-muted-foreground -mt-1">{label}</p>
    </div>
);


export function InventoryEstimatesBar({ itemCount, totalCubicFeet, estimatedWeight, recommendedTruck, suggestedCrew }: InventoryEstimatesBarProps) {
    return (
        <div className="fixed bottom-0 left-0 md:left-[280px] right-0 bg-background/80 backdrop-blur-sm border-t z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-5 divide-x divide-border h-20">
                    <Metric 
                        icon={Box}
                        label="Total Items"
                        value={itemCount}
                        tooltipText="The total count of all individual items you've logged."
                    />
                    <Metric 
                        icon={Cuboid}
                        label="Est. Volume"
                        value={`${totalCubicFeet.toFixed(0)} ft³`}
                        tooltipText="Estimated cubic footage helps determine the truck size needed. Average is ~200 ft³ per room."
                    />
                     <Metric 
                        icon={Scale}
                        label="Est. Weight"
                        value={`${estimatedWeight.toLocaleString()} lbs`}
                        tooltipText="Estimated weight is another factor in planning your move. Standard items are ~7 lbs per cubic foot."
                    />
                    <Metric 
                        icon={Truck}
                        label="Rec. Truck"
                        value={recommendedTruck}
                        tooltipText="The recommended truck size based on your inventory volume. Subject to final review."
                    />
                    <Metric 
                        icon={Users}
                        label="Crew Size"
                        value={suggestedCrew}
                        tooltipText="The suggested number of movers for an efficient move. Based on volume and item complexity."
                    />
                </div>
            </div>
        </div>
    );
}
