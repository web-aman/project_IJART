import cn from "utlis/cn";
import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

export const formInputVariant = cva("font-sans focus:outline-none", {
  variants: {
    variant: {
      standAlone_light: "focus:border p-2",
      standAlone_dark: "focus:border p-2",
      combined_light: "text-text_primary_dark pl-1",
      combined_dark: " text-text_light pl-1",
    },
  },
  defaultVariants: {
    variant: "standAlone_light",
  },
});

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof formInputVariant> {}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, variant, ...props }, ref = null) => {
    return (
      <input
        className={cn(formInputVariant({ variant, className }))}
        ref={ref}
        {...props}
      ></input>
    );
  },
);

export default FormInput;
