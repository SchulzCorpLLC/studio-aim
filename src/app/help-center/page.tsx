import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function HelpCenterPage() {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Help Center</CardTitle>
                    <CardDescription>This page is under construction.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Find FAQs, guides, and video tutorials here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
