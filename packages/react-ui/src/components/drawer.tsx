import * as DialogPrimitive from "@radix-ui/react-dialog";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const Drawer: typeof DialogPrimitive.Root = DialogPrimitive.Root;
export const DrawerTrigger: typeof DialogPrimitive.Trigger = DialogPrimitive.Trigger;
export const DrawerClose: typeof DialogPrimitive.Close = DialogPrimitive.Close;
export const DrawerPortal: typeof DialogPrimitive.Portal = DialogPrimitive.Portal;

export type DrawerOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
export const DrawerOverlay = forwardRef<ElementRef<typeof DialogPrimitive.Overlay>, DrawerOverlayProps>(
  function DrawerOverlay({ className, ...props }, ref) {
    return <DialogPrimitive.Overlay ref={ref} className={cn("jss-drawer__overlay", className)} {...props} />;
  }
);

export type DrawerContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
export const DrawerContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, DrawerContentProps>(
  function DrawerContent({ className, children, ...props }, ref) {
    return (
      <DrawerPortal>
        <DrawerOverlay />
        <DialogPrimitive.Content ref={ref} className={cn("jss-drawer__content", className)} {...props}>
          <span className="jss-drawer__handle" aria-hidden="true" />
          {children}
        </DialogPrimitive.Content>
      </DrawerPortal>
    );
  }
);

export const DrawerHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function DrawerHeader(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-drawer__header", className)} {...props} />;
});

export const DrawerFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function DrawerFooter(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-drawer__footer", className)} {...props} />;
});

export type DrawerTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
export const DrawerTitle = forwardRef<ElementRef<typeof DialogPrimitive.Title>, DrawerTitleProps>(function DrawerTitle(
  { className, ...props },
  ref
) {
  return <DialogPrimitive.Title ref={ref} className={cn("jss-drawer__title", className)} {...props} />;
});

export type DrawerDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
export const DrawerDescription = forwardRef<ElementRef<typeof DialogPrimitive.Description>, DrawerDescriptionProps>(
  function DrawerDescription({ className, ...props }, ref) {
    return <DialogPrimitive.Description ref={ref} className={cn("jss-drawer__description", className)} {...props} />;
  }
);
