import * as yup from "yup";

export const formStepSchema = yup.object().shape({
  tittle: yup.string().required("Form Step Tittle Fild is required"),
  // countryId: yup.string().required("Country Fild is required"),
});
