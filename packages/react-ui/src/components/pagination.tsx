import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type AnchorHTMLAttributes, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const Pagination = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(function Pagination(
  { className, ...props },
  ref
) {
  return <nav ref={ref} role="navigation" aria-label="Pagination" className={cn("jss-pagination", className)} {...props} />;
});

export const PaginationContent = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  function PaginationContent({ className, ...props }, ref) {
    return <ul ref={ref} className={cn("jss-pagination__content", className)} {...props} />;
  }
);

export const PaginationItem = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(function PaginationItem(
  { className, ...props },
  ref
) {
  return <li ref={ref} className={cn("jss-pagination__item", className)} {...props} />;
});

const paginationLinkVariants = cva("jss-pagination__link", {
  variants: {
    active: {
      true: "jss-pagination__link--active",
      false: ""
    }
  },
  defaultVariants: {
    active: false
  }
});

export type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof paginationLinkVariants>;

export const PaginationLink = forwardRef<HTMLAnchorElement, PaginationLinkProps>(function PaginationLink(
  { active, className, ...props },
  ref
) {
  return <a ref={ref} aria-current={active ? "page" : undefined} className={cn(paginationLinkVariants({ active }), className)} {...props} />;
});

export const PaginationPrevious = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  function PaginationPrevious({ children = "Previous", className, ...props }, ref) {
    return (
      <PaginationLink ref={ref} className={cn("jss-pagination__link--direction", className)} {...props}>
        {children}
      </PaginationLink>
    );
  }
);

export const PaginationNext = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  function PaginationNext({ children = "Next", className, ...props }, ref) {
    return (
      <PaginationLink ref={ref} className={cn("jss-pagination__link--direction", className)} {...props}>
        {children}
      </PaginationLink>
    );
  }
);

export const PaginationEllipsis = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  function PaginationEllipsis({ className, children = "...", ...props }, ref) {
    return (
      <span ref={ref} aria-hidden="true" className={cn("jss-pagination__ellipsis", className)} {...props}>
        {children}
      </span>
    );
  }
);

