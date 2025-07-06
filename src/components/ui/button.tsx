import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { AnimatedShinyEffect } from "@/components/magicui/AnimatedShinyEffect"; // Corrected import path

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden group", // Added relative, overflow-hidden, group
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        download: // New variant for download buttons
          "bg-primary text-primary-foreground shadow-md hover:bg-primary/80 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  applyShinyEffect?: boolean;
  shinyEffectClassName?: string; // To allow custom styling for the shiny effect wrapper if needed
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  applyShinyEffect = false,
  shinyEffectClassName,
  children, // Ensure children is destructured
  ...props
}: ButtonProps) { // Use ButtonProps for better type inference
  const Comp = asChild ? Slot : "button";

  const buttonContent = (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  );

  if (applyShinyEffect) {
    // Determine background color based on variant for the shiny effect
    // This is a simplified example; you might need a more robust way to get the exact background
    // Determine background color based on variant for the shiny effect
    // Using oklch values from globals.css (light mode defaults)
    // These should ideally be dynamically fetched or passed if themes can change them easily at runtime
    let backgroundColorHex = "oklch(65.77% 0.195 39.94)"; // --primary (Vibrant Orange #F26419)
    switch (variant) {
      case "secondary":
        backgroundColorHex = "oklch(77.99% 0.168 75.31)"; // --secondary (Hunyadi Yellow #F6AE2D)
        break;
      case "destructive":
        backgroundColorHex = "oklch(0.577 0.245 27.325)"; // --destructive (Original red)
        break;
      case "outline":
      case "ghost":
      case "link": // Link is transparent, shiny effect might be odd, but we can use page bg
        backgroundColorHex = "oklch(100% 0 0)"; // --background (White #FFFFFF)
        break;
      default:
        // Default is primary, already set
        break;
    }

    // The Button component itself will be the direct child of AnimatedShinyEffect.
    // AnimatedShinyEffect creates a span wrapper. The actual button (Comp) needs to be inside it.
    // The props for Comp should not be spread on AnimatedShinyEffect's span.
    const { children: btnChildren, ...compProps } = props; // Separate children for Comp

    return (
      <AnimatedShinyEffect
        className={cn(buttonVariants({ variant, size, className }), shinyEffectClassName)} // Apply button styles to the shiny wrapper
        shimmerColor="rgba(255,255,255,0.6)" // Slightly more opaque shimmer
        shimmerWidth={120} // Wider shimmer
        shimmerDuration="2.5s"
        background={backgroundColorHex}
      >
        {/* Pass children directly to AnimatedShinyEffect, which will render them.
            The Button's own text/icons go here.
            The actual <button> or <Slot> structure is handled by AnimatedShinyEffect's children rendering.
            This might need adjustment if AnimatedShinyEffect is not designed to be a direct replacement for Comp.

            Let's reconsider: The Comp (button) should be the thing *being wrapped* by the shiny effect,
            but the shiny effect is a SPAN. So the SPAN needs to look like a button.
            This means the `buttonVariants` classes should apply to the AnimatedShinyEffect's span.
            And the original Comp (button) should be a simple, unstyled child or not exist if asChild is false.
        */}
         <Comp
            {...compProps} // Pass original button props (excluding children, className, variant, size)
            // className is handled by the wrapper, variant and size are used for logic, not direct styling here
            // This Comp will be the actual button element, but its appearance is dictated by the wrapper.
            // If asChild, Comp is Slot, and the child of Button will get these props.
            // If not asChild, Comp is 'button'.
            // We need to ensure the Comp itself doesn't conflict with the styles of the wrapper.
            // It might be better to pass children directly to AnimatedShinyEffect and let it handle them.
            // For now, let's assume AnimatedShinyEffect just wraps its children.
            // The structure should be: ShinySpan (styled as button) > ButtonElement (transparent/basic) > children
            // This is getting complex. Let's simplify:
            // The AnimatedShinyEffect will be a span. If the button is not `asChild`,
            // the `Comp` will be a `button` tag. We want the `AnimatedShinyEffect`'s span
            // to get the button styling.
            // And the actual button element inside should be minimal or `asChild` should pass styling to its child.

            // Corrected structure: The AnimatedShinyEffect acts as the button's visual container.
            // The actual button (Comp) is inside and should be styled minimally or rely on `asChild`.
            // The props for the button element itself:
            data-slot="button" // Keep this for consistency if used by other parts
            // The className for Comp should NOT include buttonVariants again if the wrapper has them.
            // It should fill the parent and be transparent if the parent handles all visuals.
            className={cn(
              "relative z-10 w-full h-full flex items-center justify-center", // Ensure content is above shine and centered
              // If not asChild, we need to ensure the inner button is transparent and fills.
              // If asChild, the child of Button will take over.
              asChild ? "" : "bg-transparent border-transparent focus:outline-none"
            )}
        >
            {children}
        </Comp>
      </AnimatedShinyEffect>
    );
  }

  // Original return for non-shiny buttons
  return (
     <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }), "relative z-0")} // Ensure non-shiny buttons also have a z-index context if needed
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button, buttonVariants }
