import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

export type BaseSlotProps = HTMLAttributes<HTMLDivElement>;

export const BaseSlot = forwardRef<HTMLDivElement, BaseSlotProps>(function BaseSlot(
  { children, ...props },
  ref
) {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});
