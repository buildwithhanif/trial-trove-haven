
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signOut } from '@/lib/supabase';
import { LogOut, Send, Settings, User } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, isLoading, isPremium } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [conversation, setConversation] = useState<{role: string, content: string}[]>([
    {
      role: 'assistant',
      content: 'Welcome to your premium dashboard! As a premium member, you have unlimited access to all features. How can I assist you today?'
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    // Add user message
    setConversation(prev => [...prev, { role: 'user', content: prompt }]);
    
    // Simulate AI processing
    setIsProcessing(true);
    
    // Simulate response (in a real app, this would be an API call)
    setTimeout(() => {
      setConversation(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: "Thank you for your message. As a premium member, I'm providing you with an enhanced response tailored to your needs. You have unlimited access to all our advanced features, and I'm here to assist you with any complex questions or tasks you may have."
        }
      ]);
      setIsProcessing(false);
      setPrompt('');
    }, 1500);
  };

  // If user is not logged in and we're not loading, redirect to login page
  if (!user && !isLoading) {
    return <Navigate to="/login" replace />;
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-secondary border-r border-border p-4 hidden md:block">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <User size={18} />
          </div>
          <div>
            <p className="font-medium text-sm">{user?.email?.split('@')[0] || 'User'}</p>
            <p className="text-xs text-foreground/70">Premium Member</p>
          </div>
        </div>
        
        <nav className="space-y-1 mb-8">
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-foreground/70">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
        
        <Button variant="outline" className="w-full mt-auto" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </Button>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <header className="md:hidden bg-background border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User size={16} />
            </div>
            <span className="font-medium text-sm">Premium Dashboard</span>
          </div>
          <Button size="sm" variant="ghost" onClick={handleSignOut}>
            <LogOut size={16} />
          </Button>
        </header>
        
        {/* Premium badge */}
        <div className="bg-primary/5 p-4 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Premium Member
              </div>
              <p className="text-sm text-foreground/70">
                You have unlimited access to all features
              </p>
            </div>
          </div>
        </div>
        
        {/* Chat interface */}
        <div className="flex-1 container mx-auto px-4 md:px-6 py-6 flex flex-col">
          <div className="glass rounded-xl flex-1 flex flex-col overflow-hidden animate-fade-up">
            <div className="p-4 bg-primary/5 border-b border-border/50 flex items-center justify-between">
              <h3 className="font-medium">Premium AI Assistant</h3>
              <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full">
                Online
              </span>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {conversation.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-primary text-white rounded-tr-none' 
                          : 'bg-secondary text-foreground rounded-tl-none'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isProcessing && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 bg-secondary text-foreground rounded-lg rounded-tl-none">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-foreground/30 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-foreground/30 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 rounded-full bg-foreground/30 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-4 border-t border-border">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isProcessing}
                />
                <Button type="submit" disabled={isProcessing || !prompt.trim()}>
                  <Send size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
