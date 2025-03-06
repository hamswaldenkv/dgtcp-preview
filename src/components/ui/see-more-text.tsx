import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SeeMoreTextProps {
  text: string | string[];
  maxLength?: number;
  title?: string;
  className?: string;
  textClassName?: string;
}

const SeeMoreText = ({
  text,
  maxLength = 200,
  title = "Full Text",
  className,
  textClassName,
}: SeeMoreTextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const fullText = Array.isArray(text) ? text.join("\n") : text;

  // Check if text needs truncation
  const needsTruncation = fullText.length > maxLength;
  const truncatedText = needsTruncation
    ? `${fullText.substring(0, maxLength).trim()}...`
    : text;

  return (
    <>
      <div className={cn("relative", className)}>
        <p className={cn("leading-relaxed", textClassName)}>
          {truncatedText}
          {needsTruncation && (
            <button
              onClick={() => setIsOpen(true)}
              className="items-center ml-1 text-primary inline-flex"
              aria-label="See more"
            >
              <span className="text-primary">Lire plus</span>{" "}
              <ChevronDown className="size-3.5" />
            </button>
          )}
        </p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md md:max-w-lg glassmorphism animate-scale-in z-[99999999]">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium mb-2">
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto pr-1 space-y-2">
            {Array.isArray(text) ? (
              text.map((item, x) => (
                <p
                  key={x}
                  className="text-base leading-relaxed animate-blur-in text-justify"
                >
                  {item}
                </p>
              ))
            ) : (
              <p className="text-base leading-relaxed animate-blur-in text-justify">
                {text}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SeeMoreText;
