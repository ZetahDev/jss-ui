import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const Kbd = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(function Kbd(
  { className, ...props },
  ref
) {
  return <kbd ref={ref} className={cn("jss-kbd", className)} {...props} />;
});

