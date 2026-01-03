const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div 
          className="w-20 h-20 rounded-full border-4 border-transparent animate-spin"
          style={{
            borderTopColor: 'hsl(0 100% 60%)',
            borderRightColor: 'hsl(280 100% 60%)',
            animationDuration: '1s',
          }}
        />
        
        {/* Inner ring */}
        <div 
          className="absolute inset-2 rounded-full border-4 border-transparent animate-spin"
          style={{
            borderTopColor: 'hsl(185 100% 50%)',
            borderLeftColor: 'hsl(45 100% 55%)',
            animationDuration: '0.8s',
            animationDirection: 'reverse',
          }}
        />
        
        {/* Center glow */}
        <div 
          className="absolute inset-4 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(0 100% 60% / 0.4), transparent 70%)',
          }}
        />

        {/* Text */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="font-heading text-sm text-muted-foreground tracking-widest uppercase">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
