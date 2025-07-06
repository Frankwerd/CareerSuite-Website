"use client";

import { cn } from "@/lib/utils";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className = "",
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF", // Default from color
  gradientTo = "#FE8BBB", // Default to color
  ...props // Spread additional props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Effect to update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (cardRef.current) {
        const { offsetWidth, offsetHeight } = cardRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions(); // Initial call
    window.addEventListener("resize", updateDimensions); // Update on resize

    return () => window.removeEventListener("resize", updateDimensions); // Cleanup
  }, []);

  // Mouse move handler
  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      cardRef.current.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "magic-card relative rounded-xl border border-transparent bg-background p-px shadow-md transition-shadow duration-300 hover:shadow-xl",
        className,
      )}
      style={
        {
          "--gradient-size": `${gradientSize}px`,
          "--gradient-color": gradientColor,
          "--gradient-opacity": `${gradientOpacity}`,
          "--gradient-from": gradientFrom,
          "--gradient-to": gradientTo,
          "--card-width": `${dimensions.width}px`, // Use dynamic width
          "--card-height": `${dimensions.height}px`, // Use dynamic height
        } as React.CSSProperties
      }
      onMouseMove={onMouseMove}
      {...props} // Spread additional props
    >
      {/* Background spotlight effect */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: `radial-gradient(var(--gradient-size) circle at var(--mouse-x) var(--mouse-y), var(--gradient-color), transparent 40%)`,
            opacity: "var(--gradient-opacity)",
          }}
        />
      </div>
      {/* Animated border */}
      <div className="pointer-events-none absolute inset-[-1px] rounded-[inherit]">
        <div
          className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(calc(var(--gradient-size) * 0.7) circle at var(--mouse-x) var(--mouse-y), var(--gradient-from), var(--gradient-to), transparent 100%)`,
            animation: "borderAnimation 2s infinite linear", // CSS animation for border
          }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center rounded-[inherit] bg-background p-4">
        {children}
      </div>
      {/* CSS for border animation */}
      <style jsx global>{`
        @keyframes borderAnimation {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export { MagicCard };
