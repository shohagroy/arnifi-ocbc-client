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
    const addressSchema = {};

    if (addressFild) {
      Object.keys(addressFild).map((key) => {
        if (addressFild[key].required) {
          addressSchema[addressFild[key].name] = yup
            .string()
            .required(addressFild[key]?.errorText);
        }
      });

      formErrorSchema["address"] = yup.object().shape(addressSchema);
    }
  });

  return yup.object().shape(formErrorSchema);
};
