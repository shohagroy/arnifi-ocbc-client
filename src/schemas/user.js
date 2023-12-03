import * as yup from "yup";

const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

export const createSchema = yup.object().shape({
  fullName: yup.string().required("Full Name field is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email field is required"),
  password: yup
    .string()
    .matches(
      strongPasswordRegex,
      "Password must be at least 8 characters and include a number and a letter"
    )
    .required("Password field is required"),
  repassword: yup
    .string()
    .matches(
      strongPasswordRegex,
      "Password must be at least 8 characters and include a number and a letter"
    )
    .required("Password field is required"),
  role: yup
    .string()
    .oneOf(["admin", "super_admin"], "Invalid role")
    .required("Role field is required"),
  contact: yup.string().required("Contact field is required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email field is required"),
  password: yup.string().required("Password field is required"),
});
