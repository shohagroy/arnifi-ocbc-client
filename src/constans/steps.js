export const ENUM_FORM_STEPS = {
  PERSONAL_DETAILS: "personalDetails",
  EXECUTORS: "executors",
  BENEFICIARIES: "beneficiaries",
  ASSET_ALLOCATION: "assetAllocation",
  INSTRUCTIONS: "instructions",
};

export const allStepsFields = [
  {
    label: "Full Name",
    value: "fullName",
  },
  {
    label: "Gender",
    value: "gender",
  },
  {
    label: "Relation",
    value: "relation",
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

export const formStepsOptions = [
  {
    label: "Personal Details",
    value: "personalDetails",
  },
  {
    label: "Executors",
    value: "executors",
  },
  {
    label: "Beneficiaries",
    value: "beneficiaries",
  },
  {
    label: "Asset Allocation",
    value: "assetAllocation",
  },
  {
    label: "Instructions",
    value: "instructions",
  },
];

export const formInputTypeOptions = [
  {
    value: "text",
    label: " Input Type Text Fild",
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
    label: "Address Fild",
  },
];
