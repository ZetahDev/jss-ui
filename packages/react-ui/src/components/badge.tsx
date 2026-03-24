import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "../utils";

const badgeVariants = cva("jss-badge", {
  variants: {
    variant: {
      default: "jss-badge--default",
      secondary: "jss-badge--secondary",
      outline: "jss-badge--outline",
      destructive: "jss-badge--destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
