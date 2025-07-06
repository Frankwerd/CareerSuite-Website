"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  // Removed reverse and initialOffset as they are not standard in the basic BorderBeam
  style?: React.CSSProperties;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className,
  size = 100, // Adjusted default size
  duration = 10, // Adjusted default duration
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
  style,
  ...props
}) => {
  const [path, setPath] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      // Simple rectangular path
      setPath(`M0,0 H${width} V${height} H0 Z`);
    }
  }, []); // Recalculate on mount and if width/height changes (implicitly via parent)

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 rounded-[var(--radius)] [border:calc(var(--border-width)*1px)_solid_transparent]",
        // Ensure --radius is defined by the parent or defaults appropriately in global styles
        // The BorderBeam itself does not define --radius; it expects it from the parent context.
        className,
      )}
      style={
        {
          ...style,
          "--border-width": `${borderWidth}px`,
          // The conic gradient for the border background
          "--border-bg": `conic-gradient(from 180deg at 50% 50%, ${colorTo} 0deg, ${colorFrom} 50%, ${colorTo} 100%)`,
          // Animation will play on this pseudo-element
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "inherit", // Inherit border-radius from parent
            padding: "var(--border-width)", // Create space for the border
            background: "var(--border-bg)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            animation: `border-beam-spin ${duration}s linear infinite`,
            zIndex: 0, // Ensure it's behind content
          },
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Content of the bordered element will be children passed to BorderBeam's wrapper */}
      {/* Keyframes for the animation should be in your global CSS or a style tag */}
      <style jsx global>{`
        @keyframes border-beam-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
