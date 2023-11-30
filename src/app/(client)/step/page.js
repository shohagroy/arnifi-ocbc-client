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

  const formData = {
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

  const steps = [
    {
      title: "Personal Details",
      content: <PersonalDetails filds={formData} />,
    },
    {
      title: "Executors",
      content: <Executors />,
    },
    {
      title: "Beneficiaries",
      content: <Beneficiaries />,
    },
    {
      title: "Asset Allocation",
      content: <AssetAllocation />,
    },
    {
      title: "Instructions",
      content: <Instructions />,
    },
    {
      title: "Review",
      content: <ReviewAndSubmit />,
    },
  ];

  return (
    <section>
      <div className="max-w-5xl mx-auto">
        <StepperForm steps={steps} formData={formData} />
      </div>
    </section>
  );
};

export default DetailsSubmitPage;
