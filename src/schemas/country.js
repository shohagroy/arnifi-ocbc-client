import * as yup from "yup";

export const countrySchema = yup.object().shape({
  name: yup.string().required("Country Name Fild is required"),
  postalCode: yup.string().required("Country Postal Code Fild is required"),
  countryCode: yup.string().required("Country Code Fild is required"),
});
