import * as SliderPrimitive from "@radix-ui/react-slider";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "../utils";

export type SliderProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(function Slider(
  { className, defaultValue, max = 100, min = 0, step = 1, value, ...props },
  ref
) {
  const { ["aria-label"]: ariaLabel, ["aria-labelledby"]: ariaLabelledBy, ...restProps } = props;
  const values = Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min];
  const rootValueProps = value !== undefined ? { value } : {};
  const rootDefaultValueProps = value === undefined && defaultValue !== undefined ? { defaultValue } : {};

  const getThumbAriaLabel = (index: number) => {
    if (Array.isArray(ariaLabel)) {
      return ariaLabel[index];
    }
    if (typeof ariaLabel === "string" && values.length > 1) {
      return `${ariaLabel} ${index + 1}`;
    }
    return ariaLabel;
  };

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("jss-slider", className)}
      max={max}
      min={min}
      step={step}
      {...rootValueProps}
      {...rootDefaultValueProps}
      {...restProps}
    >
      <SliderPrimitive.Track className="jss-slider__track">
        <SliderPrimitive.Range className="jss-slider__range" />
      </SliderPrimitive.Track>
      {values.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          aria-label={getThumbAriaLabel(index)}
          aria-labelledby={ariaLabelledBy}
          className="jss-slider__thumb"
        />
      ))}
    </SliderPrimitive.Root>
  );
});
