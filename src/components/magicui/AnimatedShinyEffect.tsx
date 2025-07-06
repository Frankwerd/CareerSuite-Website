import { ComponentPropsWithoutRef, CSSProperties, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedShinyEffectProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
  shimmerColor?: string; // hex color
  shimmerDuration?: string; // e.g., "3s"
  shimmerDelay?: string; // e.g., "0.5s"
  background?: string; // background color of the element, if needed for the gradient
}

export const AnimatedShinyEffect: FC<AnimatedShinyEffectProps> = ({
  children,
  className,
  shimmerWidth = 100,
  shimmerColor = "#ffffff", // Default to white shimmer
  shimmerDuration = "1.5s",
  shimmerDelay = "0s",
  background = "transparent", // Default background for gradient construction
  ...props
}) => {
  const shimmerStyle = {
    "--shiny-width": `${shimmerWidth}px`,
    "--shiny-color": shimmerColor,
    "--shiny-duration": shimmerDuration,
    "--shiny-delay": shimmerDelay,
    "--shiny-background": background,
  } as CSSProperties;

  return (
    <span
      style={shimmerStyle}
      className={cn(
        "relative group overflow-hidden", // Ensure overflow is hidden for the pseudo-element
        // Base styles for the shimmer effect container
        // The actual shine is now an ::after pseudo-element
        className
      )}
      {...props}
    >
      {children}
      {/* Pseudo-element for the shine effect */}
      <span
        className={cn(
          "absolute inset-0 z-10", // Cover the parent, z-index to be above children if needed
          "bg-clip-content", // Clip to content area if children have padding
          "animate-shiny-pseudo-element", // New animation name
          // Gradient using CSS variables for customization
          // The gradient goes from transparent, to shimmerColor, back to transparent
          // It uses the --shiny-background to blend with the actual background
          `bg-gradient-to-r`, // Base gradient direction
          "bg-no-repeat [background-position:-100%_0] [background-size:var(--shiny-width)_100%]",
          "group-hover:animate-shiny-pseudo-element-hover" // Optional: re-trigger or alter animation on hover
        )}
        style={{
          backgroundImage: `linear-gradient(to right, var(--shiny-background) 0%, var(--shiny-color) 50%, var(--shiny-background) 100%)`,
        }}
      />
    </span>
  );
};

// Ensure you have corresponding Tailwind animations defined in your globals.css or tailwind.config.js
// For example, in tailwind.config.js:
//
// theme: {
//   extend: {
//     animation: {
//       'shiny-pseudo-element': 'shiny-pseudo 2s infinite linear',
//       'shiny-pseudo-element-hover': 'shiny-pseudo 1s infinite linear', // Example hover animation
//     },
//     keyframes: {
//       'shiny-pseudo': {
//         '0%': { backgroundPosition: 'calc(-100% - var(--shiny-width)) 0' },
//         '100%': { backgroundPosition: 'calc(100% + var(--shiny-width)) 0' },
//       },
//     },
//   },
// },
//
// Or in globals.css:
// @keyframes shiny-pseudo {
//   0% { background-position: calc(-100% - var(--shiny-width)); }
//   100% { background-position: calc(100% + var(--shiny-width)); }
// }
// .animate-shiny-pseudo-element {
//   animation: shiny-pseudo var(--shiny-duration) var(--shiny-delay) infinite linear;
// }
// /* Example for hover, if needed */
// .group-hover\:animate-shiny-pseudo-element-hover:hover .animate-shiny-pseudo-element {
//    animation-duration: 1s; /* Faster on hover example */
// }
//
// The original `animate-shiny-text` seems to be for text clipping,
// this new approach uses a pseudo-element for a more versatile shine over any background.
// The `bg-clip-text` and specific text color classes are removed as this component is now more general.
