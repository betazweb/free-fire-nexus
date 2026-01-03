import { useState, useEffect } from "react";
import { CheckCircle2, Users, ShieldCheck, Clock } from "lucide-react";

const names = [
  "Player_X99", "DarkKnight", "FireStorm", "ProGamer", "NightHawk",
  "ShadowBlade", "CyberWolf", "PhoenixRise", "ThunderBolt", "IronFist",
  "GhostRider", "NeonTiger", "StormBreaker", "VenomStrike", "BlazeMaster"
];

const rewards = [
  "500 Diamonds", "1000 Diamonds", "Character Skin", "Elite Pass", 
  "Exclusive Emote", "Legendary Bundle", "2000 Diamonds"
];

const countries = ["🇮🇳", "🇧🇷", "🇮🇩", "🇹🇭", "🇻🇳", "🇵🇭", "🇲🇽", "🇺🇸"];

interface Activity {
  id: number;
  name: string;
  reward: string;
  country: string;
  time: string;
}

const LiveActivitySection = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Generate initial activities
    const initialActivities = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      name: names[Math.floor(Math.random() * names.length)],
      reward: rewards[Math.floor(Math.random() * rewards.length)],
      country: countries[Math.floor(Math.random() * countries.length)],
      time: `${Math.floor(Math.random() * 5) + 1}m ago`,
    }));
    setActivities(initialActivities);

    // Add new activity every few seconds
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        reward: rewards[Math.floor(Math.random() * rewards.length)],
        country: countries[Math.floor(Math.random() * countries.length)],
        time: "Just now",
      };
      
      setActivities((prev) => [newActivity, ...prev.slice(0, 7)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(0 100% 60%), transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Live feed */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-heading text-sm uppercase tracking-wider text-green-500">
                Live Activity
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Players Receiving <span className="gradient-text">Rewards</span> Right Now
            </h2>

            {/* Activity list */}
            <div className="space-y-3 max-h-[400px] overflow-hidden">
              {activities.map((activity, index) => (
                <div
                  key={activity.id}
                  className={`
                    glass-card p-4 flex items-center justify-between
                    transition-all duration-500 animate-slide-up
                    ${index === 0 ? 'neon-border-red' : ''}
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{activity.country}</span>
                    <div>
                      <span className="font-semibold text-foreground">{activity.name}</span>
                      <span className="text-muted-foreground"> received </span>
                      <span className="text-primary font-semibold">{activity.reward}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Trust badges */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              Why <span className="text-secondary text-glow-cyan">Trust</span> Us?
            </h3>

            <div className="grid gap-4">
              <div className="glass-card p-6 flex items-start gap-4 group hover:neon-border-cyan transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">50,000+ Happy Players</h4>
                  <p className="text-muted-foreground text-sm">Trusted by thousands of players worldwide</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4 group hover:neon-border-purple transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">100% Secure System</h4>
                  <p className="text-muted-foreground text-sm">No password required, your account stays safe</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4 group hover:neon-border-red transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">Verified & Legitimate</h4>
                  <p className="text-muted-foreground text-sm">All rewards are genuine and officially sourced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivitySection;
