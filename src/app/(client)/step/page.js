import AssetAllocation from "@/components/stepperForm/AssetAllocation";
import Beneficiaries from "@/components/stepperForm/Beneficiaries";
import Executors from "@/components/stepperForm/Executors";
import Instructions from "@/components/stepperForm/Instructions";
import PersonalDetails from "@/components/stepperForm/PersonalDetails";
import Review from "@/components/stepperForm/Review";
import ReviewAndSubmit from "@/components/stepperForm/ReviewAndSubmit";
import StepperForm from "@/components/stepperForm/stepperForm";
import React from "react";

const DetailsSubmitPage = () => {
  const steps = [
    {
      title: "Personal Details",
      content: <PersonalDetails />,
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
        <StepperForm steps={steps} />
      </div>
    </section>
  );
};

export default DetailsSubmitPage;
