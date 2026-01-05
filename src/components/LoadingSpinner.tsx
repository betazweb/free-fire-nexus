import { Diamond } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        
        {/* Diamond icon */}
        <div className="relative">
          <Diamond className="w-16 h-16 text-accent animate-bounce" />
          
          {/* Rotating ring */}
          <div className="absolute inset-0 -m-4">
            <div className="w-24 h-24 border-2 border-transparent border-t-primary border-r-primary rounded-full animate-spin" />
          </div>
        </div>
        
        {/* Loading text */}
        <p className="mt-8 text-center text-muted-foreground font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
