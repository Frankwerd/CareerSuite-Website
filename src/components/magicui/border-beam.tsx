"use client";

import { cn } from "@/lib/utils";
import { motion, type Transition } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  reverse?: boolean;
  initialOffset?: number; // Allow initial offset to be passed as a prop
  style?: React.CSSProperties;
  transition?: Transition;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
  reverse = false,
  initialOffset = 0, // Default initial offset to 0
  style,
  transition, // Allow custom transition
  ...props
}) => {
  const [path, setPath] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Effect to calculate and set the path for the SVG
  useEffect(() => {
    const PADDING = 0; // Padding around the border
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const newPath = `M${PADDING},${PADDING} H${width - PADDING} V${height - PADDING} H${PADDING} Z`;
    setPath(newPath);
  }, []); // Re-calculate path on resize or when component mounts

  // Calculate initial dash offset based on the prop
  const initialDashOffset = (initialOffset / 100) * 1000; // Assuming 1000 is the total path length for dash array

  return (
    <div
      ref={containerRef}
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--radius": "0.75rem", // Default border radius if not provided by parent
          "--border-radius": "calc(var(--radius) - var(--border-width))",
          "--border-bg": `conic-gradient(from 180deg at 50% 50%, ${colorFrom} 0deg, ${colorTo} 360deg)`,
          "--beam-bg": `conic-gradient(from 180deg at 50% 50%, transparent 0%, ${colorFrom} 25%, ${colorTo} 75%, transparent 100%)`,
          "--beam-size": `${size}px`,
          ...style, // Allow custom styles
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-0 rounded-[var(--radius)] [border:calc(var(--border-width)*1px)_solid_transparent]",
        // Use calculated values for border and background
        "before:absolute before:-inset-[var(--border-width)] before:h-[calc(100%+var(--border-width)*2)] before:w-[calc(100%+var(--border-width)*2)] before:rounded-[var(--radius)] before:bg-[var(--border-bg)] before:[animation-play-state:paused] before:content-['']",
        // Beam animation styles
        "after:absolute after:-inset-[var(--border-width)] after:h-[calc(100%+var(--border-width)*2)] after:w-[calc(100%+var(--border-width)*2)] after:rounded-[var(--radius)] after:bg-[linear-gradient(transparent,transparent),var(--beam-bg)] after:bg-size-[length:100%_var(--beam-size),cover] after:bg-repeat-y after:content-['']",
        // Masking to create the border effect
        "before:bg-[linear-gradient(transparent,transparent),var(--border-bg)] before:bg-clip-border before:bg-origin-border before:bg-size-[length:100%_calc(var(--beam-size)*1),cover] before:bg-repeat-y",
        // Animation
        "before:animate-border-beam after:animate-border-beam",
        reverse && "before:[animation-direction:reverse] after:[animation-direction:reverse]",
        className,
      )}
      {...props}
    >
      {/* SVG for the animated gradient */}
      <svg
        fill="none"
        width="100%"
        height="100%"
        className="absolute left-0 top-0 h-full w-full"
        style={{ borderRadius: "inherit" }} // Ensure SVG inherits border radius
      >
        <motion.path
          d={path}
          stroke={`url(#gradient-${colorFrom.replace("#", "")}-${colorTo.replace("#", "")})`}
          strokeWidth={borderWidth * 2} // Stroke width should be double the border width for visibility
          strokeDasharray={1000} // A large number to ensure the path is fully covered
          strokeDashoffset={initialDashOffset} // Apply the initial offset
          strokeLinecap="round"
          initial={{ strokeDashoffset: initialDashOffset }}
          animate={{
            strokeDashoffset: [initialDashOffset, initialDashOffset - 1000], // Animate from initial to fully drawn
          }}
          transition={
            transition ?? {
              duration,
              ease: "linear",
              repeat: Infinity,
              delay,
              repeatDelay: 0, // No delay between repeats
            }
          }
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient
            id={`gradient-${colorFrom.replace("#", "")}-${colorTo.replace("#", "")}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop stopColor={colorFrom} offset="0%" />
            <stop stopColor={colorTo} offset="100%" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
