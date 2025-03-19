
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrialContent: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [conversation, setConversation] = useState<{role: string, content: string}[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant. Try asking me something to see how I can help.'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    // Add user message
    setConversation(prev => [...prev, { role: 'user', content: prompt }]);
    
    // Simulate loading
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      setConversation(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: "This is just a demo. In the premium version, I would give you a thoughtful and detailed response. Upgrade to premium for unlimited access to my capabilities!"
        }
      ]);
      setIsLoading(false);
      setPrompt('');
    }, 1500);
  };
  
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4 inline-block animate-fade-in">
              Free Trial
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
              Experience the power of GeniusAI
            </h1>
            <p className="text-lg text-foreground/80 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Try our AI assistant with limited capabilities. Upgrade for unlimited access.
            </p>
          </div>

          <div className="glass rounded-xl overflow-hidden mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="p-4 bg-primary/5 border-b border-border/50">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="mx-auto text-sm font-medium text-foreground/70">AI Chat Demo</div>
              </div>
            </div>
            
            <div className="p-6 h-[400px] flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
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
                {isLoading && (
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
              
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading || !prompt.trim()}>
                  Send
                </Button>
              </form>
            </div>
          </div>
          
          <div className="glass rounded-xl p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Ready for unlimited access?</h2>
              <p className="text-foreground/70">Upgrade to our premium plan and unlock the full potential</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-medium mb-4">Free Trial</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-foreground/70">
                    <Check size={16} className="text-green-500 mr-2" />
                    Limited conversations
                  </li>
                  <li className="flex items-center text-sm text-foreground/70">
                    <Check size={16} className="text-green-500 mr-2" />
                    Basic capabilities
                  </li>
                  <li className="flex items-center text-sm text-foreground/70">
                    <Check size={16} className="text-green-500 mr-2" />
                    Standard response time
                  </li>
                </ul>
                <p className="font-medium">Free</p>
              </div>
              
              <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
                <h3 className="font-medium mb-4">Premium Access</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-foreground/70">
                    <Check size={16} className="text-green-500 mr-2" />
                    <strong>Unlimited</strong> conversations
                  </li>
                  <li className="flex items-center text-sm text-foreground/70">
                    <Check size={16} className="text-green-500 mr-2" />
                    Advanced capabilities
                  </li>
                  <li className="flex items-center text-sm text-foreground/70">
                    <Check size={16} className="text-green-500 mr-2" />
                    Priority response time
                  </li>
                  <li className="flex items-center text-sm text-foreground/70">
                    <Check size={16} className="text-green-500 mr-2" />
                    Custom instructions
                  </li>
                  <li className="flex items-center text-sm text-foreground/70">
                    <Check size={16} className="text-green-500 mr-2" />
                    Advanced data analysis
                  </li>
                </ul>
                <a href="https://example.com/payment" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Get Unlimited Prompts <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-foreground/70 mb-4">
                Already have premium access? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialContent;
