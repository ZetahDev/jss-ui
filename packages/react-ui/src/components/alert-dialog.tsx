import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogPortal = AlertDialogPrimitive.Portal;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export type AlertDialogOverlayProps = ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>;
export const AlertDialogOverlay = forwardRef<ElementRef<typeof AlertDialogPrimitive.Overlay>, AlertDialogOverlayProps>(
  function AlertDialogOverlay({ className, ...props }, ref) {
    return <AlertDialogPrimitive.Overlay ref={ref} className={cn("jss-alert-dialog__overlay", className)} {...props} />;
  }
);

export type AlertDialogContentProps = ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>;
export const AlertDialogContent = forwardRef<ElementRef<typeof AlertDialogPrimitive.Content>, AlertDialogContentProps>(
  function AlertDialogContent({ className, ...props }, ref) {
    return (
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content ref={ref} className={cn("jss-alert-dialog__content", className)} {...props} />
      </AlertDialogPortal>
    );
  }
);

export const AlertDialogHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function AlertDialogHeader(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-alert-dialog__header", className)} {...props} />;
});

export const AlertDialogFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function AlertDialogFooter(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-alert-dialog__footer", className)} {...props} />;
});

export type AlertDialogTitleProps = ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>;
export const AlertDialogTitle = forwardRef<ElementRef<typeof AlertDialogPrimitive.Title>, AlertDialogTitleProps>(
  function AlertDialogTitle({ className, ...props }, ref) {
    return <AlertDialogPrimitive.Title ref={ref} className={cn("jss-alert-dialog__title", className)} {...props} />;
  }
);

export type AlertDialogDescriptionProps = ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
export const AlertDialogDescription = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Description>,
  AlertDialogDescriptionProps
>(function AlertDialogDescription({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={cn("jss-alert-dialog__description", className)}
      {...props}
    />
  );
});
