import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().min(6).max(32).required(),
});

export const SignupSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().min(6).max(32).required(),
  confirmPassword: yup.string().min(6).max(32).required(),
});

export const passwordChangeSchema = yup.object().shape({
  oldPassword: yup.string().required("Old Password is required"),
  newPassword: yup.string().min(6).max(32).required("New Password is required"),
  retypeNewPassword: yup
    .string()
    .min(6)
    .max(32)
    .required("Retype Password is required"),
});
