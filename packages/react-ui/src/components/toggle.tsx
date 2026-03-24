import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

const toggleVariants = cva("jss-toggle", {
  variants: {
    variant: {
      default: "jss-toggle--default",
      outline: "jss-toggle--outline"
    },
    size: {
      sm: "jss-toggle--sm",
      md: "jss-toggle--md",
      lg: "jss-toggle--lg"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});

export type ToggleProps = ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>;

export const Toggle = forwardRef<ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(function Toggle(
  { className, size, variant, ...props },
  ref
) {
  return <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ size, variant }), className)} {...props} />;
});

