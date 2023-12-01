import * as yup from "yup";

export const profileSchema = yup.object().shape({
  name: yup.string().required("User field is required"),
  email: yup.string().required("Email field is required"),
  contact: yup.string().required("Contact number is required"),
  gender: yup.string().required("Select Gender"),
  address: yup.string().required("Address is required"),
});
