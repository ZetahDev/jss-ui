import type { HTMLAttributes } from "react";

import { cn } from "../utils";

export type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  size?: "sm" | "md" | "lg";
};

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  return (
    <span
      className={cn(
        "jss-spinner",
        size === "sm" && "jss-spinner--sm",
        size === "md" && "jss-spinner--md",
        size === "lg" && "jss-spinner--lg",
        className
      )}
      {...props}
    />
  );
}
