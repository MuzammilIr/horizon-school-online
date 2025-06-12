
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleApplyClick = () => {
    setIsOpen(false);
    navigate("/admissions");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-0 bg-white border-0 shadow-2xl">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <img 
            src="/lovable-uploads/49faaf4f-e302-45b0-aab3-a6d207cc2e63.png" 
            alt="School Admission 2025-2026" 
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bottom-4 left-4 right-4">
            <Button 
              onClick={handleApplyClick}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg shadow-lg"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdmissionPopup;
