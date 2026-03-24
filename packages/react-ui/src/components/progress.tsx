import * as ProgressPrimitive from "@radix-ui/react-progress";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export type ProgressProps = ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;

export const Progress = forwardRef<ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(function Progress(
  { className, value, ...props },
  ref
) {
  return (
    <ProgressPrimitive.Root ref={ref} className={cn("jss-progress", className)} value={value} {...props}>
      <ProgressPrimitive.Indicator
        className="jss-progress__indicator"
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
