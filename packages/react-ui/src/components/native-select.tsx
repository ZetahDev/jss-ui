import { forwardRef, type OptgroupHTMLAttributes, type SelectHTMLAttributes } from "react";

import { cn } from "../utils";

export const NativeSelect = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(function NativeSelect(
  { className, ...props },
  ref
) {
  return (
    <div className="jss-native-select">
      <select ref={ref} className={cn("jss-native-select__control", className)} {...props} />
      <span className="jss-native-select__icon" aria-hidden="true">
        v
      </span>
    </div>
  );
});

export const NativeSelectOptionGroup = forwardRef<HTMLOptGroupElement, OptgroupHTMLAttributes<HTMLOptGroupElement>>(
  function NativeSelectOptionGroup({ className, ...props }, ref) {
    return <optgroup ref={ref} className={cn("jss-native-select__group", className)} {...props} />;
  }
);
