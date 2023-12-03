import * as yup from "yup";

export const idTypeSchema = yup.object().shape({
  tittle: yup.string().required("ID Type Tittle Fild is required"),
  countryId: yup.string().required("Country Fild is required"),
});
