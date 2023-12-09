import * as yup from "yup";

export const countrySchema = yup.object().shape({
  name: yup.string().required("Country Name Fields is required"),
  countryCode: yup.string().required("Country Code Fields is required"),
});
