import { Flame } from "lucide-react";

const FFHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container py-3 flex items-center justify-center gap-3">
        <Flame className="w-8 h-8 text-primary" />
        <h1 className="font-heading text-2xl md:text-3xl tracking-wide text-foreground">
          FREE FIRE <span className="text-primary">REWARDS</span>
        </h1>
        <Flame className="w-8 h-8 text-primary" />
      </div>
    </header>
  );
};

export default FFHeader;
