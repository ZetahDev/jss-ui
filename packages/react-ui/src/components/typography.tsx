import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const H1 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(function H1(
  { className, ...props },
  ref
) {
  return <h1 ref={ref} className={cn("jss-type--h1", className)} {...props} />;
});

export const H2 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(function H2(
  { className, ...props },
  ref
) {
  return <h2 ref={ref} className={cn("jss-type--h2", className)} {...props} />;
});

export const H3 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(function H3(
  { className, ...props },
  ref
) {
  return <h3 ref={ref} className={cn("jss-type--h3", className)} {...props} />;
});

export const P = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(function P(
  { className, ...props },
  ref
) {
  return <p ref={ref} className={cn("jss-type--p", className)} {...props} />;
});

export const Small = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(function Small(
  { className, ...props },
  ref
) {
  return <small ref={ref} className={cn("jss-type--small", className)} {...props} />;
});

export const Muted = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(function Muted(
  { className, ...props },
  ref
) {
  return <p ref={ref} className={cn("jss-type--muted", className)} {...props} />;
});
