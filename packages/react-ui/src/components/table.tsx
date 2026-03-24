import { forwardRef, type HTMLAttributes, type TableHTMLAttributes, type ThHTMLAttributes, type TdHTMLAttributes } from "react";

import { cn } from "../utils";

export const Table = forwardRef<HTMLTableElement, TableHTMLAttributes<HTMLTableElement>>(function Table(
  { className, ...props },
  ref
) {
  return (
    <div className="jss-table__container">
      <table ref={ref} className={cn("jss-table", className)} {...props} />
    </div>
  );
});

export const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  function TableHeader({ className, ...props }, ref) {
    return <thead ref={ref} className={cn("jss-table__header", className)} {...props} />;
  }
);

export const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  function TableBody({ className, ...props }, ref) {
    return <tbody ref={ref} className={cn("jss-table__body", className)} {...props} />;
  }
);

export const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(function TableRow(
  { className, ...props },
  ref
) {
  return <tr ref={ref} className={cn("jss-table__row", className)} {...props} />;
});

export const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(function TableHead(
  { className, ...props },
  ref
) {
  return <th ref={ref} className={cn("jss-table__head", className)} {...props} />;
});

export const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(function TableCell(
  { className, ...props },
  ref
) {
  return <td ref={ref} className={cn("jss-table__cell", className)} {...props} />;
});

export const TableCaption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  function TableCaption({ className, ...props }, ref) {
    return <caption ref={ref} className={cn("jss-table__caption", className)} {...props} />;
  }
);
