"use client";

import AssetAllocation from "@/components/stepperForm/AssetAllocation";
import Beneficiaries from "@/components/stepperForm/Beneficiaries";
import Executors from "@/components/stepperForm/Executors";
import Instructions from "@/components/stepperForm/Instructions";
import PersonalDetails from "@/components/stepperForm/PersonalDetails";
import ReviewAndSubmit from "@/components/stepperForm/ReviewAndSubmit";
import StepperForm from "@/components/stepperForm/stepperForm";
import React from "react";
import MIcon from "../../../assets/male-icon.png";
import FIcon from "../../../assets/female-icon.png";
import {
  useGetAllFormStepsQuery,
  useGetCountryFormStepsQuery,
} from "@/redux/features/formStep/formStepApi";
import DisplayStepFormField from "@/components/ui/will/DisplayStepFormField";

const DetailsSubmitPage = () => {
  const countryOptions = [
    {
      value: "United Arab Emirates",
      label: "United Arab Emirates",
    },
    {
      value: "Saudi Arabia",
      label: "Saudi Arabia",
    },
    {
      value: "Qatar",
      label: "Qatar",
    },
    {
      value: "Oman",
      label: "Oman",
    },
    {
      value: "Bahrain",
      label: "Bahrain",
    },
    {
      value: "Kuwait",
      label: "Kuwait",
    },
    {
      value: "UAE",
      label: "UAE",
    },
    {
      value: "KSA",
      label: "KSA",
    },
    {
      value: "Yemen",
      label: "Yemen",
    },
    {
      value: "Jordan",
      label: "Jordan",
    },
    {
      value: "Lebanon",
      label: "Lebanon",
    },
    {
      value: "Egypt",
      label: "Egypt",
    },
    {
      value: "Syria",
      label: "Syria",
    },
    {
      value: "Palestine",
      label: "Palestine",
    },
    {
      value: "Israel",
      label: "Israel",
    },
    {
      value: "Jordan",
      label: "Jordan",
    },
  ];

  const cityOptions = [
    {
      value: "Abu Dhabi",
      label: "Abu Dhabi",
    },

    {
      value: "Ajman",
      label: "Ajman",
    },
    {
      value: "Umm Al Quwain",
      label: "Umm Al Quwain",
    },

    {
      value: "Ras Al Khaimah",
      label: "Ras Al Khaimah",
    },

    {
      value: "Hail",
      label: "Hail",
    },
    {
      value: "Khobar",
      label: "Khobar",
    },

    {
      value: "Dubai",
      label: "Dubai",
    },
    {
      value: "Sharjah",
      label: "Sharjah",
    },

    {
      value: "Fujairah",
      label: "Fujairah",
    },

    {
      value: "Al Ain",
      label: "Al Ain",
    },
  ];

  const genderOptions = [
    {
      label: "Male",
      value: "male",
      icon: MIcon,
    },
    {
      label: "Female",
      value: "female",
      icon: FIcon,
    },
  ];

  const idTypeOptions = [
    {
      value: "Emirates ID",
      label: "Emirates ID",
    },
    {
      value: "Passport No",
      label: "Passport No",
    },
  ];

  const relationOptions = [
    {
      value: "Spouse",
      label: "Spouse",
    },
    {
      value: "Child",
      label: "Child",
    },
    {
      value: "Parent",
      label: "Parent",
    },
    {
      value: "Relative",
      label: "Relative",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

  const personalDataForm = {
    fullName: {
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter your full name",
      errorText: "Full Name field is required",
    },

    gender: {
      name: "gender",
      label: "Gender",
      type: "radio",
      required: true,
      options: genderOptions,
      errorText: "This field is required",
    },
    idType: {
      name: "idType",
      label: "Type Of ID",
      type: "select",
      required: true,
      options: idTypeOptions,
      errorText: "Type Of ID field is required",
    },
    idNumber: {
      name: "idNumber",
      label: "Emirates ID / Passport No",
      type: "text",
      required: true,
      placeholder: "e.g.S1234567A",
      errorText: "Emirates ID / Passport No field is required",
    },
    citizenship: {
      name: "citizenship",
      label: "Citizenship",
      type: "select",
      required: true,
      options: cityOptions,
      errorText: "This field is required",
    },

    address: {
      line1: {
        name: "line1",
        label: "Address",
        type: "text",
        required: true,
        placeholder: "address line 1",
        errorText: "Address field is required",
      },

      addressLine: {
        name: "line2",
        type: "text",
        placeholder: "address line 2",
      },

      country: {
        name: "country",
        type: "select",
        required: true,
        options: countryOptions,
        errorText: "Country field is required",
      },

      line1: {
        name: "line1",
        type: "text",
        required: true,
        placeholder: "postal code",
        errorText: "address line 1 field is required",
      },

      postalCode: {
        name: "postalCode",
        type: "number",
        required: true,
        placeholder: "postal code",
        errorText: "Postal field is required",
      },
    },
  };

  const executorsDataForm = {
    mainExecutorFullName: {
      name: "mainExecutorFullName",
      label: "Full Name of Main Executor",
      type: "text",
      required: true,
      placeholder: "Enter your Main Executor Name",
      errorText: "Main Executor Name field is required",
    },

    mainExecutorIdType: {
      name: "mainExecutorIdType",
      label: "Type Of ID",
      type: "select",
      required: true,
      options: idTypeOptions,
      errorText: "Type Of ID field is required",
    },

    mainExecutorIdNumber: {
      name: "mainExecutorIdNumber",
      label: "Emirates ID / Passport No",
      type: "text",
      required: true,
      placeholder: "e.g.S1234567A",
      errorText: "Emirates ID / Passport No field is required",
    },

    mainExecutorAddress: {
      line1: {
        name: "line1",
        label: "Address",
        type: "text",
        required: true,
        placeholder: "address line 1",
        errorText: "Address field is required",
      },

      addressLine: {
        name: "line2",
        type: "text",
        placeholder: "address line 2",
      },

      country: {
        name: "country",
        type: "select",
        required: true,
        options: countryOptions,
        errorText: "Country field is required",
      },

      line1: {
        name: "line1",
        type: "text",
        required: true,
        placeholder: "postal code",
        errorText: "address line 1 field is required",
      },

      postalCode: {
        name: "postalCode",
        type: "number",
        required: true,
        placeholder: "postal code",
        errorText: "Postal field is required",
      },
    },
  };

  const relationshipDataForm = {
    firstBeneficiaryName: {
      name: "firstBeneficiaryName",
      label: "Full name of first beneficiary",
      type: "text",
      required: true,
      placeholder: "Enter your Main Executor Name",
      errorText: "Full Name of First beneficiary field is required.",
    },

    relationship: {
      name: "relationship",
      label: "Relationship",
      type: "select",
      required: true,
      options: relationOptions,
      errorText: "Relationship field is required.",
    },

    firstBeneficiaryIdType: {
      name: "firstBeneficiaryIdType",
      label: "Type of ID",
      type: "select",
      options: idTypeOptions,
      required: true,
      placeholder: "select",
      errorText: "The Type of ID field is required.",
    },

    firstBeneficiaryIdNumber: {
      name: "firstBeneficiaryIdNumber",
      label: "Emirates ID / Passport No",
      type: "text",
      required: true,
      placeholder: "e.g.S1234567A",
      errorText: "Emirates ID / Passport No field is required",
    },

    firstBeneficiaryAddress: {
      line1: {
        name: "line1",
        label: "Address",
        type: "text",
        required: true,
        placeholder: "address line 1",
        errorText: "Address field is required",
      },

      line2: {
        name: "line2",
        type: "text",
        placeholder: "address line 2",
      },

      country: {
        name: "country",
        type: "select",
        required: true,
        options: countryOptions,
        errorText: "Country field is required",
      },

      postalCode: {
        name: "postalCode",
        type: "number",
        required: true,
        placeholder: "postal code",
        errorText: "Postal field is required",
      },
    },
  };

  //id: "96ab6713-12fe-41b0-af5a-3594f29c88c1"
  const { data, isLoading } = useGetCountryFormStepsQuery(
    "90e9ce55-49b6-438c-b68d-93ac7a668836"
  );

  // console.log(data);

  const willSteps =
    data?.data?.data?.map((step) => {
      return {
        title: step?.tittle,
        content: (
          <DisplayStepFormField tittle={step?.tittle} data={step?.stepFilds} />
        ),
        data: step,
      };
    }) || [];

  willSteps?.push({
    title: "Review",
    content: <ReviewAndSubmit />,
  });
  // console.log(willSteps);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // const willFormSteps = data?.data?.data.map((step) => {
  //   console.log(step);
  //   return {
  //     id: step?.id,
  //     title: step?.tittle,
  //     content: (
  //       <PersonalDetails filds={personalDataForm} persistKey={"form-data"} />
  //     ),
  //   };
  // });

  // console.log(willFormSteps);

  const steps = [
    {
      title: "Personal Details",
      content: (
        <PersonalDetails filds={personalDataForm} persistKey={"form-data"} />
      ),
      data: personalDataForm,
    },
    {
      title: "Executors",
      content: <Executors filds={executorsDataForm} persistKey={"form-data"} />,
      data: executorsDataForm,
    },
    {
      title: "Beneficiaries",
      content: (
        <Beneficiaries filds={relationshipDataForm} persistKey={"form-data"} />
      ),
      data: relationshipDataForm,
    },
    {
      title: "Asset Allocation",
      content: <AssetAllocation />,
      data: relationshipDataForm,
    },
    {
      title: "Instructions",
      content: <Instructions />,
      data: relationshipDataForm,
    },
    {
      title: "Review",
      content: <ReviewAndSubmit />,
      data: relationshipDataForm,
    },
  ];

  return (
    <section>
      <div className="max-w-5xl mx-auto">
        <StepperForm steps={steps} persistKey={"form-data"} />
      </div>
    </section>
  );
};

export default DetailsSubmitPage;
