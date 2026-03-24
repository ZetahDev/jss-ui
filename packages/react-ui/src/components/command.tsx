import { Command as CommandPrimitive } from "cmdk";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export type CommandProps = ComponentPropsWithoutRef<typeof CommandPrimitive>;
export const Command = forwardRef<ElementRef<typeof CommandPrimitive>, CommandProps>(function Command(
  { className, ...props },
  ref
) {
  return <CommandPrimitive ref={ref} className={cn("jss-command", className)} {...props} />;
});

export type CommandInputProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;
export const CommandInput = forwardRef<ElementRef<typeof CommandPrimitive.Input>, CommandInputProps>(
  function CommandInput({ className, ...props }, ref) {
    return <CommandPrimitive.Input ref={ref} className={cn("jss-command__input", className)} {...props} />;
  }
);

export type CommandListProps = ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
export const CommandList = forwardRef<ElementRef<typeof CommandPrimitive.List>, CommandListProps>(function CommandList(
  { className, ...props },
  ref
) {
  return <CommandPrimitive.List ref={ref} className={cn("jss-command__list", className)} {...props} />;
});

export type CommandEmptyProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
export const CommandEmpty = forwardRef<ElementRef<typeof CommandPrimitive.Empty>, CommandEmptyProps>(
  function CommandEmpty({ className, ...props }, ref) {
    return <CommandPrimitive.Empty ref={ref} className={cn("jss-command__empty", className)} {...props} />;
  }
);

export type CommandGroupProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
export const CommandGroup = forwardRef<ElementRef<typeof CommandPrimitive.Group>, CommandGroupProps>(
  function CommandGroup({ className, ...props }, ref) {
    return <CommandPrimitive.Group ref={ref} className={cn("jss-command__group", className)} {...props} />;
  }
);

export type CommandItemProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
export const CommandItem = forwardRef<ElementRef<typeof CommandPrimitive.Item>, CommandItemProps>(function CommandItem(
  { className, ...props },
  ref
) {
  return <CommandPrimitive.Item ref={ref} className={cn("jss-command__item", className)} {...props} />;
});

export type CommandSeparatorProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
export const CommandSeparator = forwardRef<ElementRef<typeof CommandPrimitive.Separator>, CommandSeparatorProps>(
  function CommandSeparator({ className, ...props }, ref) {
    return <CommandPrimitive.Separator ref={ref} className={cn("jss-command__separator", className)} {...props} />;
  }
);

