import { Gamepad2, Instagram, Youtube, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top glow line */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(0 100% 60%), hsl(280 100% 60%), transparent)',
        }}
      />

      {/* Background glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(0 100% 60% / 0.3), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-2xl gradient-text">
                FF Rewards
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The ultimate destination for Free Fire players to get premium rewards, 
              diamonds, and exclusive items safely and instantly.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:neon-border-red transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:neon-border-red transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:neon-border-purple transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:neon-border-cyan transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Get Rewards", "How It Works", "FAQ", "Contact Us"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 story-link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Terms of Service", "Privacy Policy", "Disclaimer", "Cookie Policy"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 story-link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="glass-card p-6 mb-8 border border-primary/20">
          <h5 className="font-heading font-bold text-sm text-primary mb-2 uppercase tracking-wider">
            Disclaimer
          </h5>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This website is not affiliated with, endorsed by, or connected to Garena Free Fire or any of its subsidiaries. 
            All trademarks, logos, and brand names are the property of their respective owners. 
            This is an independent platform created for entertainment purposes. 
            Users must complete verification offers to receive rewards.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © 2024 FF Rewards. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <span className="text-primary animate-pulse">❤</span> for gamers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
