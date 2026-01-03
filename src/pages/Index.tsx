import { useState, useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RewardsSection from "@/components/RewardsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LiveActivitySection from "@/components/LiveActivitySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";
import RewardPopup from "@/components/RewardPopup";
import LoadingSpinner from "@/components/LoadingSpinner";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Simulate loading
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Show popup after some time
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(popupTimer);
    };
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
        <RewardsSection />
        <HowItWorksSection />
        <LiveActivitySection />
        <WhyChooseUsSection />
      </main>
      
      <Footer />
      
      <RewardPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Index;
