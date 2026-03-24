import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export const Collapsible = CollapsiblePrimitive.Root;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

export type CollapsibleContentProps = ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>;
export const CollapsibleContent = forwardRef<ElementRef<typeof CollapsiblePrimitive.Content>, CollapsibleContentProps>(
  function CollapsibleContent({ className, ...props }, ref) {
    return <CollapsiblePrimitive.Content ref={ref} className={cn("jss-collapsible__content", className)} {...props} />;
  }
);
