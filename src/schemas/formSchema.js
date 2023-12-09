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

export const generateSteperFormValidator = (formData) => {
  const formErrorSchema = {};

  formData?.map((item) => {
    if (item?.type !== "address" && item?.isRequired) {
      formErrorSchema[item?.name] = yup.string().required(item?.errorText);
    }

    if (item?.type == "address") {
      formErrorSchema["address"] = yup.object().shape({
        line1: yup.string().required("The Address field is required."),
        country: yup.string().required("Country field is required."),
        postalCode: yup.string().required("The Address field is required."),
      });
    }
  });

  return yup.object().shape(formErrorSchema);
};

export const formInputFildSchema = yup.object().shape({
  countryId: yup.string().required("Country Fild is required."),
  stepValue: yup.string().required("Step Fild is required."),
  name: yup.string().required("Value Name fild is required."),
  type: yup.string().required("Input type fild is required."),
  label: yup.string().required("Input lebel fild is required."),
  placeholder: yup.string().required("Input placeholder fild is required."),
  errorText: yup.string().required("Input placeholder fild is required."),
});

export const generateFormValidatorUpdated = (formData) => {
  const formErrorSchema = {};

  Object.keys(formData).map((firstKey) => {
    const secendValue = {};

    Object.keys(formData[firstKey]?.value).map((secendKey) => {
      const lastValue = {};
      const fields = formData[firstKey]?.value[secendKey];

      Object.keys(fields)?.map((fieldKey) => {
        lastValue[fieldKey] = yup
          .string()
          .required(`${firstKey} ${secendKey}  is required!`);
      });
      secendValue[secendKey] = yup.object().shape(lastValue);
    });

    console.log(firstKey);
    formErrorSchema[firstKey] = yup.object().shape(secendValue);
  });

  return yup.object().shape(formErrorSchema);
};

export const generateFormsResolver = (formData, prevData) => {
  const formErrorSchema = {};
  const prevErrorSchema = {};

  const formStep = formData?.stepFilds;
  const prevStep = prevData?.stepFilds;

  formStep?.forEach((item) => {
    if (item?.type !== "address" && item?.isRequired) {
      formErrorSchema[item?.name] = yup.string().required(item?.errorText);
    }

    if (item?.type === "address") {
      formErrorSchema["address"] = yup.object().shape({
        line1: yup.string().required("The Address field is required."),
        country: yup.string().required("Country field is required."),
        postalCode: yup.string().required("Postal Code field is required."),
      });
    }
  });

  prevStep?.forEach((item) => {
    if (item?.type !== "address" && item?.isRequired) {
      prevErrorSchema[item?.name] = yup.string().required(item?.errorText);
    }

    if (item?.type === "address") {
      prevErrorSchema["address"] = yup.object().shape({
        line1: yup.string().required("The Address field is required."),
        country: yup.string().required("Country field is required."),
        postalCode: yup.string().required("Postal Code field is required."),
      });
    }
  });

  const stepValidateSchema = yup.object().shape(formErrorSchema);
  const prevValidateSchema = yup.object().shape(prevErrorSchema);

  return yup.object().shape({
    [formData?.value]: stepValidateSchema,
    [prevData?.value]: prevValidateSchema,
  });
};
