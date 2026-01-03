import { useEffect, useState } from "react";
import { X, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RewardPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const RewardPopup = ({ isOpen, onClose }: RewardPopupProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    if (isOpen) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 0.5,
      }));
      setParticles(newParticles);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="relative glass-card p-8 md:p-12 max-w-md w-full rounded-2xl neon-border-red animate-scale-in overflow-hidden">
        {/* Confetti particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: ['hsl(0 100% 60%)', 'hsl(185 100% 50%)', 'hsl(280 100% 60%)', 'hsl(45 100% 55%)'][particle.id % 4],
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="text-center relative z-10">
          {/* Icon */}
          <div className="relative inline-flex mb-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
              <Gift className="w-12 h-12 text-white" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-neon-yellow animate-sparkle" />
            <Sparkles className="absolute -bottom-1 -left-1 w-6 h-6 text-secondary animate-sparkle" style={{ animationDelay: '0.3s' }} />
          </div>

          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
            🎉 Congratulations!
          </h3>
          <p className="text-muted-foreground mb-6">
            You're eligible for exclusive rewards! Complete the verification to claim your prize.
          </p>

          <div className="glass-card p-4 mb-6 border border-primary/30">
            <p className="text-sm text-primary font-heading uppercase tracking-wider mb-1">
              Your Reward
            </p>
            <p className="text-xl font-bold text-foreground">
              500 Diamonds + Elite Pass
            </p>
          </div>

          <Button variant="gaming" size="xl" className="w-full" onClick={onClose}>
            Claim Now
          </Button>

          <p className="text-xs text-muted-foreground mt-4">
            Limited time offer. Complete verification within 10 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardPopup;
