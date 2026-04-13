import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon } from "@zetahdev/icons";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export const ContextMenu: typeof ContextMenuPrimitive.Root = ContextMenuPrimitive.Root;
export const ContextMenuTrigger: typeof ContextMenuPrimitive.Trigger = ContextMenuPrimitive.Trigger;
export const ContextMenuGroup: typeof ContextMenuPrimitive.Group = ContextMenuPrimitive.Group;
export const ContextMenuPortal: typeof ContextMenuPrimitive.Portal = ContextMenuPrimitive.Portal;
export const ContextMenuSub: typeof ContextMenuPrimitive.Sub = ContextMenuPrimitive.Sub;
export const ContextMenuRadioGroup: typeof ContextMenuPrimitive.RadioGroup = ContextMenuPrimitive.RadioGroup;

export type ContextMenuContentProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
export const ContextMenuContent = forwardRef<ElementRef<typeof ContextMenuPrimitive.Content>, ContextMenuContentProps>(
  function ContextMenuContent({ className, ...props }, ref) {
    return (
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content ref={ref} className={cn("jss-context-menu__content", className)} {...props} />
      </ContextMenuPrimitive.Portal>
    );
  }
);

export type ContextMenuSubContentProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>;
export const ContextMenuSubContent = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentProps
>(function ContextMenuSubContent({ className, ...props }, ref) {
  return <ContextMenuPrimitive.SubContent ref={ref} className={cn("jss-context-menu__content", className)} {...props} />;
});

export type ContextMenuItemProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>;
export const ContextMenuItem = forwardRef<ElementRef<typeof ContextMenuPrimitive.Item>, ContextMenuItemProps>(
  function ContextMenuItem({ className, ...props }, ref) {
    return <ContextMenuPrimitive.Item ref={ref} className={cn("jss-context-menu__item", className)} {...props} />;
  }
);

export type ContextMenuSubTriggerProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>;
export const ContextMenuSubTrigger = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerProps
>(function ContextMenuSubTrigger({ className, ...props }, ref) {
  return <ContextMenuPrimitive.SubTrigger ref={ref} className={cn("jss-context-menu__item", className)} {...props} />;
});

export type ContextMenuCheckboxItemProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
export const ContextMenuCheckboxItem = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItemProps
>(function ContextMenuCheckboxItem({ className, children, ...props }, ref) {
  return (
    <ContextMenuPrimitive.CheckboxItem ref={ref} className={cn("jss-context-menu__item", className)} {...props}>
      <span className="jss-context-menu__item-indicator">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon size={12} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
});

export type ContextMenuRadioItemProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
export const ContextMenuRadioItem = forwardRef<ElementRef<typeof ContextMenuPrimitive.RadioItem>, ContextMenuRadioItemProps>(
  function ContextMenuRadioItem({ className, children, ...props }, ref) {
    return (
      <ContextMenuPrimitive.RadioItem ref={ref} className={cn("jss-context-menu__item", className)} {...props}>
        <span className="jss-context-menu__item-indicator">
          <ContextMenuPrimitive.ItemIndicator>
            <CheckIcon size={12} />
          </ContextMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </ContextMenuPrimitive.RadioItem>
    );
  }
);

export type ContextMenuLabelProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>;
export const ContextMenuLabel = forwardRef<ElementRef<typeof ContextMenuPrimitive.Label>, ContextMenuLabelProps>(
  function ContextMenuLabel({ className, ...props }, ref) {
    return <ContextMenuPrimitive.Label ref={ref} className={cn("jss-context-menu__label", className)} {...props} />;
  }
);

export type ContextMenuSeparatorProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
export const ContextMenuSeparator = forwardRef<ElementRef<typeof ContextMenuPrimitive.Separator>, ContextMenuSeparatorProps>(
  function ContextMenuSeparator({ className, ...props }, ref) {
    return <ContextMenuPrimitive.Separator ref={ref} className={cn("jss-context-menu__separator", className)} {...props} />;
  }
);
