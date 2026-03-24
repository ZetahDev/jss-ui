import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

const buttonGroupVariants = cva("jss-button-group", {
  variants: {
    orientation: {
      horizontal: "jss-button-group--horizontal",
      vertical: "jss-button-group--vertical"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});

export type ButtonGroupProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof buttonGroupVariants>;

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(function ButtonGroup(
  { className, orientation, ...props },
  ref
) {
  return <div ref={ref} role="group" className={cn(buttonGroupVariants({ orientation }), className)} {...props} />;
});

