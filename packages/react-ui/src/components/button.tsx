import { buttonTokens } from "@zetahdev/tokens";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes, type CSSProperties } from "react";

import { cn } from "../utils";

const buttonVariants = cva("jss-button", {
  variants: {
    variant: {
      solid: "jss-button--solid",
      outline: "jss-button--outline",
      ghost: "jss-button--ghost"
    },
    size: {
      sm: "jss-button--sm",
      md: "jss-button--md",
      lg: "jss-button--lg"
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  }
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const baseStyle: CSSProperties = {
  backgroundColor: buttonTokens.background.default,
  borderRadius: buttonTokens.radius.default,
  color: buttonTokens.text.default,
  paddingBlock: buttonTokens.padding.y,
  paddingInline: buttonTokens.padding.x
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, size, style, type = "button", variant, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ size, variant }), className)}
      style={{ ...baseStyle, ...style }}
      type={type}
      {...props}
    />
  );
});

Button.displayName = "Button";
