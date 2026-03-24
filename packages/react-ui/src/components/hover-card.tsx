import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export type HoverCardContentProps = ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>;
export const HoverCardContent = forwardRef<ElementRef<typeof HoverCardPrimitive.Content>, HoverCardContentProps>(
  function HoverCardContent({ className, sideOffset = 8, ...props }, ref) {
    return (
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn("jss-hover-card__content", className)}
          {...props}
        />
      </HoverCardPrimitive.Portal>
    );
  }
);
