import { useState, useEffect, useRef } from "react";
import { UserCheck, Gift, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Enter Player ID",
    description: "Simply enter your Free Fire player ID. No password required for security.",
    color: "primary",
    glowClass: "text-glow-red",
  },
  {
    icon: Gift,
    title: "Choose Reward",
    description: "Select your desired reward from our extensive collection of premium items.",
    color: "secondary",
    glowClass: "text-glow-cyan",
  },
  {
    icon: ShieldCheck,
    title: "Complete Verification",
    description: "Quick verification to ensure rewards go to real players. Takes seconds!",
    color: "accent",
    glowClass: "text-glow-purple",
  },
  {
    icon: Rocket,
    title: "Receive Reward",
    description: "Your reward will be delivered instantly to your account. Enjoy!",
    color: "neon-yellow",
    glowClass: "",
  },
];

const HowItWorksSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return { bg: "bg-primary", border: "border-primary", text: "text-primary" };
      case "secondary":
        return { bg: "bg-secondary", border: "border-secondary", text: "text-secondary" };
      case "accent":
        return { bg: "bg-accent", border: "border-accent", text: "text-accent" };
      case "neon-yellow":
        return { bg: "bg-neon-yellow", border: "border-neon-yellow", text: "text-neon-yellow" };
      default:
        return { bg: "bg-primary", border: "border-primary", text: "text-primary" };
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-0 w-full h-px opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(0 100% 60%), transparent)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-secondary font-heading text-sm tracking-widest uppercase mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            How It <span className="text-secondary text-glow-cyan">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get your rewards in just 4 simple steps. Fast, secure, and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);
            const isVisible = visibleSteps.includes(index);
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px">
                    <div 
                      className={`h-full transition-all duration-1000 delay-500 ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        background: `linear-gradient(90deg, ${
                          step.color === 'primary' ? 'hsl(0 100% 60%)' :
                          step.color === 'secondary' ? 'hsl(185 100% 50%)' :
                          step.color === 'accent' ? 'hsl(280 100% 60%)' :
                          'hsl(45 100% 55%)'
                        }, transparent)`,
                      }}
                    />
                  </div>
                )}

                {/* Step card */}
                <div className="text-center group">
                  {/* Step number */}
                  <div className="relative inline-flex mb-6">
                    <div 
                      className={`
                        w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center
                        glass-card border-2 ${colors.border} transition-all duration-500
                        group-hover:scale-110 group-hover:rotate-3
                      `}
                      style={{
                        boxShadow: `0 0 30px ${
                          step.color === 'primary' ? 'hsl(0 100% 60% / 0.3)' :
                          step.color === 'secondary' ? 'hsl(185 100% 50% / 0.3)' :
                          step.color === 'accent' ? 'hsl(280 100% 60% / 0.3)' :
                          'hsl(45 100% 55% / 0.3)'
                        }`,
                      }}
                    >
                      <Icon className={`w-10 h-10 md:w-12 md:h-12 ${colors.text}`} />
                    </div>
                    <span 
                      className={`
                        absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center
                        font-heading font-bold text-sm ${colors.bg} text-background
                      `}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-heading font-bold mb-3 ${step.glowClass}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
