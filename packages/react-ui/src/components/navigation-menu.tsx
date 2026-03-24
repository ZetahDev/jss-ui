import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export const NavigationMenu: typeof NavigationMenuPrimitive.Root = NavigationMenuPrimitive.Root;
export const NavigationMenuList = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.List>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(function NavigationMenuList({ className, ...props }, ref) {
  return <NavigationMenuPrimitive.List ref={ref} className={cn("jss-navigation-menu__list", className)} {...props} />;
});

export const NavigationMenuItem: typeof NavigationMenuPrimitive.Item = NavigationMenuPrimitive.Item;

export type NavigationMenuTriggerProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>;
export const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(function NavigationMenuTrigger({ className, ...props }, ref) {
  return <NavigationMenuPrimitive.Trigger ref={ref} className={cn("jss-navigation-menu__trigger", className)} {...props} />;
});

export type NavigationMenuContentProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>;
export const NavigationMenuContent = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentProps
>(function NavigationMenuContent({ className, ...props }, ref) {
  return <NavigationMenuPrimitive.Content ref={ref} className={cn("jss-navigation-menu__content", className)} {...props} />;
});

export const NavigationMenuLink: typeof NavigationMenuPrimitive.Link = NavigationMenuPrimitive.Link;

export type NavigationMenuIndicatorProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>;
export const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  NavigationMenuIndicatorProps
>(function NavigationMenuIndicator({ className, ...props }, ref) {
  return <NavigationMenuPrimitive.Indicator ref={ref} className={cn("jss-navigation-menu__indicator", className)} {...props} />;
});

export type NavigationMenuViewportProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>;
export const NavigationMenuViewport = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  NavigationMenuViewportProps
>(function NavigationMenuViewport({ className, ...props }, ref) {
  return <NavigationMenuPrimitive.Viewport ref={ref} className={cn("jss-navigation-menu__viewport", className)} {...props} />;
});
