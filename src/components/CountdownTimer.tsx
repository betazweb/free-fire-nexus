import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex justify-center mb-12">
      <div className="glass-card px-6 py-4 md:px-8 md:py-5 inline-flex items-center gap-4 md:gap-6 neon-border-red">
        <div className="flex items-center gap-2 text-primary">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="font-heading text-sm tracking-wider uppercase">Limited Offer Ends In</span>
        </div>
        
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-xs text-muted-foreground uppercase">Hours</span>
          </div>
          <span className="text-2xl font-heading text-primary animate-pulse">:</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-xs text-muted-foreground uppercase">Mins</span>
          </div>
          <span className="text-2xl font-heading text-primary animate-pulse">:</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-heading font-bold text-secondary">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-xs text-muted-foreground uppercase">Secs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
