import { CrewSidebar } from '@/components/crew/crew-sidebar';
import { CrewBottomNav } from '@/components/crew/crew-bottom-nav';

export function CrewLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr]">
            <div className="hidden md:block">
                <CrewSidebar />
            </div>
            <div className="flex flex-col">
                <main className="flex-1 p-4 pb-24 md:p-6">
                    {children}
                </main>
                <CrewBottomNav />
            </div>
        </div>
    )
}
