import { useState } from "react";
import { Sparkles, ArrowRight, Diamond } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface DiamondPackage {
  id: string;
  amount: number;
  bonus: string;
  popular?: boolean;
}

const diamondPackages: DiamondPackage[] = [
  { id: "1", amount: 100, bonus: "+10 Bonus" },
  { id: "2", amount: 300, bonus: "+50 Bonus", popular: true },
  { id: "3", amount: 500, bonus: "+100 Bonus" },
  { id: "4", amount: 1000, bonus: "+250 Bonus" },
];

const DiamondCard = ({ amount, bonus, popular }: DiamondPackage) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClaim = () => {
    toast.info("Redirecting to verification...");
    // Scroll to how it works section
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`relative glass-card p-6 rounded-2xl border transition-all duration-300 group cursor-pointer
        ${popular 
          ? "border-accent/50 shadow-lg shadow-accent/20" 
          : "border-primary/20 hover:border-primary/50"
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClaim}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent rounded-full text-xs font-bold text-accent-foreground">
          MOST POPULAR
        </div>
      )}

      {/* Diamond icon with animation */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className={`absolute inset-0 bg-accent/20 rounded-full blur-xl transition-all duration-300 ${isHovered ? "scale-150 opacity-100" : "scale-100 opacity-50"}`} />
        <div className="relative w-full h-full flex items-center justify-center">
          <Diamond className={`w-12 h-12 text-accent transition-transform duration-300 ${isHovered ? "scale-110 rotate-12" : ""}`} />
          {/* Sparkles */}
          <Sparkles className={`absolute -top-1 -right-1 w-4 h-4 text-accent transition-all duration-300 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
          <Sparkles className={`absolute -bottom-1 -left-1 w-3 h-3 text-primary transition-all duration-300 delay-100 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
        </div>
      </div>

      {/* Amount */}
      <div className="text-center mb-4">
        <div className="text-4xl font-heading font-bold text-foreground mb-1">
          {amount}
        </div>
        <div className="text-lg text-accent font-medium">{bonus}</div>
        <div className="text-sm text-muted-foreground mt-1">Diamonds</div>
      </div>

      {/* Claim button */}
      <Button
        variant={popular ? "cyber" : "gaming"}
        className="w-full group/btn"
      >
        Claim Now
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </div>
  );
};

const FreeDiamondsSection = () => {
  return (
    <section id="free-diamonds" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-heading text-sm tracking-widest uppercase mb-4">
            Limited Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Claim <span className="text-accent">Free Diamonds</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Select your diamond package and complete the simple verification to receive 
            free diamonds directly to your Free Fire account.
          </p>
        </div>

        {/* Diamond packages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {diamondPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DiamondCard {...pkg} />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
          {[
            { icon: "🔒", text: "Secure Process" },
            { icon: "⚡", text: "Instant Delivery" },
            { icon: "✅", text: "100% Working" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeDiamondsSection;
