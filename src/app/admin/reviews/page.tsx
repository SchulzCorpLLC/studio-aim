'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Star } from 'lucide-react';
import type { Review } from '@/components/admin/operations/mock-data';
import { ReviewsTable } from '@/components/admin/crm/reviews-table';

export default function AdminReviewsPage() {
    const [reviews] = useState<Review[]>([]);

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Reviews & Feedback</h1>
                    <p className="text-muted-foreground">Monitor and manage customer feedback and ratings.</p>
                </div>
            </header>
            
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search reviews by customer or job ID..." className="pl-10 h-12 text-base" />
                </div>
                <div className="flex gap-4">
                    <Select>
                        <SelectTrigger className="w-full md:w-[180px] h-12 text-base">
                            <SelectValue placeholder="Filter by rating" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Ratings</SelectItem>
                            <SelectItem value="5"><div className="flex items-center">5 <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400"/></div></SelectItem>
                            <SelectItem value="4"><div className="flex items-center">4 <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400"/></div></SelectItem>
                            <SelectItem value="3"><div className="flex items-center">3 <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400"/></div></SelectItem>
                            <SelectItem value="2"><div className="flex items-center">2 <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400"/></div></SelectItem>
                            <SelectItem value="1"><div className="flex items-center">1 <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400"/></div></SelectItem>
                        </SelectContent>
                    </Select>
                     <Select>
                        <SelectTrigger className="w-full md:w-[220px] h-12 text-base">
                            <SelectValue placeholder="Filter by response status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="responded">Responded</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            
            <ReviewsTable reviews={reviews} />
        </div>
    );
}
