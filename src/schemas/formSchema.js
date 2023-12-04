import * as yup from "yup";

export const generateFormValidator = (formData) => {
  const formErrorSchema = {};

  Object.keys(formData).map((mainKey) => {
    if (formData[mainKey].required) {
      formErrorSchema[formData[mainKey].name] = yup
        .string()
        .required(formData[mainKey]?.errorText);
    }

    const addressSchema = {};

    const filds = formData[mainKey];

    Object?.keys(filds)?.map((key) => {
      if (filds[key]?.name) {
        Object.keys(filds).map((key) => {
          if (filds[key].required) {
            addressSchema[filds[key].name] = yup
              .string()
              .required(filds[key]?.errorText);
          }
        });
        formErrorSchema[mainKey] = yup.object().shape(addressSchema);
      }
    });
  });

  return yup.object().shape(formErrorSchema);
};

export const formInputFildSchema = yup.object().shape({
  countryId: yup.string().required("Country Fild is required."),
  stepId: yup.string().required("Step Fild is required."),
  name: yup.string().required("Value Name fild is required."),
  type: yup.string().required("Input type fild is required."),
  label: yup.string().required("Input lebel fild is required."),
  placeholder: yup.string().required("Input placeholder fild is required."),
  errorText: yup.string().required("Input placeholder fild is required."),
});
