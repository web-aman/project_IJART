import * as yup from "yup";

const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=(.*[W]){1,})(?!.*s).{8,}$/;

const PHONE_REGEX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginFormSchema = yup
  .object({
    phoneNumber: yup
      .string()
      .min(10, "Please enter a valid phone number")
      .required("PhoneNumber is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should of min 8 character"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();
