import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
export const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(function Avatar(
  { className, ...props },
  ref
) {
  return <AvatarPrimitive.Root ref={ref} className={cn("jss-avatar", className)} {...props} />;
});

export type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
export const AvatarImage = forwardRef<ElementRef<typeof AvatarPrimitive.Image>, AvatarImageProps>(
  function AvatarImage({ className, ...props }, ref) {
    return <AvatarPrimitive.Image ref={ref} className={cn("jss-avatar__image", className)} {...props} />;
  }
);

export type AvatarFallbackProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
export const AvatarFallback = forwardRef<ElementRef<typeof AvatarPrimitive.Fallback>, AvatarFallbackProps>(
  function AvatarFallback({ className, ...props }, ref) {
    return <AvatarPrimitive.Fallback ref={ref} className={cn("jss-avatar__fallback", className)} {...props} />;
  }
);
