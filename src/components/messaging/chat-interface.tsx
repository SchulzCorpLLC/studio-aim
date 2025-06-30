'use client';

import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Paperclip, SendHorizontal, User, Mic, ArrowLeft, MessageSquare } from 'lucide-react';

// Mock data is cleared for production readiness.
// This should be replaced with data fetched from your backend.
const conversations: any[] = [];
const initialMessagesData: { [key: number]: any[] } = {};

const currentUser = 'Alex Doe'; // This should come from user session

export function ChatInterface() {
  const [selectedConversation, setSelectedConversation] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);
  const [view, setView] = useState<'list' | 'chat'>('list');

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    
    if (window.innerWidth >= 768) {
        setView('chat');
        if (conversations.length > 0 && !selectedConversation) {
          setSelectedConversation(conversations[0]);
          setMessages(initialMessagesData[conversations[0].id] || []);
        }
    }

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [selectedConversation]);

  const scrollToBottom = () => {
    setTimeout(() => {
        const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }, 100);
  };

  const handleSelectConversation = (conversation: any) => {
    setSelectedConversation(conversation);
    setMessages(initialMessagesData[conversation.id] || []);
    if (isMobile) {
      setView('chat');
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '' || !selectedConversation) return;
    const newMsg = {
      id: messages.length + 1,
      sender: currentUser,
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages(prev => [...prev, newMsg]);
    setNewMessage('');
  };
  
  useEffect(() => {
    if (messages.length) {
      scrollToBottom();
    }
  }, [messages]);

  return (
    <Card className="h-[calc(100vh-10rem)] w-full flex rounded-lg shadow-lg overflow-hidden">
      {/* Left Pane: Conversations */}
      {(!isMobile || view === 'list') && (
        <div className="w-full md:w-1/3 border-r bg-muted/50 flex flex-col">
            <div className="p-4 border-b">
                <h2 className="text-xl font-bold">Messages</h2>
            </div>
            <ScrollArea className="flex-1">
                {conversations.length > 0 ? conversations.map((convo) => (
                    <button
                        key={convo.id}
                        onClick={() => handleSelectConversation(convo)}
                        className={cn(
                            'flex w-full items-start gap-4 p-4 text-left transition-colors hover:bg-accent',
                            selectedConversation?.id === convo.id && 'bg-accent'
                        )}
                    >
                        <Avatar className="h-10 w-10 border">
                            <AvatarImage src={convo.avatar} alt={convo.name} data-ai-hint="person portrait" />
                            <AvatarFallback>{convo.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                            <p className="font-semibold truncate">{convo.name}</p>
                            <p className="text-sm text-muted-foreground truncate">{convo.lastMessage}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{convo.lastMessageTime}</span>
                    </button>
                )) : (
                  <div className="text-center py-16 text-muted-foreground">
                    <MessageSquare className="mx-auto h-12 w-12" />
                    <h3 className="text-xl font-semibold mt-4">No Messages</h3>
                    <p>Your conversations will appear here.</p>
                  </div>
                )}
            </ScrollArea>
        </div>
      )}

      {/* Right Pane: Active Chat */}
      {(!isMobile || view === 'chat') && selectedConversation && (
        <div className="w-full md:w-2/3 flex flex-col bg-background">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b">
                {isMobile && (
                    <Button variant="ghost" size="icon" className="mr-2" onClick={() => setView('list')}>
                        <ArrowLeft className="h-5 w-5" />
                        <span className="sr-only">Back to list</span>
                    </Button>
                )}
                <Avatar className="h-10 w-10 border">
                    <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{selectedConversation.name}</h3>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
                <div className="flex flex-col gap-4">
                    {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={cn(
                        'flex items-end gap-2 max-w-[75%]',
                        msg.sender === currentUser ? 'self-end flex-row-reverse' : 'self-start'
                        )}
                    >
                        <Avatar className="h-8 w-8 border">
                            <AvatarImage src={msg.sender === currentUser ? 'https://placehold.co/100x100.png' : selectedConversation.avatar} alt={msg.sender} data-ai-hint="person portrait"/>
                            <AvatarFallback><User /></AvatarFallback>
                        </Avatar>
                        <div
                        className={cn(
                            'rounded-lg px-4 py-2',
                            msg.sender === currentUser
                            ? 'bg-primary text-primary-foreground rounded-br-none'
                            : 'bg-muted rounded-bl-none'
                        )}
                        >
                        <p className="text-sm">{msg.text}</p>
                        <p className="text-xs text-right mt-1 opacity-70">{msg.time}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                autoComplete="off"
                />
                <Button type="button" variant="ghost" size="icon">
                <Mic className="h-5 w-5" />
                <span className="sr-only">Use microphone</span>
                </Button>
                <Button type="button" variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
                <span className="sr-only">Attach file</span>
                </Button>
                <Button type="submit" size="icon">
                <SendHorizontal className="h-5 w-5" />
                <span className="sr-only">Send message</span>
                </Button>
            </form>
            </div>
        </div>
      )}
      {(!isMobile || view === 'chat') && !selectedConversation && (
         <div className="w-full md:w-2/3 flex flex-col bg-background items-center justify-center text-muted-foreground p-8 text-center">
            <MessageSquare className="h-24 w-24" />
            <h3 className="text-2xl font-semibold mt-4">Select a Conversation</h3>
            <p>Choose a conversation from the list on the left to view messages.</p>
         </div>
       )}
    </Card>
  );
}
