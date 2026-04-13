import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon } from "@zetahdev/icons";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export const Menubar: typeof MenubarPrimitive.Root = MenubarPrimitive.Root;
export const MenubarMenu: typeof MenubarPrimitive.Menu = MenubarPrimitive.Menu;
export const MenubarGroup: typeof MenubarPrimitive.Group = MenubarPrimitive.Group;
export const MenubarPortal: typeof MenubarPrimitive.Portal = MenubarPrimitive.Portal;
export const MenubarSub: typeof MenubarPrimitive.Sub = MenubarPrimitive.Sub;
export const MenubarRadioGroup: typeof MenubarPrimitive.RadioGroup = MenubarPrimitive.RadioGroup;

export type MenubarTriggerProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;
export const MenubarTrigger = forwardRef<ElementRef<typeof MenubarPrimitive.Trigger>, MenubarTriggerProps>(
  function MenubarTrigger({ className, ...props }, ref) {
    return <MenubarPrimitive.Trigger ref={ref} className={cn("jss-menubar__trigger", className)} {...props} />;
  }
);

export type MenubarContentProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>;
export const MenubarContent = forwardRef<ElementRef<typeof MenubarPrimitive.Content>, MenubarContentProps>(
  function MenubarContent({ className, ...props }, ref) {
    return (
      <MenubarPrimitive.Portal>
        <MenubarPrimitive.Content ref={ref} className={cn("jss-menubar__content", className)} {...props} />
      </MenubarPrimitive.Portal>
    );
  }
);

export type MenubarSubTriggerProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger>;
export const MenubarSubTrigger = forwardRef<ElementRef<typeof MenubarPrimitive.SubTrigger>, MenubarSubTriggerProps>(
  function MenubarSubTrigger({ className, ...props }, ref) {
    return <MenubarPrimitive.SubTrigger ref={ref} className={cn("jss-menubar__item", className)} {...props} />;
  }
);

export type MenubarSubContentProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>;
export const MenubarSubContent = forwardRef<ElementRef<typeof MenubarPrimitive.SubContent>, MenubarSubContentProps>(
  function MenubarSubContent({ className, ...props }, ref) {
    return <MenubarPrimitive.SubContent ref={ref} className={cn("jss-menubar__content", className)} {...props} />;
  }
);

export type MenubarItemProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>;
export const MenubarItem = forwardRef<ElementRef<typeof MenubarPrimitive.Item>, MenubarItemProps>(function MenubarItem(
  { className, ...props },
  ref
) {
  return <MenubarPrimitive.Item ref={ref} className={cn("jss-menubar__item", className)} {...props} />;
});

export type MenubarCheckboxItemProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;
export const MenubarCheckboxItem = forwardRef<ElementRef<typeof MenubarPrimitive.CheckboxItem>, MenubarCheckboxItemProps>(
  function MenubarCheckboxItem({ className, children, ...props }, ref) {
    return (
      <MenubarPrimitive.CheckboxItem ref={ref} className={cn("jss-menubar__item", className)} {...props}>
        <span className="jss-menubar__item-indicator">
          <MenubarPrimitive.ItemIndicator>
            <CheckIcon size={12} />
          </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
      </MenubarPrimitive.CheckboxItem>
    );
  }
);

export type MenubarRadioItemProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;
export const MenubarRadioItem = forwardRef<ElementRef<typeof MenubarPrimitive.RadioItem>, MenubarRadioItemProps>(
  function MenubarRadioItem({ className, children, ...props }, ref) {
    return (
      <MenubarPrimitive.RadioItem ref={ref} className={cn("jss-menubar__item", className)} {...props}>
        <span className="jss-menubar__item-indicator">
          <MenubarPrimitive.ItemIndicator>
            <CheckIcon size={12} />
          </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
      </MenubarPrimitive.RadioItem>
    );
  }
);

export type MenubarLabelProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.Label>;
export const MenubarLabel = forwardRef<ElementRef<typeof MenubarPrimitive.Label>, MenubarLabelProps>(
  function MenubarLabel({ className, ...props }, ref) {
    return <MenubarPrimitive.Label ref={ref} className={cn("jss-menubar__label", className)} {...props} />;
  }
);

export type MenubarSeparatorProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
export const MenubarSeparator = forwardRef<ElementRef<typeof MenubarPrimitive.Separator>, MenubarSeparatorProps>(
  function MenubarSeparator({ className, ...props }, ref) {
    return <MenubarPrimitive.Separator ref={ref} className={cn("jss-menubar__separator", className)} {...props} />;
  }
);
