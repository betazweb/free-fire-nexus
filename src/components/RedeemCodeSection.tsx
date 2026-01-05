import { useState, useEffect } from "react";
import { Copy, Check, Clock, Gift } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface RedeemCode {
  id: string;
  code: string;
  reward: string;
  expiresIn: number; // seconds
}

const redeemCodes: RedeemCode[] = [
  { id: "1", code: "FF10GCGXRNHY", reward: "Fire Head Hunting Parachute", expiresIn: 86400 },
  { id: "2", code: "FFXVGG8NU4YB", reward: "Custom Room Card", expiresIn: 43200 },
  { id: "3", code: "FFE4E0DIKX2D", reward: "Bonus 50 Diamonds", expiresIn: 21600 },
  { id: "4", code: "FFAC2YXE6RF2", reward: "Justice Fighter Weapon Loot Crate", expiresIn: 14400 },
  { id: "5", code: "FFA0ES11YL2D", reward: "Shirou Character Bundle", expiresIn: 7200 },
  { id: "6", code: "FFX60C2IIVYU", reward: "Winterlands Weapon Loot Crate", expiresIn: 3600 },
];

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

const RedeemCodeCard = ({ code, reward, expiresIn }: RedeemCode) => {
  const [timeLeft, setTimeLeft] = useState(expiresIn);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const maskCode = (code: string) => {
    if (code.length <= 8) return code;
    return code.slice(0, 4) + "-" + code.slice(4, 8) + "-" + code.slice(8);
  };

  return (
    <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
      {/* Reward label */}
      <div className="flex items-center gap-2 mb-4">
        <Gift className="w-4 h-4 text-accent" />
        <span className="text-sm text-muted-foreground">{reward}</span>
      </div>

      {/* Code display */}
      <div className="bg-background/50 rounded-xl p-4 mb-4 border border-border/50">
        <code className="text-xl md:text-2xl font-mono font-bold text-foreground tracking-wider">
          {maskCode(code)}
        </code>
      </div>

      {/* Timer and Copy button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-primary" />
          <span className={`font-mono ${timeLeft < 3600 ? "text-destructive" : "text-muted-foreground"}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
        <Button
          variant="gaming"
          size="sm"
          onClick={handleCopy}
          className="min-w-[100px]"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

const RedeemCodeSection = () => {
  return (
    <section id="redeem-codes" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-heading text-sm tracking-widest uppercase mb-4">
            Today's Codes
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Active <span className="gradient-text">Redeem Codes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Copy these working codes and redeem them on the official Free Fire rewards page. 
            Codes expire soon – claim them before they're gone!
          </p>
        </div>

        {/* Codes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {redeemCodes.map((code, index) => (
            <div
              key={code.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <RedeemCodeCard {...code} />
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/30">
            <span className="text-sm text-muted-foreground">
              🔄 New codes added every 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedeemCodeSection;
