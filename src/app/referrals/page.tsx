'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Copy, Share2, MessageSquare, Mail, Link2, Users, Award, CheckCircle2, XCircle, Clock } from "lucide-react";

const referralCode = "ALEXDOE-24";
const totalReferrals = 3;

const referralHistory = [
  { name: "Jane Smith", status: "Moved", date: "2024-09-15", reward: "$25 Credit" },
  { name: "Bob Johnson", status: "Booked", date: "2024-09-22", reward: "Pending" },
  { name: "Alice Williams", status: "Signed Up", date: "2024-10-01", reward: "Pending" },
];

const rewardTiers = [
    { count: 1, reward: "$25 Credit", achieved: true },
    { count: 3, reward: "Free Packing Kit", achieved: true },
    { count: 5, reward: "$50 Cash Reward", achieved: false },
    { count: 10, reward: "10% Off Next Move", achieved: false },
];

const getStatusBadge = (status: string) => {
    switch (status) {
        case "Moved":
            return <Badge variant="default" className="bg-green-500/20 text-green-400 gap-1.5 border-green-500/30"><CheckCircle2 className="h-3 w-3" />{status}</Badge>;
        case "Booked":
            return <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 gap-1.5 border-blue-500/30"><Clock className="h-3 w-3" />{status}</Badge>;
        case "Signed Up":
            return <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 gap-1.5 border-yellow-500/30"><Users className="h-3 w-3" />{status}</Badge>;
        default:
            return <Badge variant="destructive"><XCircle className="h-3 w-3" />{status}</Badge>;
    }
};

export default function ReferralsPage() {
    const { toast } = useToast();

    const handleCopyCode = () => {
        navigator.clipboard.writeText(referralCode);
        toast({
            title: "Code Copied!",
            description: "Your referral code is ready to be shared.",
        });
    };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Refer a Friend</h1>
        <p className="text-muted-foreground">Share the love and earn rewards for every friend who moves with us.</p>
      </div>

      {/* Referral Summary Banner */}
      <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 overflow-hidden">
        <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
                <Badge variant="secondary" className="text-lg py-1 px-4">Give $25, Get $25</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight">Earn Rewards by Referring Friends!</h2>
                <p className="text-muted-foreground text-lg">
                    When someone books a move using your code, you both get a $25 credit. It's a win-win!
                </p>
                <div className="flex items-center space-x-2 pt-4">
                    <Input readOnly value={referralCode} className="text-lg font-mono tracking-wider bg-background/50 flex-grow" />
                    <Button size="icon" variant="ghost" onClick={handleCopyCode} className="h-12 w-12 bg-background/50 hover:bg-background/80">
                        <Copy className="h-5 w-5" />
                    </Button>
                </div>
                 <div className="flex items-center space-x-4 pt-2">
                    <Button size="lg" className="flex-1" onClick={handleCopyCode}>
                        <Copy className="mr-2 h-4 w-4" /> Copy Code
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1">
                        <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
                {/* QR Code Placeholder */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                     <svg width="180" height="180" viewBox="0 0 100 100">
                        <path d="M0 0h30v30H0z M70 0h30v30H70z M0 70h30v30H0z M10 10h10v10H10z M80 10h10v10H80z M10 80h10v10H10z M40 0h10v10H40z M60 0v10h-10V0z M0 40h10v10H0z M0 60v-10h10v10z M40 100h10v-10H40z M60 100v-10h-10v10z M100 40h-10v10h10z M100 60h-10v-10h10z M40 40h30v30H40z M50 50h10v10H50z M70 70v30h30V70h-10v10H80v10H70z M80 80h10v10H80z" fill="#0a0e1a"/>
                        <path d="M40 20h10v10H40z M20 40h10v10H20z M40 70h10v10H40z M70 40h10v10H70z" fill="#00ff99" />
                    </svg>
                </div>
            </div>
        </CardContent>
      </Card>

      {/* Rewards Progress Tracker */}
      <Card>
        <CardHeader>
            <CardTitle>Your Reward Progress</CardTitle>
            <CardDescription>You've successfully referred {totalReferrals} people! You are on your way to earning more rewards.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-6">
                <Progress value={(totalReferrals / 10) * 100} className="h-4"/>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {rewardTiers.map(tier => (
                        <div key={tier.count} className={`p-4 rounded-lg border-2 ${tier.achieved ? 'border-primary bg-primary/10' : 'border-dashed border-muted-foreground/30'}`}>
                            <Award className={`mx-auto h-8 w-8 mb-2 ${tier.achieved ? 'text-primary' : 'text-muted-foreground'}`} />
                            <p className="font-bold">{tier.reward}</p>
                            <p className="text-sm text-muted-foreground">{tier.count} {tier.count > 1 ? 'Referrals' : 'Referral'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </CardContent>
      </Card>
      
      {/* Share & History */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Share Options */}
        <div className="md:col-span-1 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Share Your Link</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-3">
                    <Button variant="outline" size="lg"><MessageSquare className="mr-2 h-5 w-5" /> Share via SMS</Button>
                    <Button variant="outline" size="lg"><Mail className="mr-2 h-5 w-5" /> Share via Email</Button>
                    <Button variant="outline" size="lg"><Link2 className="mr-2 h-5 w-5" /> Copy Link</Button>
                </CardContent>
            </Card>

            {/* FAQs */}
            <Card>
                <CardHeader>
                    <CardTitle>Common Questions</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How does it work?</AccordionTrigger>
                            <AccordionContent>
                                Share your unique code. When a friend signs up and books a move, you both get a $25 credit applied to your account.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>When do I get my reward?</AccordionTrigger>
                            <AccordionContent>
                                Your reward is credited to your account after your friend's move is successfully completed.
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3" className="border-b-0">
                            <AccordionTrigger>Is there a limit?</AccordionTrigger>
                            <AccordionContent>
                                No limit! The more friends you refer, the more rewards you can earn. Check the progress tracker for special milestone bonuses.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
        
        {/* Referral History */}
        <div className="md:col-span-2">
            <Card className="h-full">
                <CardHeader>
                    <CardTitle>Referral History</CardTitle>
                    <CardDescription>Track the status of everyone you've referred.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Friend</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Reward</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {referralHistory.map(ref => (
                                <TableRow key={ref.name}>
                                    <TableCell className="font-medium">{ref.name}</TableCell>
                                    <TableCell>{getStatusBadge(ref.status)}</TableCell>
                                    <TableCell>{ref.date}</TableCell>
                                    <TableCell className="text-right font-semibold">{ref.reward}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
