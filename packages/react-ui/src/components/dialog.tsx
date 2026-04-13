import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CloseIcon } from "@zetahdev/icons";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;

export type DialogOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
export const DialogOverlay = forwardRef<ElementRef<typeof DialogPrimitive.Overlay>, DialogOverlayProps>(
  function DialogOverlay({ className, ...props }, ref) {
    return <DialogPrimitive.Overlay ref={ref} className={cn("jss-dialog__overlay", className)} {...props} />;
  }
);

export type DialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
export const DialogContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  function DialogContent({ className, children, ...props }, ref) {
    return (
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content ref={ref} className={cn("jss-dialog__content", className)} {...props}>
          {children}
          <DialogPrimitive.Close className="jss-dialog__close" aria-label="Close dialog">
            <CloseIcon size={14} />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  }
);

export const DialogHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function DialogHeader(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-dialog__header", className)} {...props} />;
});

export const DialogFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function DialogFooter(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-dialog__footer", className)} {...props} />;
});

export type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
export const DialogTitle = forwardRef<ElementRef<typeof DialogPrimitive.Title>, DialogTitleProps>(function DialogTitle(
  { className, ...props },
  ref
) {
  return <DialogPrimitive.Title ref={ref} className={cn("jss-dialog__title", className)} {...props} />;
});

export type DialogDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
export const DialogDescription = forwardRef<ElementRef<typeof DialogPrimitive.Description>, DialogDescriptionProps>(
  function DialogDescription({ className, ...props }, ref) {
    return <DialogPrimitive.Description ref={ref} className={cn("jss-dialog__description", className)} {...props} />;
  }
);
