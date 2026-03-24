import { OTPInput, OTPInputContext, type OTPInputProps } from "input-otp";
import { forwardRef, useContext, type HTMLAttributes } from "react";

import { cn } from "../utils";

export const InputOTP = forwardRef<HTMLInputElement, OTPInputProps>(function InputOTP(
  { className, containerClassName, ...props },
  ref
) {
  return (
    <OTPInput
      ref={ref}
      containerClassName={cn("jss-input-otp", containerClassName)}
      className={cn("jss-input-otp__hidden-input", className)}
      {...props}
    />
  );
});

export const InputOTPGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function InputOTPGroup(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-input-otp__group", className)} {...props} />;
});

export interface InputOTPSlotProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
}

export const InputOTPSlot = forwardRef<HTMLDivElement, InputOTPSlotProps>(function InputOTPSlot(
  { className, index, ...props },
  ref
) {
  const otpContext = useContext(OTPInputContext);
  const slot = otpContext?.slots?.[index];

  return (
    <div
      ref={ref}
      className={cn("jss-input-otp__slot", slot?.isActive ? "jss-input-otp__slot--active" : "", className)}
      {...props}
    >
      {slot?.char ?? ""}
      {slot?.hasFakeCaret ? <span className="jss-input-otp__caret" /> : null}
    </div>
  );
});

export const InputOTPSeparator = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function InputOTPSeparator({ className, children = "-", ...props }, ref) {
    return (
      <div ref={ref} role="separator" className={cn("jss-input-otp__separator", className)} {...props}>
        {children}
      </div>
    );
  }
);
