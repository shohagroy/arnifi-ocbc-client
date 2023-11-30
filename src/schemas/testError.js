import * as yup from "yup";

export const testSchema = yup.object().shape({
  fullName: yup.string().required("This field is required"),
});
