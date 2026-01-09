import { useState, useEffect, useRef } from "react";
import { Loader2, Shield } from "lucide-react";

interface CountdownPageProps {
  isOpen: boolean;
  onComplete: () => void;
}

// Ad component that injects banner scripts
const BannerAd = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear previous content
    containerRef.current.innerHTML = '';
    
    // Create and inject the ad scripts
    const optionsScript = document.createElement('script');
    optionsScript.innerHTML = `
      atOptions = {
        'key' : '71731f5aa1a266867d7af3cf65e8752f',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    
    const invokeScript = document.createElement('script');
    invokeScript.src = 'https://www.highperformanceformat.com/71731f5aa1a266867d7af3cf65e8752f/invoke.js';
    invokeScript.async = true;
    
    containerRef.current.appendChild(optionsScript);
    containerRef.current.appendChild(invokeScript);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-[728px] min-h-[90px] flex items-center justify-center bg-muted/30 rounded overflow-hidden"
    />
  );
};

const CountdownPage = ({ isOpen, onComplete }: CountdownPageProps) => {
  const [countdown, setCountdown] = useState(30);
  const popupTriggeredRef = useRef<Set<number>>(new Set());
  const socialBarLoadedRef = useRef(false);

  // Load social bar script once
  useEffect(() => {
    if (!isOpen || socialBarLoadedRef.current) return;
    
    const script = document.createElement('script');
    script.src = 'https://pl28058765.effectivegatecpm.com/04/a0/dd/04a0dd9a2eb7ea4e09120df34587f69c.js';
    script.async = true;
    document.body.appendChild(script);
    socialBarLoadedRef.current = true;

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [isOpen]);

  // Trigger popup ads at specific intervals (at 25s, 15s, and 5s remaining)
  useEffect(() => {
    if (!isOpen) return;

    const popupTimes = [25, 15, 5];
    
    if (popupTimes.includes(countdown) && !popupTriggeredRef.current.has(countdown)) {
      popupTriggeredRef.current.add(countdown);
      
      const script = document.createElement('script');
      script.src = 'https://pl28057138.effectivegatecpm.com/38/cb/92/38cb9291cf4e22262c4fe597c31ab33b.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [countdown, isOpen]);

  // Countdown timer
  useEffect(() => {
    if (!isOpen) {
      setCountdown(30);
      popupTriggeredRef.current.clear();
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
    <div className="fixed inset-0 z-50 bg-background flex flex-col animate-fade-in overflow-y-auto">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 text-center sticky top-0 z-10">
        <h1 className="font-heading text-2xl text-primary">Verifying Reward</h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center p-4 space-y-6">
        
        {/* TOP ADS - 2 Banner Ads */}
        <div className="w-full flex flex-col items-center gap-2">
          <BannerAd />
          <BannerAd />
        </div>

        {/* Verification text */}
        <div className="text-center space-y-1">
          <p className="text-foreground font-medium text-lg">Verifying your Free Fire reward, please wait...</p>
          <p className="text-muted-foreground text-sm">Do not close this page</p>
        </div>

        {/* Spinner and countdown */}
        <div className="relative">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-muted flex items-center justify-center bg-card">
            <span className="font-heading text-4xl md:text-5xl text-primary">{countdown}</span>
          </div>
          <Loader2 className="absolute inset-0 w-28 h-28 md:w-32 md:h-32 text-primary animate-spin" />
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-sm">
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-yellow-400 transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-muted-foreground text-xs mt-2">{Math.round(progress)}% Complete</p>
        </div>

        {/* Security badge */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Shield className="w-4 h-4 text-green-500" />
          <span className="text-xs">Secure Verification Process</span>
        </div>

        {/* BOTTOM ADS - 2 Banner Ads */}
        <div className="w-full flex flex-col items-center gap-2">
          <BannerAd />
          <BannerAd />
        </div>

      </div>
    </div>
  );
};

export default CountdownPage;
