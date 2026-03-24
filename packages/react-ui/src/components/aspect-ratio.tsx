import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export type AspectRatioProps = ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>;

export const AspectRatio = forwardRef<ElementRef<typeof AspectRatioPrimitive.Root>, AspectRatioProps>(
  function AspectRatio({ className, ...props }, ref) {
    return <AspectRatioPrimitive.Root ref={ref} className={cn("jss-aspect-ratio", className)} {...props} />;
  }
);

