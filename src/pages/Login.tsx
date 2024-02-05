import FormInput from "components/form/FormInput";
import InputWrapper from "components/form/InputWrapper";
import IconSelector from "components/ui/IconSelector";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "features/authentication/utlis/formSchema";
import PhoneInput from "components/form/Phoneinput";
import { FormValues } from "features/authentication/types/types";

const Login = () => {
  const [isVisiblePass, setVisiblePass] = useState<boolean>(false);
  const [isVisibleConPass, setIsVisibleConPass] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    control,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(loginFormSchema),
  });

  const handleFormSubmit = (data: FormValues) => {
    console.log(data);
  };

  const onPhoneNumberChange = (number: string) => {
    setValue("phoneNumber", number);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputWrapper
          error={errors.phoneNumber?.message}
          variant={"light"}
          label="Phone Number"
        >
          <PhoneInput control={control} />
          <button>
            <IconSelector iconType="QuestionMark" />
          </button>
        </InputWrapper>

        <InputWrapper
          variant={"light"}
          label="Password"
          error={errors.password?.message}
        >
          <FormInput
            {...register("password")}
            type={!isVisiblePass ? "password" : "text"}
            variant={"combined_light"}
            className="grow p-0"
            placeholder={"Password"}
          />
          <button onClick={() => setVisiblePass(!isVisiblePass)}>
            {isVisiblePass ? (
              <IconSelector iconType="EyeOpen" />
            ) : (
              <IconSelector iconType="EyeClose" />
            )}
          </button>
        </InputWrapper>
        <InputWrapper
          variant={"light"}
          label="Confirm Password"
          error={errors.confirmPassword?.message}
        >
          <FormInput
            {...register("confirmPassword")}
            name="confirmPassword"
            type={!isVisibleConPass ? "password" : "text"}
            variant={"combined_light"}
            className="grow p-0"
            placeholder={"Confirm Password"}
          />
          <button onClick={() => setIsVisibleConPass(!isVisibleConPass)}>
            {isVisibleConPass ? (
              <IconSelector iconType="EyeOpen" />
            ) : (
              <IconSelector iconType="EyeClose" />
            )}
          </button>
        </InputWrapper>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
