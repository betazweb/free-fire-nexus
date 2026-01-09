import { Gift } from "lucide-react";

interface RewardBundleCardProps {
  name: string;
  imageUrl?: string;
  onClaim: () => void;
}

const RewardBundleCard = ({ name, imageUrl, onClaim }: RewardBundleCardProps) => {
  return (
    <div className="ff-card p-4 flex flex-col items-center gap-4">
      {/* Image placeholder */}
      <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Gift className="w-12 h-12" />
            <span className="text-sm">Image Placeholder</span>
          </div>
        )}
      </div>
      
      {/* Bundle name */}
      <h3 className="font-heading text-lg text-foreground text-center">{name}</h3>
      
      {/* Claim button */}
      <button
        onClick={onClaim}
        className="w-full ff-btn text-center"
      >
        CLAIM
      </button>
    </div>
  );
};

export default RewardBundleCard;
