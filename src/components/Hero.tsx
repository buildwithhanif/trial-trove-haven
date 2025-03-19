
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
            Meet the future of AI conversation
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Conversation designed for <span className="text-primary">human brilliance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Experience the world's most advanced conversational AI platform. Build, create, and explore with unlimited possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/trial">
              <Button size="lg" className="rounded-full px-6 py-6 text-base">
                Try for free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="rounded-full px-6 py-6 text-base">
                Sign in with Google
              </Button>
            </Link>
          </div>

          <div className="mt-20 md:mt-28 relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden animate-blur-in" style={{ animationDelay: "0.6s" }}>
            {/* App screenshot with glass effect */}
            <div className="aspect-[16/9] bg-gradient-to-br from-soft-blue to-white glass rounded-xl p-6 md:p-8 shadow-lg border border-white/30">
              <div className="w-full h-full bg-white/30 rounded-lg flex items-center justify-center">
                <div className="w-3/4 h-4/5 bg-white/60 rounded-lg border border-white/50 flex items-center justify-center">
                  <p className="text-primary font-medium">AI Conversation Interface</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
