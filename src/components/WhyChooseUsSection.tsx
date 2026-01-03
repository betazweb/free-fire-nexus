import { Zap, Shield, Smartphone, KeyRound } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rewards are delivered within minutes to your account. No waiting, instant gratification.",
    color: "neon-yellow",
  },
  {
    icon: Shield,
    title: "Secure System",
    description: "Your data is protected with enterprise-grade security. We never store sensitive information.",
    color: "secondary",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Access our platform from any device. Optimized for mobile gaming on the go.",
    color: "accent",
  },
  {
    icon: KeyRound,
    title: "No Password Required",
    description: "We only need your Player ID. Your login credentials stay private and secure.",
    color: "primary",
  },
];

const WhyChooseUsSection = () => {
  const getColorStyles = (color: string) => {
    switch (color) {
      case "primary":
        return { 
          iconBg: "bg-primary/20", 
          iconColor: "text-primary",
          borderHover: "group-hover:border-primary/50",
          glow: "group-hover:shadow-[0_0_30px_hsl(0_100%_60%_/_0.3)]"
        };
      case "secondary":
        return { 
          iconBg: "bg-secondary/20", 
          iconColor: "text-secondary",
          borderHover: "group-hover:border-secondary/50",
          glow: "group-hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.3)]"
        };
      case "accent":
        return { 
          iconBg: "bg-accent/20", 
          iconColor: "text-accent",
          borderHover: "group-hover:border-accent/50",
          glow: "group-hover:shadow-[0_0_30px_hsl(280_100%_60%_/_0.3)]"
        };
      case "neon-yellow":
        return { 
          iconBg: "bg-neon-yellow/20", 
          iconColor: "text-neon-yellow",
          borderHover: "group-hover:border-neon-yellow/50",
          glow: "group-hover:shadow-[0_0_30px_hsl(45_100%_55%_/_0.3)]"
        };
      default:
        return { iconBg: "bg-primary/20", iconColor: "text-primary", borderHover: "", glow: "" };
    }
  };

  return (
    <section className="py-20 md:py-32 relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(0 100% 60%) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(280 100% 60%) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-heading text-sm tracking-widest uppercase mb-4">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Why <span className="text-accent text-glow-purple">Choose</span> Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide the best experience for Free Fire players looking for premium rewards.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const styles = getColorStyles(feature.color);

            return (
              <div
                key={feature.title}
                className={`
                  group glass-card p-8 rounded-2xl border border-transparent
                  transition-all duration-500 hover:-translate-y-1
                  ${styles.borderHover} ${styles.glow}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div 
                    className={`
                      w-14 h-14 rounded-xl flex items-center justify-center shrink-0
                      ${styles.iconBg} transition-transform duration-300 group-hover:scale-110
                    `}
                  >
                    <Icon className={`w-7 h-7 ${styles.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
