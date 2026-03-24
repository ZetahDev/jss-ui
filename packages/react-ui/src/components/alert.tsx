import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

const alertVariants = cva("jss-alert", {
  variants: {
    variant: {
      default: "jss-alert--default",
      destructive: "jss-alert--destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export type AlertProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { className, variant, ...props },
  ref
) {
  return <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />;
});

export const AlertTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(function AlertTitle(
  { className, ...props },
  ref
) {
  return <h5 ref={ref} className={cn("jss-alert__title", className)} {...props} />;
});

export const AlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  function AlertDescription({ className, ...props }, ref) {
    return <p ref={ref} className={cn("jss-alert__description", className)} {...props} />;
  }
);
