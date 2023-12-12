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

  if (prevData?.value) {
    return yup.object().shape({
      [formData?.value]: stepValidateSchema,
      [prevData?.value]: prevValidateSchema,
    });
  } else {
    return yup.object().shape({
      [formData?.value]: stepValidateSchema,
    });
  }

  // return yup.object().shape({
  //   [formData?.value]: stepValidateSchema,
  //   [prevData?.value]: prevValidateSchema,
  // });
};

export const generateFormsArrayResolver = (formData) => {
  const formErrorSchema = {};
  const value = formData?.value;
  const stepFields = formData?.stepFilds;

  stepFields?.forEach((item) => {
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

  return yup.object().shape({
    [value]: yup.array().of(yup.object().shape(formErrorSchema)),
  });
};

export const generateBeneficiaryShareResolver = () => {
  return yup.object().shape({
    beneficiaries: yup.array().of(
      yup.object().shape({
        share: yup
          .number()
          .required("This is required.")
          .positive("Share must be a positive number.")
          .max(100, "Share cannot be more than 100%."),
      })
    ),
  });
};

// export const generateInstructionsResolver = (fieldsData) => {
//   const { religionFields, instructionsFields, otherFields } = fieldsData || {};

//   const formErrorSchema = {};

//   const generateValidationArray = (fields) => {
//     const schema = {};

//     fields.forEach((field) => {
//       if (field?.isRequired) {
//         schema[field?.name] = yup.string().required(field?.errorText);
//       }
//     });

//     const arraySchema = generateValidationArray(otherFields);

//     formErrorSchema["specifyAssets"] = yup
//       .array()
//       .of(yup.object().shape(arraySchema));

//     if (religionFields?.isRequired) {
//       formErrorSchema["religion"] = yup
//         .string()
//         .required(religionFields?.errorText);
//     }

//     if (instructionsFields?.isRequired) {
//       formErrorSchema["instructions"] = yup
//         .string()
//         .required(instructionsFields?.errorText);
//     }

//     return yup.object().shape({
//       instructions: yup.object().shape(formErrorSchema),
//     });
//   };
// };

const generateValidationArray = (fields) => {
  const schema = {};

  fields.forEach((field) => {
    if (field?.isRequired) {
      schema[field?.name] = yup.string().required(field?.errorText);
    }
  });

  return schema;
};

export const generateInstructionsResolver = (fieldsData) => {
  const { religionFields, instructionsFields, otherFields } = fieldsData || {};

  const formErrorSchema = {};

  const arraySchema = generateValidationArray(otherFields);

  formErrorSchema["specifyAssets"] = yup
    .array()
    .of(yup.object().shape(arraySchema));

  if (religionFields?.isRequired) {
    formErrorSchema["religion"] = yup
      .string()
      .required(religionFields?.errorText);
  }

  if (instructionsFields?.isRequired) {
    formErrorSchema["instructions"] = yup
      .string()
      .required(instructionsFields?.errorText);
  }

  return yup.object().shape({
    instructions: yup.object().shape(formErrorSchema),
  });
};

const data = {
  beneficiaries: [
    {
      fullName: "this field is required.",
      relationship: "this field is required.",
      idType: "this field is required.",
      idNumber: "this field is required.",
      address: {
        line1: "this field is required.",
        country: "this field is required.",
        countryCode: "this field is required.",
      },
    },
  ],
};

const instructions = {
  religion: "",
  instructions: "",
  specifyAssets: [],
};

// console.log(assetAllocation);
