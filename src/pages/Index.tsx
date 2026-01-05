import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RedeemCodeSection from "@/components/RedeemCodeSection";
import FreeDiamondsSection from "@/components/FreeDiamondsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LiveActivitySection from "@/components/LiveActivitySection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import LoadingSpinner from "@/components/LoadingSpinner";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <RedeemCodeSection />
        <FreeDiamondsSection />
        <HowItWorksSection />
        <LiveActivitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
