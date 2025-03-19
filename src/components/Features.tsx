
import React from 'react';
import { Sparkles, Zap, Shield, MessagesSquare } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="p-6 glass rounded-xl animate-fade-up"
      style={{ animationDelay: delay }}
    >
      <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4 inline-block animate-fade-in">
            Unmatched Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Designed for the way you think
          </h2>
          <p className="text-lg text-foreground/80 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Our platform is built to enhance your natural creativity and productivity, not replace it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Sparkles size={24} />}
            title="Superior Intelligence"
            description="Advanced AI models that understand context and nuance in a way that feels natural."
            delay="0.2s"
          />
          <FeatureCard 
            icon={<Zap size={24} />}
            title="Lightning Fast"
            description="Get responses instantly with our optimized infrastructure and low-latency design."
            delay="0.3s"
          />
          <FeatureCard 
            icon={<Shield size={24} />}
            title="Secure & Private"
            description="Your conversations and data are encrypted and never used to train our models."
            delay="0.4s"
          />
          <FeatureCard 
            icon={<MessagesSquare size={24} />}
            title="Unlimited Prompts"
            description="Premium members enjoy unlimited conversations without any restrictions."
            delay="0.5s"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
