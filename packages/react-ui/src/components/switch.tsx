import * as SwitchPrimitive from "@radix-ui/react-switch";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>;

export const Switch = forwardRef<ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(function Switch(
  { className, ...props },
  ref
) {
  return (
    <SwitchPrimitive.Root ref={ref} className={cn("jss-switch", className)} {...props}>
      <SwitchPrimitive.Thumb className="jss-switch__thumb" />
    </SwitchPrimitive.Root>
  );
});
