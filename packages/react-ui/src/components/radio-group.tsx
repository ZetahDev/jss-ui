import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export type RadioGroupProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;
export type RadioGroupItemProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  function RadioGroup({ className, ...props }, ref) {
    return <RadioGroupPrimitive.Root ref={ref} className={cn("jss-radio-group", className)} {...props} />;
  }
);

export const RadioGroupItem = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
  function RadioGroupItem({ className, ...props }, ref) {
    return (
      <RadioGroupPrimitive.Item ref={ref} className={cn("jss-radio", className)} {...props}>
        <RadioGroupPrimitive.Indicator className="jss-radio__indicator" />
      </RadioGroupPrimitive.Item>
    );
  }
);
