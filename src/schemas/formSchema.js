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

    // if (
    //   typeof Object.keys(formData[key]).map((key) => formData[key][key]) ===
    //   "object"
    // ) {
    //   console.log("its object");
    // }
    // if (addressFild) {
    //   Object.keys(addressFild).map((key) => {
    //     if (addressFild[key].required) {
    //       addressSchema[addressFild[key].name] = yup
    //         .string()
    //         .required(addressFild[key]?.errorText);
    //     }
    //   });
    //   formErrorSchema["address"] = yup.object().shape(addressSchema);
    // }
  });

  return yup.object().shape(formErrorSchema);
};
