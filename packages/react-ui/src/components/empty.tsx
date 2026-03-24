import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const Empty = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Empty(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-empty", className)} {...props} />;
});

export const EmptyTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(function EmptyTitle(
  { className, ...props },
  ref
) {
  return <h3 ref={ref} className={cn("jss-empty__title", className)} {...props} />;
});

export const EmptyDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  function EmptyDescription({ className, ...props }, ref) {
    return <p ref={ref} className={cn("jss-empty__description", className)} {...props} />;
  }
);

export const EmptyActions = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function EmptyActions(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-empty__actions", className)} {...props} />;
});

