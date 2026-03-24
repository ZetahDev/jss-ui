import { forwardRef, type HTMLAttributes, type LabelHTMLAttributes } from "react";

import { cn } from "../utils";

export const Field = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Field(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-field", className)} {...props} />;
});

export const FieldLabel = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(function FieldLabel(
  { className, ...props },
  ref
) {
  return <label ref={ref} className={cn("jss-field__label", className)} {...props} />;
});

export const FieldDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  function FieldDescription({ className, ...props }, ref) {
    return <p ref={ref} className={cn("jss-field__description", className)} {...props} />;
  }
);

export const FieldError = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(function FieldError(
  { className, ...props },
  ref
) {
  return <p ref={ref} role="alert" className={cn("jss-field__error", className)} {...props} />;
});
