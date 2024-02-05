import { useState } from "react";
import IconSelector from "components/ui/IconSelector";
import FormInput from "./FormInput";
import { VariantProps, cva } from "class-variance-authority";
import cn from "utlis/cn";
import FormValidationError from "./FormValidationError";
import { FieldError } from "react-hook-form";

const passwordInputVariant = cva(
  "p-3 flex items-center rounded-lg overflow-hidden ",
  {
    variants: {
      variant: {
        light: "border border_border_Dark [&:has(input:focus)]:border-black",
        dark: "border border_border_light",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  },
);

export interface InputWrapper
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof passwordInputVariant> {
  label: string;
  error?: string | FieldError | undefined;
}

const InputWrapper = ({
  error,
  label,
  className,
  variant,
  ...props
}: InputWrapper) => {
  const [isFocus, setIsFocus] = useState<Boolean>(false);

  return (
    <div className={`mt-2 ${cn(className)}`}>
      <span className="block text-text_primary_dark text-base font-bold mb-2 text-start pl-1">
        {label}
      </span>
      <div
        className={cn(
          passwordInputVariant({ variant }),
          `${isFocus && "border-black"}`,
        )}
        {...props}
      >
        {props.children}
      </div>
      {error && <FormValidationError>{error.toString()}</FormValidationError>}
    </div>
  );
};

export default InputWrapper;
