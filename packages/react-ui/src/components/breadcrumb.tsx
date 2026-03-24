import { forwardRef, type AnchorHTMLAttributes, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const Breadcrumb = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(function Breadcrumb(
  { className, ...props },
  ref
) {
  return <nav ref={ref} aria-label="Breadcrumb" className={cn("jss-breadcrumb", className)} {...props} />;
});

export const BreadcrumbList = forwardRef<HTMLOListElement, HTMLAttributes<HTMLOListElement>>(
  function BreadcrumbList({ className, ...props }, ref) {
    return <ol ref={ref} className={cn("jss-breadcrumb__list", className)} {...props} />;
  }
);

export const BreadcrumbItem = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(function BreadcrumbItem(
  { className, ...props },
  ref
) {
  return <li ref={ref} className={cn("jss-breadcrumb__item", className)} {...props} />;
});

export const BreadcrumbLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  function BreadcrumbLink({ className, ...props }, ref) {
    return <a ref={ref} className={cn("jss-breadcrumb__link", className)} {...props} />;
  }
);

export const BreadcrumbPage = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(function BreadcrumbPage(
  { className, ...props },
  ref
) {
  return <span ref={ref} aria-current="page" className={cn("jss-breadcrumb__page", className)} {...props} />;
});

export const BreadcrumbSeparator = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
  function BreadcrumbSeparator({ className, children = "/", ...props }, ref) {
    return (
      <li ref={ref} role="presentation" aria-hidden="true" className={cn("jss-breadcrumb__separator", className)} {...props}>
        {children}
      </li>
    );
  }
);
