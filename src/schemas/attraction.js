import * as yup from "yup";

export const attractionSchema = yup.object().shape({
  tittle: yup.string().required("This field is required"),
  banarTittle: yup.string().required("This field is required"),
  categoryId: yup.string().required("Select attraction category!"),
  cityId: yup.string().required("Select attraction city!"),
  countryId: yup.string().required("Select attraction country!"),
  duration: yup
    .string()
    .required("Provide attraction duration! (Ex: 4 Days, 3 Nights)"),
  price: yup.string().required("Provide attraction price!"),
  tripDate: yup.string().required("Provide trip date!"),
  tripTime: yup.string().required("Provide trip time!"),
});
