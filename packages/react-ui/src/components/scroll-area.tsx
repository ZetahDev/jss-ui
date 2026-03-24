import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export const ScrollArea = forwardRef<ElementRef<typeof ScrollAreaPrimitive.Root>, ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>>(
  function ScrollArea({ className, ...props }, ref) {
    return <ScrollAreaPrimitive.Root ref={ref} className={cn("jss-scroll-area", className)} {...props} />;
  }
);

export const ScrollAreaViewport = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>
>(function ScrollAreaViewport({ className, ...props }, ref) {
  return <ScrollAreaPrimitive.Viewport ref={ref} className={cn("jss-scroll-area__viewport", className)} {...props} />;
});

export type ScrollAreaScrollbarProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>;
export const ScrollAreaScrollbar = forwardRef<ElementRef<typeof ScrollAreaPrimitive.Scrollbar>, ScrollAreaScrollbarProps>(
  function ScrollAreaScrollbar({ className, orientation = "vertical", ...props }, ref) {
    return (
      <ScrollAreaPrimitive.Scrollbar
        ref={ref}
        orientation={orientation}
        className={cn("jss-scroll-area__scrollbar", `jss-scroll-area__scrollbar--${orientation}`, className)}
        {...props}
      >
        <ScrollAreaPrimitive.Thumb className="jss-scroll-area__thumb" />
      </ScrollAreaPrimitive.Scrollbar>
    );
  }
);

export const ScrollAreaCorner: typeof ScrollAreaPrimitive.Corner = ScrollAreaPrimitive.Corner;
