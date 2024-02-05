import React from "react";
import cn from "utlis/cn";
import { VariantProps, cva } from "class-variance-authority";

export const formValidationErrorVariant = cva(
  " pl-1 mt-0.5 block text-start ",
  {
    variants: {
      variant: {
        success: "text-sm text-green-600",
        failed: "text-sm text-red-600",
      },
    },
    defaultVariants: {
      variant: "failed",
    },
  },
);

export interface FormInputProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof formValidationErrorVariant> {}

const FormValidationError = ({
  children,
  variant,
  className,
  ...props
}: FormInputProps) => {
  return (
    <span
      {...props}
      className={cn(formValidationErrorVariant({ variant, className }))}
    >
      {children}
    </span>
  );
};

export default FormValidationError;
