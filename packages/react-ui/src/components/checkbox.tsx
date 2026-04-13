import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@zetahdev/icons";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(function Checkbox(
  { className, ...props },
  ref
) {
  return (
    <CheckboxPrimitive.Root ref={ref} className={cn("jss-checkbox", className)} {...props}>
      <CheckboxPrimitive.Indicator className="jss-checkbox__indicator">
        <CheckIcon size={14} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
