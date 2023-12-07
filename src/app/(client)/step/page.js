"use client";

import AssetAllocation from "@/components/stepperForm/AssetAllocation";
import Beneficiaries from "@/components/stepperForm/Beneficiaries";
import Executors from "@/components/stepperForm/Executors";
import Instructions from "@/components/stepperForm/Instructions";
import PersonalDetails from "@/components/stepperForm/PersonalDetails";
import ReviewAndSubmit from "@/components/stepperForm/ReviewAndSubmit";
import StepperForm from "@/components/stepperForm/stepperForm";
import React, { useState } from "react";
import MIcon from "../../../assets/male-icon.png";
import FIcon from "../../../assets/female-icon.png";
import {
  useGetAllFormStepsQuery,
  useGetCountryFormStepsQuery,
  useGetWillStepFildsQuery,
} from "@/redux/features/formStep/formStepApi";
import DisplayStepFormField from "@/components/ui/will/DisplayStepFormField";
import { useGetActiveCountryWillQuery } from "@/redux/features/country/countryApi";
import InitialCardLoading from "@/components/skeleton-loader/InitialCardLoading";

const DetailsSubmitPage = () => {
  const [stepValue, setStepValue] = useState("");

  const { data: activeWillCountry, isLoading: countryLoading } =
    useGetActiveCountryWillQuery();

  const activeCountry = activeWillCountry?.data?.data || {};

  // const { data: findStepsData, isLoading: willLoading } =
  //   useGetWillStepFildsQuery(`/${stepValue}/${activeCountry?.id}`);

  // const loading = countryLoading || willLoading;
  // const stepData = findStepsData?.data?.data || {};

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
        <Beneficiaries country={activeCountry} />
      ),
    },
    {
      title: "Asset Allocation",
      content: <AssetAllocation country={activeCountry} />,
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
        <StepperForm steps={steps} persistKey={"form-data"} />
      </div>
    </section>
  );
};

export default DetailsSubmitPage;
