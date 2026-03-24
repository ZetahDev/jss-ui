import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const Item = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Item(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-item", className)} {...props} />;
});

