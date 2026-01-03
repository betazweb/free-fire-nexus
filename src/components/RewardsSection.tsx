import { Diamond, User, Smile, Crown } from "lucide-react";
import RewardCard from "./RewardCard";
import CountdownTimer from "./CountdownTimer";

const rewards = [
  {
    title: "Diamonds",
    description: "Get premium diamonds to unlock exclusive items, characters, and more in-game content.",
    icon: <Diamond className="w-10 h-10 md:w-12 md:h-12 text-white" />,
    gradient: "linear-gradient(135deg, hsl(0 100% 60%), hsl(330 100% 50%))",
    glowColor: "hsl(0 100% 60%)",
  },
  {
    title: "Character Skins",
    description: "Unlock legendary character skins and stand out in every match with unique styles.",
    icon: <User className="w-10 h-10 md:w-12 md:h-12 text-white" />,
    gradient: "linear-gradient(135deg, hsl(185 100% 50%), hsl(200 100% 60%))",
    glowColor: "hsl(185 100% 50%)",
  },
  {
    title: "Exclusive Emotes",
    description: "Express yourself with rare and exclusive emotes that make you unforgettable.",
    icon: <Smile className="w-10 h-10 md:w-12 md:h-12 text-white" />,
    gradient: "linear-gradient(135deg, hsl(280 100% 60%), hsl(320 100% 50%))",
    glowColor: "hsl(280 100% 60%)",
  },
  {
    title: "Elite Pass",
    description: "Access elite pass rewards and unlock the most premium content available.",
    icon: <Crown className="w-10 h-10 md:w-12 md:h-12 text-white" />,
    gradient: "linear-gradient(135deg, hsl(45 100% 55%), hsl(30 100% 50%))",
    glowColor: "hsl(45 100% 55%)",
  },
];

const RewardsSection = () => {
  return (
    <section id="rewards" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-heading text-sm tracking-widest uppercase mb-4">
            Premium Rewards
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Choose Your <span className="gradient-text">Reward</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Select from our exclusive collection of premium items and get them delivered instantly to your account.
          </p>
        </div>

        {/* Countdown timer */}
        <CountdownTimer />

        {/* Rewards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {rewards.map((reward, index) => (
            <RewardCard
              key={reward.title}
              {...reward}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
