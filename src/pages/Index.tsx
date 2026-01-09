import { useState, useCallback } from "react";
import FFHeader from "@/components/FFHeader";
import FFFooter from "@/components/FFFooter";
import RewardBundleCard from "@/components/RewardBundleCard";
import ClaimModal from "@/components/ClaimModal";
import CountdownPage from "@/components/CountdownPage";
import SuccessPopup from "@/components/SuccessPopup";

// Bundle images
import yujiBundle from "@/assets/yuji-itadori-bundle.jpg";
import sukunaBundle1 from "@/assets/sukuna-bundle-1.jpg";
import sukunaBundle2 from "@/assets/sukuna-bundle-2.jpg";
import megumiBundle from "@/assets/megumi-fushiguro-bundle.jpg";
import nobaraBundle from "@/assets/nobara-kugisaki-bundle.jpg";

const rewardBundles = [
  { id: 1, name: "Yuji Itadori Bundle", image: yujiBundle },
  { id: 2, name: "Ryomen Sukuna Bundle", image: sukunaBundle1 },
  { id: 3, name: "Ryomen Sukuna Bundle (Alternate)", image: sukunaBundle2 },
  { id: 4, name: "Megumi Fushiguro Bundle", image: megumiBundle },
  { id: 5, name: "Nobara Kugisaki Bundle", image: nobaraBundle },
];

const Index = () => {
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClaim = (bundleName: string) => {
    setSelectedBundle(bundleName);
    setShowClaimModal(true);
  };

  const handleContinue = () => {
    setShowClaimModal(false);
    setShowCountdown(true);
  };

  const handleCountdownComplete = useCallback(() => {
    setShowCountdown(false);
    setShowSuccess(true);
  }, []);

  const handleSuccessClose = () => {
    setShowSuccess(false);
    setSelectedBundle(null);
  };

  const handleClaimModalClose = () => {
    setShowClaimModal(false);
    setSelectedBundle(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <FFHeader />
      
      <main className="flex-1 container py-6">
        {/* Ad space top */}
        <div className="bg-muted/30 border border-dashed border-border rounded-lg p-4 mb-6 text-center">
          <p className="text-muted-foreground text-xs">ADVERTISEMENT SPACE</p>
        </div>

        {/* Section header */}
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl text-foreground mb-2">
            CLAIM YOUR <span className="text-primary">REWARDS</span>
          </h2>
          <p className="text-muted-foreground text-sm">Select a reward bundle to claim</p>
        </div>

        {/* Reward bundles grid - mobile first single column */}
        <div className="grid grid-cols-1 gap-4">
          {rewardBundles.map((bundle) => (
            <RewardBundleCard
              key={bundle.id}
              name={bundle.name}
              imageUrl={bundle.image}
              onClaim={() => handleClaim(bundle.name)}
            />
          ))}
        </div>

        {/* Ad space bottom */}
        <div className="bg-muted/30 border border-dashed border-border rounded-lg p-4 mt-6 text-center">
          <p className="text-muted-foreground text-xs">ADVERTISEMENT SPACE</p>
        </div>
      </main>

      <FFFooter />

      {/* Modals */}
      <ClaimModal
        isOpen={showClaimModal}
        bundleName={selectedBundle || ""}
        onClose={handleClaimModalClose}
        onContinue={handleContinue}
      />

      <CountdownPage
        isOpen={showCountdown}
        onComplete={handleCountdownComplete}
      />

      <SuccessPopup
        isOpen={showSuccess}
        onClose={handleSuccessClose}
      />
    </div>
  );
};

export default Index;
