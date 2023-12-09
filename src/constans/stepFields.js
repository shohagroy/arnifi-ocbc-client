import { ENUM_FORM_STEPS } from "./steps";

export const stepFieldsTypesOptions = [
  {
    value: "text",
    label: "Input Type Text Fild",
  },
  {
    value: "number",
    label: "Input Type text Number Fild",
  },
  {
    value: "select",
    label: "Select Item Type Fild",
  },
  {
    value: "radio",
    label: "Radio Button Type Fild",
  },
  {
    value: "address",
    label: "Address Fields",
  },
  {
    value: "textarea",
    label: "Input type Textarea",
  },
];

const personalStepFields = [
  {
    label: "Full Name",
    value: "fullName",
  },
  {
    label: "Gender",
    value: "gender",
  },
  {
    label: "Type Of ID",
    value: "idType",
  },
  {
    label: "ID Number",
    value: "idNumber",
  },
  {
    label: "Citizenship",
    value: "citizenship",
  },
  {
    label: "Address",
    value: "address",
  },
];

const executorsStepFields = [
  {
    label: "Full Name",
    value: "fullName",
  },
  {
    label: "Type Of ID",
    value: "idType",
  },
  {
    label: "ID Number",
    value: "idNumber",
  },
  {
    label: "Citizenship",
    value: "citizenship",
  },
  {
    label: "Address",
    value: "address",
  },
];

const alternativeExecutorsStepFields = [
  {
    label: "Full Name",
    value: "fullName",
  },
  {
    label: "Type Of ID",
    value: "idType",
  },
  {
    label: "ID Number",
    value: "idNumber",
  },
  {
    label: "Citizenship",
    value: "citizenship",
  },
  {
    label: "Address",
    value: "address",
  },
];

const beneficiariesStepFields = [
  {
    label: "Full Name",
    value: "fullName",
  },
  {
    label: "Relationship",
    value: "relationship",
  },
  {
    label: "Type Of ID",
    value: "idType",
  },
  {
    label: "ID Number",
    value: "idNumber",
  },
  {
    label: "Address",
    value: "address",
  },
];

const assetAllocationStepFields = [
  {
    label: "Beneficiary",
    value: "beneficiary",
    typeOption: [
      {
        value: "select",
        label: "Select Items",
      },
    ],
  },
  {
    label: "Sum Money",
    value: "sumMoney",
    typeOption: [
      {
        value: "text",
        label: "Input Type Text Fields",
      },
    ],
  },
  {
    label: "Address",
    value: "address",
    typeOption: [
      {
        label: "Address Fields",
        value: "address",
      },
    ],
  },
];

const instructionsStepFields = [
  {
    label: "Religion",
    value: "religion",
    typeOption: [
      {
        label: "Select Items",
        value: "select",
      },
    ],
  },
  {
    label: "Instructions",
    value: "instructions",
    typeOption: [
      {
        label: "Select Items",
        value: "select",
      },
    ],
  },
  {
    label: "Asset",
    value: "asset",
    typeOption: [
      {
        label: "Input Type Text Fild",
        value: "text",
      },
    ],
  },
  {
    label: "Category",
    value: "category",
    typeOption: [
      {
        label: "Select Items",
        value: "select",
      },
    ],
  },
  {
    label: "Estimated value of asset",
    value: "estimatedValue",
    typeOption: [
      {
        label: "Input Type Text Fild",
        value: "text",
      },
    ],
  },
  {
    label: "Description",
    value: "description",
    typeOption: [
      {
        label: "Input Type Textarea",
        value: "textarea",
      },
    ],
  },
];

const stepFieldsNameOptions = [
  {
    name: ENUM_FORM_STEPS.PERSONAL_DETAILS,
    value: personalStepFields,
  },
  {
    name: ENUM_FORM_STEPS.EXECUTORS,
    value: executorsStepFields,
  },
  {
    name: ENUM_FORM_STEPS.ALTERNATIVE_EXECUTORS,
    value: alternativeExecutorsStepFields,
  },
  {
    name: ENUM_FORM_STEPS.BENEFICIARIES,
    value: beneficiariesStepFields,
  },
  {
    name: ENUM_FORM_STEPS.ASSET_ALLOCATION,
    value: assetAllocationStepFields,
  },
  {
    name: ENUM_FORM_STEPS.INSTRUCTIONS,
    value: instructionsStepFields,
  },
];

export const generatorStepfieldsValueOptions = (stepName) => {
  const selectFields = stepFieldsNameOptions?.find(
    (item) => item.name === stepName
  );

  if (selectFields) {
    return selectFields?.value;
  } else {
    return [];
  }
};
