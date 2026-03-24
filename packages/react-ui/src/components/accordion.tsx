import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export const Accordion = AccordionPrimitive.Root;

export type AccordionItemProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
export const AccordionItem = forwardRef<ElementRef<typeof AccordionPrimitive.Item>, AccordionItemProps>(
  function AccordionItem({ className, ...props }, ref) {
    return <AccordionPrimitive.Item ref={ref} className={cn("jss-accordion__item", className)} {...props} />;
  }
);

export type AccordionTriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>;
export const AccordionTrigger = forwardRef<ElementRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>(
  function AccordionTrigger({ className, children, ...props }, ref) {
    return (
      <AccordionPrimitive.Header className="jss-accordion__header">
        <AccordionPrimitive.Trigger ref={ref} className={cn("jss-accordion__trigger", className)} {...props}>
          <span>{children}</span>
          <span className="jss-accordion__icon" aria-hidden="true">
            +
          </span>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);

export type AccordionContentProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;
export const AccordionContent = forwardRef<ElementRef<typeof AccordionPrimitive.Content>, AccordionContentProps>(
  function AccordionContent({ className, children, ...props }, ref) {
    return (
      <AccordionPrimitive.Content ref={ref} className={cn("jss-accordion__content", className)} {...props}>
        <div className="jss-accordion__content-inner">{children}</div>
      </AccordionPrimitive.Content>
    );
  }
);
