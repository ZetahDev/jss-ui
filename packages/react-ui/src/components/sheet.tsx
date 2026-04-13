import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CloseIcon } from "@zetahdev/icons";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const Sheet: typeof DialogPrimitive.Root = DialogPrimitive.Root;
export const SheetTrigger: typeof DialogPrimitive.Trigger = DialogPrimitive.Trigger;
export const SheetClose: typeof DialogPrimitive.Close = DialogPrimitive.Close;
export const SheetPortal: typeof DialogPrimitive.Portal = DialogPrimitive.Portal;

export type SheetOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
export const SheetOverlay = forwardRef<ElementRef<typeof DialogPrimitive.Overlay>, SheetOverlayProps>(
  function SheetOverlay({ className, ...props }, ref) {
    return <DialogPrimitive.Overlay ref={ref} className={cn("jss-sheet__overlay", className)} {...props} />;
  }
);

const sheetContentVariants = cva("jss-sheet__content", {
  variants: {
    side: {
      top: "jss-sheet__content--top",
      right: "jss-sheet__content--right",
      bottom: "jss-sheet__content--bottom",
      left: "jss-sheet__content--left"
    }
  },
  defaultVariants: {
    side: "right"
  }
});

export type SheetContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
  VariantProps<typeof sheetContentVariants>;
export const SheetContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, SheetContentProps>(
  function SheetContent({ className, children, side, ...props }, ref) {
    return (
      <SheetPortal>
        <SheetOverlay />
        <DialogPrimitive.Content ref={ref} className={cn(sheetContentVariants({ side }), className)} {...props}>
          {children}
          <DialogPrimitive.Close className="jss-sheet__close" aria-label="Close sheet">
            <CloseIcon size={14} />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </SheetPortal>
    );
  }
);

export const SheetHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function SheetHeader(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-sheet__header", className)} {...props} />;
});

export const SheetFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function SheetFooter(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-sheet__footer", className)} {...props} />;
});

export type SheetTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
export const SheetTitle = forwardRef<ElementRef<typeof DialogPrimitive.Title>, SheetTitleProps>(function SheetTitle(
  { className, ...props },
  ref
) {
  return <DialogPrimitive.Title ref={ref} className={cn("jss-sheet__title", className)} {...props} />;
});

export type SheetDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
export const SheetDescription = forwardRef<ElementRef<typeof DialogPrimitive.Description>, SheetDescriptionProps>(
  function SheetDescription({ className, ...props }, ref) {
    return <DialogPrimitive.Description ref={ref} className={cn("jss-sheet__description", className)} {...props} />;
  }
);
