import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon } from "@js-solutions/icons";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export type SelectTriggerProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
export const SelectTrigger = forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
  function SelectTrigger({ className, children, ...props }, ref) {
    return (
      <SelectPrimitive.Trigger ref={ref} className={cn("jss-select__trigger", className)} {...props}>
        {children}
        <SelectPrimitive.Icon className="jss-select__icon">v</SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    );
  }
);

export type SelectContentProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
export const SelectContent = forwardRef<ElementRef<typeof SelectPrimitive.Content>, SelectContentProps>(
  function SelectContent({ className, children, position = "popper", ...props }, ref) {
    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          className={cn("jss-select__content", className)}
          position={position}
          {...props}
        >
          <SelectPrimitive.Viewport className="jss-select__viewport">{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  }
);

export type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
export const SelectItem = forwardRef<ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(function SelectItem(
  { className, children, ...props },
  ref
) {
  return (
    <SelectPrimitive.Item ref={ref} className={cn("jss-select__item", className)} {...props}>
      <span className="jss-select__item-indicator">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon size={12} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
