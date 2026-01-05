import { useState, useEffect } from "react";
import { Copy, Check, Clock, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface RedeemCode {
  id: string;
  code: string;
  value: string;
  expiresIn: number; // seconds
}

const redeemCodes: RedeemCode[] = [
  { id: "1", code: "GPLAY7K9M2X4N8P3", value: "$5 Google Play Credit", expiresIn: 86400 },
  { id: "2", code: "GPNX4R8T2W6Y9Q1L", value: "$10 Google Play Credit", expiresIn: 43200 },
  { id: "3", code: "GP3H7J9K2M5N8R4T", value: "$15 Google Play Credit", expiresIn: 21600 },
  { id: "4", code: "GPQW2E4R6T8Y0U1I", value: "$25 Google Play Credit", expiresIn: 14400 },
  { id: "5", code: "GP5A7S9D1F3G5H7J", value: "$10 Google Play Credit", expiresIn: 7200 },
  { id: "6", code: "GPZX2C4V6B8N0M1K", value: "$5 Google Play Credit", expiresIn: 3600 },
];

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

const formatCode = (code: string) => {
  // Format as XXXX-XXXX-XXXX-XXXX
  return code.match(/.{1,4}/g)?.join("-") || code;
};

const RedeemCodeCard = ({ code, value, expiresIn }: RedeemCode) => {
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

  return (
    <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
      {/* Value label */}
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="w-4 h-4 text-secondary" />
        <span className="text-sm font-medium text-secondary">{value}</span>
      </div>

      {/* Code display */}
      <div className="bg-background/50 rounded-xl p-4 mb-4 border border-border/50">
        <code className="text-lg md:text-xl font-mono font-bold text-foreground tracking-wider">
          {formatCode(code)}
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
          <span className="inline-block text-secondary font-heading text-sm tracking-widest uppercase mb-4">
            Today's Codes
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            <span className="gradient-text">Google Play</span> Redeem Codes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Copy these working Google Play codes and redeem them in the Play Store. 
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/30">
            <span className="text-sm text-muted-foreground">
              🔄 New Google Play codes added every 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedeemCodeSection;
