import { CheckCircle, X, Sparkles } from "lucide-react";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessPopup = ({ isOpen, onClose }: SuccessPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fade-in">
      <div className="w-full max-w-sm bg-card border border-primary/30 rounded-lg overflow-hidden animate-success">
        {/* Close button */}
        <div className="flex justify-end p-3">
          <button onClick={onClose} className="p-1 text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="px-6 pb-8 text-center space-y-4">
          {/* Success icon */}
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
            <CheckCircle className="w-20 h-20 text-primary relative z-10" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-accent animate-pulse" />
            <Sparkles className="absolute -bottom-1 -left-3 w-5 h-5 text-accent animate-pulse" />
          </div>
          
          {/* Title */}
          <h2 className="font-heading text-3xl text-primary">Successfully Claimed!</h2>
          
          {/* Message */}
          <div className="space-y-2">
            <p className="text-foreground font-medium">
              Congratulations!
            </p>
            <p className="text-muted-foreground text-sm">
              Your Free Fire bundle will be delivered soon.
            </p>
          </div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="w-full ff-btn mt-4"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
