import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface RewardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
  delay?: number;
}

const RewardCard = ({ title, description, icon, gradient, glowColor, delay = 0 }: RewardCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div 
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: gradient }}
      />
      
      {/* Card */}
      <div 
        className={`
          relative glass-card p-6 md:p-8 rounded-2xl transition-all duration-500
          border-2 border-transparent
          ${isHovered ? 'transform -translate-y-2' : ''}
        `}
        style={{
          borderColor: isHovered ? glowColor : 'transparent',
          boxShadow: isHovered ? `0 0 30px ${glowColor}40, 0 20px 40px rgba(0,0,0,0.3)` : 'none',
        }}
      >
        {/* Sparkle effects */}
        {isHovered && (
          <>
            <Sparkles 
              className="absolute top-2 right-2 w-4 h-4 animate-sparkle" 
              style={{ color: glowColor }}
            />
            <Sparkles 
              className="absolute bottom-4 left-4 w-3 h-3 animate-sparkle" 
              style={{ color: glowColor, animationDelay: '0.3s' }}
            />
          </>
        )}

        {/* Icon container */}
        <div 
          className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
          style={{ 
            background: gradient,
            boxShadow: isHovered ? `0 0 40px ${glowColor}60` : `0 0 20px ${glowColor}30`,
          }}
        >
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-foreground group-hover:text-glow-red transition-all">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 text-sm md:text-base">
          {description}
        </p>

        {/* CTA */}
        <Button 
          variant="outline" 
          className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
        >
          Claim Now
        </Button>
      </div>
    </div>
  );
};

export default RewardCard;
