'use client';

import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { SendHorizontal, User, ArrowLeft, Mail, Phone, MessageSquare, Bot, Paperclip } from 'lucide-react';
import type { Communication } from '../operations/mock-data';

interface CommunicationViewProps {
  communications: Communication[];
}

const getIcon = (type: Communication['type']) => {
    switch(type) {
        case 'Email': return <Mail className="h-4 w-4" />;
        case 'Call': return <Phone className="h-4 w-4" />;
        case 'SMS': return <MessageSquare className="h-4 w-4" />;
        case 'System': return <Bot className="h-4 w-4" />;
        case 'Internal Note': return <Bot className="h-4 w-4" />;
    }
}

export function CommunicationView({ communications }: CommunicationViewProps) {
  const [selectedConvo, setSelectedConvo] = useState(communications[0]);
  const [newMessage, setNewMessage] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);
  const [view, setView] = useState<'list' | 'chat'>('list');

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    
    if (window.innerWidth >= 768) {
        setView('chat');
    }

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const scrollToBottom = () => {
    setTimeout(() => {
        const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }, 100);
  };

  const handleSelectConvo = (convo: Communication) => {
    setSelectedConvo(convo);
    if (isMobile) {
      setView('chat');
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedConvo]);

  return (
    <Card className="h-[calc(100vh-10rem)] w-full flex rounded-lg shadow-lg overflow-hidden">
      {/* Left Pane: Conversations List */}
      {(!isMobile || view === 'list') && (
        <div className="w-full md:w-1/3 border-r bg-muted/50 flex flex-col">
            <div className="p-4 border-b">
                <h2 className="text-xl font-bold">All Communications</h2>
            </div>
            <ScrollArea className="flex-1">
                {communications.map((convo) => (
                    <button
                        key={convo.id}
                        onClick={() => handleSelectConvo(convo)}
                        className={cn(
                            'flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-accent',
                            selectedConvo.id === convo.id && 'bg-accent',
                            !convo.isRead && 'bg-primary/10'
                        )}
                    >
                        <Avatar className="h-10 w-10 border">
                            <AvatarImage src={convo.avatarUrl} alt={convo.participantName} data-ai-hint="person portrait" />
                            <AvatarFallback>{convo.participantName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                            <p className="font-semibold truncate">{convo.participantName}</p>
                            <p className="text-sm font-medium text-muted-foreground truncate flex items-center gap-2">{getIcon(convo.type)} {convo.subject}</p>
                            <p className="text-xs text-muted-foreground truncate">{convo.lastMessage}</p>
                        </div>
                        <span className="text-xs text-muted-foreground flex-shrink-0">{convo.timestamp}</span>
                    </button>
                ))}
            </ScrollArea>
        </div>
      )}

      {/* Right Pane: Active Chat/Thread */}
      {(!isMobile || view === 'chat') && (
        <div className="w-full md:w-2/3 flex flex-col bg-background">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b">
                {isMobile && (
                    <Button variant="ghost" size="icon" className="mr-2" onClick={() => setView('list')}>
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                )}
                <Avatar className="h-10 w-10 border">
                    <AvatarImage src={selectedConvo.avatarUrl} alt={selectedConvo.participantName} data-ai-hint="person portrait" />
                    <AvatarFallback>{selectedConvo.participantName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                     <h3 className="text-lg font-semibold">{selectedConvo.participantName}</h3>
                     <p className="text-sm text-muted-foreground">{selectedConvo.subject}</p>
                </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
                <div className="flex flex-col gap-4">
                    {selectedConvo.thread.map((msg, index) => (
                    <div
                        key={index}
                        className={cn(
                        'flex items-end gap-2 max-w-[85%]',
                        msg.sender.toLowerCase() !== selectedConvo.participantName.toLowerCase() ? 'self-end flex-row-reverse' : 'self-start'
                        )}
                    >
                        <Avatar className="h-8 w-8 border">
                            <AvatarImage src={msg.sender.toLowerCase() !== selectedConvo.participantName.toLowerCase() ? 'https://placehold.co/100x100.png' : selectedConvo.avatarUrl} alt={msg.sender} data-ai-hint="person portrait"/>
                            <AvatarFallback><User /></AvatarFallback>
                        </Avatar>
                        <div
                            className={cn(
                                'rounded-lg px-4 py-2',
                                msg.sender.toLowerCase() !== selectedConvo.participantName.toLowerCase()
                                ? 'bg-primary text-primary-foreground rounded-br-none'
                                : 'bg-muted rounded-bl-none'
                            )}
                        >
                            <p className="text-sm font-bold">{msg.sender}</p>
                            <p className="text-sm">{msg.message}</p>
                            <p className="text-xs text-right mt-1 opacity-70">{msg.time}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t bg-muted/50">
                <form className="flex items-center gap-2">
                    <Button type="button" variant="ghost" size="icon">
                        <Paperclip className="h-5 w-5" />
                        <span className="sr-only">Attach file</span>
                    </Button>
                    <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder={`Reply to ${selectedConvo.participantName}...`}
                        className="flex-1"
                        autoComplete="off"
                    />
                    <Button type="submit" size="icon">
                        <SendHorizontal className="h-5 w-5" />
                    </Button>
                </form>
            </div>
        </div>
      )}
    </Card>
  );
}
