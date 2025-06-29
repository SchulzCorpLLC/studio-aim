'use client';
import type { Review } from '../operations/mock-data';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Star, MessageSquare, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';


interface ReviewsTableProps {
    reviews: Review[];
}

const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={cn("h-4 w-4", i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground")} />
        ))}
    </div>
);


export function ReviewsTable({ reviews }: ReviewsTableProps) {
    return (
        <Card className="hover-none">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Review</TableHead>
                            <TableHead>Job ID</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reviews.map(review => (
                            <TableRow key={review.id}>
                                <TableCell>
                                    <div className="font-medium">{review.customerName}</div>
                                    <div className="text-xs text-muted-foreground">{review.date}</div>
                                </TableCell>
                                <TableCell>
                                    <RatingStars rating={review.rating} />
                                </TableCell>
                                <TableCell>
                                    <p className="max-w-xs truncate">{review.reviewText}</p>
                                </TableCell>
                                <TableCell className="font-mono text-xs">{review.jobId}</TableCell>
                                <TableCell>
                                    <Badge variant={review.responseStatus === 'Responded' ? 'default' : 'secondary'}>
                                        {review.responseStatus}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View Full Review</DropdownMenuItem>
                                            <DropdownMenuItem><MessageSquare className="mr-2" />Reply</DropdownMenuItem>
                                            <DropdownMenuItem><CheckCircle className="mr-2" />Mark as Resolved</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}
