import React from "react";
import { PhoneInputProps } from "react-phone-input-2";
import ReactPhoneInput from "react-phone-input-2";
import { formInputVariant } from "./FormInput";
import cn from "utlis/cn";
import "react-phone-input-2/lib/style.css";
import { Control, Controller } from "react-hook-form";

const PhoneInput = ({ control }: { control: Control<any> }) => {
  return (
    <Controller
      control={control}
      name="phoneNumber"
      rules={{ required: true }}
      render={({ field: { ref, ...field } }) => (
        <ReactPhoneInput
          {...field}
          country={"us"}
          inputClass={cn(
            formInputVariant({
              className: "flex-grow !border-none !p-0 !pl-2 !text-base !h-fit",
            }),
          )}
          containerClass="flex flex-row-reverse !static "
          buttonClass="!border-none !bg-transparent !static"
        />
      )}
    />
  );
};

export default PhoneInput;
