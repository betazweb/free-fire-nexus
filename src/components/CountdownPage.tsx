import { useState, useEffect } from "react";
import { Loader2, Shield } from "lucide-react";

interface CountdownPageProps {
  isOpen: boolean;
  onComplete: () => void;
}

const CountdownPage = ({ isOpen, onComplete }: CountdownPageProps) => {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(30);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  const progress = ((30 - countdown) / 30) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col animate-fade-in">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 text-center">
        <h1 className="font-heading text-2xl text-primary">Verifying Reward</h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
        {/* Spinner and countdown */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-muted flex items-center justify-center">
            <span className="font-heading text-5xl text-primary">{countdown}</span>
          </div>
          <Loader2 className="absolute inset-0 w-32 h-32 text-primary animate-spin" />
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-sm">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Status text */}
        <div className="text-center space-y-2">
          <p className="text-foreground font-medium">Please wait while your reward is being verified</p>
          <p className="text-muted-foreground text-sm">Do not close this page</p>
        </div>

        {/* Ad placement area */}
        <div className="w-full max-w-md bg-muted/50 border border-dashed border-border rounded-lg p-8 text-center">
          <p className="text-muted-foreground text-sm">AD SPACE</p>
        </div>

        {/* Security badge */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span className="text-xs">Secure Verification Process</span>
        </div>
      </div>

      {/* Top ad space */}
      <div className="bg-muted/30 border-t border-border p-4 text-center">
        <p className="text-muted-foreground text-xs">ADVERTISEMENT SPACE</p>
      </div>
    </div>
  );
};

export default CountdownPage;
