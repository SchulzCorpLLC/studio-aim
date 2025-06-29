import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function ClaimsFaq() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <span>Claim Support</span>
                </CardTitle>
                <CardDescription>Find answers to common questions.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What qualifies for a claim?</AccordionTrigger>
                        <AccordionContent>
                            You can submit a claim for any item that was damaged or went missing during your move and was handled by our crew. Please refer to your moving agreement for specific liability limits.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How long do claims take to process?</AccordionTrigger>
                        <AccordionContent>
                           Most claims are reviewed within 5-7 business days. Once a decision is made, you will be notified via email and your claim status will be updated here in the portal.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger>What documentation do I need?</AccordionTrigger>
                        <AccordionContent>
                            To speed up the process, please provide clear photos of the damage, the item's original packaging if possible, and any proof of value (like a receipt). The more information you provide, the better.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b-0">
                        <AccordionTrigger>Can I edit a submitted claim?</AccordionTrigger>
                        <AccordionContent>
                            Once a claim is submitted, it cannot be edited. However, you can message our support team with the claim ID to provide additional information or documents.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}
