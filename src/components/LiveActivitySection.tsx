import { useState, useEffect } from "react";
import { Sparkles, Gift, Shield, Users } from "lucide-react";

const activities = [
  "User***82 claimed $10 Google Play Code",
  "New Google Play Code unlocked!",
  "Player***15 claimed 500 Free Fire Diamonds",
  "User***47 redeemed $25 Google Play Credit",
  "Player***93 received 300 Diamonds",
  "User***28 claimed $5 Google Play Code",
  "New Diamond Bonus available!",
  "Player***61 claimed 100 Diamonds",
];

const stats = [
  { icon: <Users className="w-5 h-5" />, value: "50,000+", label: "Active Users" },
  { icon: <Gift className="w-5 h-5" />, value: "100K+", label: "Codes Claimed" },
  { icon: <Sparkles className="w-5 h-5" />, value: "1M+", label: "Diamonds Given" },
  { icon: <Shield className="w-5 h-5" />, value: "100%", label: "Secure" },
];

const LiveActivitySection = () => {
  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Live activity ticker */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="glass-card rounded-2xl p-4 border border-primary/30">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">LIVE</span>
              </div>
              <div className="flex-1 overflow-hidden">
                <div
                  className="transition-all duration-500 ease-in-out"
                  key={currentActivity}
                >
                  <p className="text-foreground font-medium animate-fade-in">
                    {activities[currentActivity]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-2xl border border-border/50 text-center hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveActivitySection;
