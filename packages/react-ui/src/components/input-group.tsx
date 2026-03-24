import { forwardRef, type HTMLAttributes, type InputHTMLAttributes } from "react";

import { cn } from "../utils";

export const InputGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function InputGroup(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-input-group", className)} {...props} />;
});

export const InputGroupAddon = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(function InputGroupAddon(
  { className, ...props },
  ref
) {
  return <span ref={ref} className={cn("jss-input-group__addon", className)} {...props} />;
});

export const InputGroupInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function InputGroupInput({ className, ...props }, ref) {
    return <input ref={ref} className={cn("jss-input-group__input", className)} {...props} />;
  }
);

