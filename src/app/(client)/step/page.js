"use client";

import AssetAllocation from "@/components/stepperForm/AssetAllocation";
import Beneficiaries from "@/components/stepperForm/Beneficiaries";
import Executors from "@/components/stepperForm/Executors";
import Instructions from "@/components/stepperForm/Instructions";
import PersonalDetails from "@/components/stepperForm/PersonalDetails";
import ReviewAndSubmit from "@/components/stepperForm/ReviewAndSubmit";
import StepperForm from "@/components/stepperForm/stepperForm";
import React, { useState } from "react";
import { useGetActiveCountryWillQuery } from "@/redux/features/country/countryApi";
import InitialCardLoading from "@/components/skeleton-loader/InitialCardLoading";
import { getFromLocalStorage } from "@/utils/local-storage";
import AssetDistribute from "@/components/stepperForm/AssetDistribute";
import AdditionalInstructions from "@/components/stepperForm/AdditionalInstructions";

const DetailsSubmitPage = () => {
  const [assetStep, setAssetStep] = useState(
    !!getFromLocalStorage("assetStep")
      ? Number(JSON.parse(getFromLocalStorage("assetStep")))
      : 1
  );

  const [additional, setAdditional] = useState(
    !!getFromLocalStorage("additional")
      ? Number(JSON.parse(getFromLocalStorage("additional")))
      : 1
  );

  const { data: activeWillCountry, isLoading: countryLoading } =
    useGetActiveCountryWillQuery();

  const activeCountry = activeWillCountry?.data?.data || {};

  if (countryLoading) {
    return <InitialCardLoading />;
  }

  const steps = [
    {
      title: "Personal Details",
      content: <PersonalDetails country={activeCountry} />,
    },
    {
      title: "Executors",
      content: <Executors country={activeCountry} />,
    },
    {
      title: "Beneficiaries",
      content: (
        <Beneficiaries country={activeCountry} persistKey={"form-data"} />
      ),
    },
    {
      title: "Asset Allocation",
      content: (
        <div>
          {assetStep === 1 ? (
            <AssetAllocation country={activeCountry} />
          ) : (
            <AssetDistribute />
          )}
        </div>
      ),
    },
    {
      title: "Instructions",
      content: (
        <div>
          {additional === 1 ? <Instructions /> : <AdditionalInstructions />}
        </div>
      ),
    },
    {
      title: "Review",
      content: <ReviewAndSubmit />,
    },
  ];

  return (
    <section>
      <div className="max-w-5xl mx-auto">
        <StepperForm
          setAssetStep={setAssetStep}
          setAdditional={setAdditional}
          additional={additional}
          assetStep={assetStep}
          steps={steps}
          persistKey={"form-data"}
        />
      </div>
    </section>
  );
};

export default DetailsSubmitPage;
