import * as yup from "yup";

export const generateFormValidator = (formData) => {
  const formErrorSchema = {};

  Object.keys(formData).map((key) => {
    if (formData[key].required) {
      formErrorSchema[formData[key].name] = yup
        .string()
        .required(formData[key]?.errorText);
    }

    const addressFild = formData["address"];

    if (addressFild) {
      Object.keys(addressFild).map((key) => {
        const requiredAddress = addressFild[key].required;

        if (addressFild[key].required) {
          formErrorSchema[addressFild[key].name] = yup
            .string()
            .required(addressFild[key]?.errorText);
        }
      });
    }
  });

  return yup.object().shape(formErrorSchema);
};
