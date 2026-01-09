import { useState } from "react";
import { X } from "lucide-react";

interface ClaimModalProps {
  isOpen: boolean;
  bundleName: string;
  onClose: () => void;
  onContinue: (uid: string) => void;
}

const ClaimModal = ({ isOpen, bundleName, onClose, onContinue }: ClaimModalProps) => {
  const [uid, setUid] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uid.trim().length >= 6) {
      onContinue(uid);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fade-in">
      <div className="w-full max-w-sm bg-card border border-border rounded-lg animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-heading text-xl text-foreground">Claim Reward</h2>
          <button onClick={onClose} className="p-1 text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <p className="text-muted-foreground text-sm">
            Enter your Free Fire UID to claim: <span className="text-primary font-medium">{bundleName}</span>
          </p>
          
          <div>
            <label htmlFor="uid" className="block text-sm font-medium text-foreground mb-2">
              Free Fire UID
            </label>
            <input
              type="text"
              id="uid"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              placeholder="Enter your UID"
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              minLength={6}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full ff-btn"
          >
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClaimModal;
