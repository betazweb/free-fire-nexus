import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Gamepad2, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'glass-card backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl gradient-text">
              FF Rewards
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('rewards')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Rewards
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('rewards')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              FAQ
            </button>
            <Button variant="gaming" size="sm" onClick={() => scrollToSection('rewards')}>
              Get Rewards
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${isMobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}
          `}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <button 
              onClick={() => scrollToSection('rewards')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left"
            >
              Rewards
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('rewards')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left"
            >
              FAQ
            </button>
            <Button variant="gaming" className="w-full" onClick={() => scrollToSection('rewards')}>
              Get Rewards
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
