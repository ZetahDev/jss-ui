import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "../utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type = "text", ...props },
  ref
) {
  return <input ref={ref} type={type} className={cn("jss-input", className)} {...props} />;
});
