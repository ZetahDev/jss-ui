import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export const ToggleGroup = forwardRef<ElementRef<typeof ToggleGroupPrimitive.Root>, ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>>(
  function ToggleGroup({ className, ...props }, ref) {
    return <ToggleGroupPrimitive.Root ref={ref} className={cn("jss-toggle-group", className)} {...props} />;
  }
);

const toggleGroupItemVariants = cva("jss-toggle-group__item", {
  variants: {
    variant: {
      default: "jss-toggle-group__item--default",
      outline: "jss-toggle-group__item--outline"
    },
    size: {
      sm: "jss-toggle-group__item--sm",
      md: "jss-toggle-group__item--md",
      lg: "jss-toggle-group__item--lg"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});

export type ToggleGroupItemProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleGroupItemVariants>;

export const ToggleGroupItem = forwardRef<ElementRef<typeof ToggleGroupPrimitive.Item>, ToggleGroupItemProps>(
  function ToggleGroupItem({ className, size, variant, ...props }, ref) {
    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(toggleGroupItemVariants({ size, variant }), className)}
        {...props}
      />
    );
  }
);
