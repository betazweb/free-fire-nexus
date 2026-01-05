import { Gift, User, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Select Reward",
    description: "Choose Google Play code or Diamond package",
    color: "primary",
  },
  {
    icon: <User className="w-8 h-8" />,
    title: "Enter Details",
    description: "Input your Player ID or Email address",
    color: "accent",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Verify & Claim",
    description: "Complete verification and receive rewards",
    color: "secondary",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-heading text-sm tracking-widest uppercase mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get your free rewards in just 3 easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Connecting line - desktop only */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary" />

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step card */}
                <div className="glass-card p-8 rounded-2xl border border-border/50 text-center hover:border-primary/50 transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground z-10">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div 
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: `hsl(var(--${step.color}) / 0.1)`,
                      color: `hsl(var(--${step.color}))`
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Arrow - mobile only */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
