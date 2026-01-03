import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToRewards = () => {
    document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-32 h-32 border border-primary/30 rounded-lg rotate-45 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 border border-secondary/30 rounded-full animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute bottom-32 left-1/4 w-16 h-16 border border-accent/30 rotate-12 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute bottom-40 right-1/3 w-20 h-20 border border-primary/20 rounded-lg rotate-[-20deg] animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Zap className="w-4 h-4 text-neon-yellow" />
          <span className="text-sm font-medium text-muted-foreground">
            Limited Time Offer • 500+ Players Online
          </span>
        </div>

        {/* Main heading */}
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-foreground">Get </span>
          <span className="gradient-text">Free Fire</span>
          <br />
          <span className="text-foreground">Rewards & </span>
          <span className="text-secondary text-glow-cyan">Exclusive Items</span>
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Unlock premium diamonds, legendary skins, elite passes, and exclusive emotes. 
          No password required – 100% secure and instant delivery!
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button 
            variant="gaming" 
            size="xl"
            onClick={scrollToRewards}
            className="group"
          >
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            Get Rewards Now
          </Button>
          <Button 
            variant="glass" 
            size="xl"
            onClick={scrollToHowItWorks}
            className="group"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            How It Works
          </Button>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-4 md:p-6">
            <div className="text-2xl md:text-4xl font-heading font-bold text-primary text-glow-red">50K+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Happy Players</div>
          </div>
          <div className="glass-card p-4 md:p-6">
            <div className="text-2xl md:text-4xl font-heading font-bold text-secondary text-glow-cyan">1M+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Rewards Sent</div>
          </div>
          <div className="glass-card p-4 md:p-6">
            <div className="text-2xl md:text-4xl font-heading font-bold text-accent text-glow-purple">24/7</div>
            <div className="text-xs md:text-sm text-muted-foreground">Active Support</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
