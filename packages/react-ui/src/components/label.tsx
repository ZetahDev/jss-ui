import * as LabelPrimitive from "@radix-ui/react-label";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

export const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, LabelProps>(function Label(
  { className, ...props },
  ref
) {
  return <LabelPrimitive.Root ref={ref} className={cn("jss-label", className)} {...props} />;
});
