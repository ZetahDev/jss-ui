import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@zetahdev/icons";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
export const DropdownMenuContent = forwardRef<ElementRef<typeof DropdownMenuPrimitive.Content>, DropdownMenuContentProps>(
  function DropdownMenuContent({ className, sideOffset = 6, ...props }, ref) {
    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn("jss-dropdown__content", className)}
          {...props}
        />
      </DropdownMenuPrimitive.Portal>
    );
  }
);

export type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>;
export const DropdownMenuItem = forwardRef<ElementRef<typeof DropdownMenuPrimitive.Item>, DropdownMenuItemProps>(
  function DropdownMenuItem({ className, ...props }, ref) {
    return <DropdownMenuPrimitive.Item ref={ref} className={cn("jss-dropdown__item", className)} {...props} />;
  }
);

export type DropdownMenuCheckboxItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(function DropdownMenuCheckboxItem({ className, children, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.CheckboxItem ref={ref} className={cn("jss-dropdown__item", className)} {...props}>
      <span className="jss-dropdown__item-indicator">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon size={12} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});

export type DropdownMenuRadioItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
export const DropdownMenuRadioItem = forwardRef<ElementRef<typeof DropdownMenuPrimitive.RadioItem>, DropdownMenuRadioItemProps>(
  function DropdownMenuRadioItem({ className, children, ...props }, ref) {
    return (
      <DropdownMenuPrimitive.RadioItem ref={ref} className={cn("jss-dropdown__item", className)} {...props}>
        <span className="jss-dropdown__item-indicator">
          <DropdownMenuPrimitive.ItemIndicator>
            <CheckIcon size={12} />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </DropdownMenuPrimitive.RadioItem>
    );
  }
);

export type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>;
export const DropdownMenuLabel = forwardRef<ElementRef<typeof DropdownMenuPrimitive.Label>, DropdownMenuLabelProps>(
  function DropdownMenuLabel({ className, ...props }, ref) {
    return <DropdownMenuPrimitive.Label ref={ref} className={cn("jss-dropdown__label", className)} {...props} />;
  }
);

export type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
export const DropdownMenuSeparator = forwardRef<ElementRef<typeof DropdownMenuPrimitive.Separator>, DropdownMenuSeparatorProps>(
  function DropdownMenuSeparator({ className, ...props }, ref) {
    return <DropdownMenuPrimitive.Separator ref={ref} className={cn("jss-dropdown__separator", className)} {...props} />;
  }
);
