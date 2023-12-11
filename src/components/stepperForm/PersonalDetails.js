"use client";

import React, { useEffect } from "react";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import FormHeading from "../ui/will/FormHeading";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import CardFormLoader from "../skeleton-loader/CardFormLoader";
import PersonalInfo from "../admin/formSections/PersonalInfo";
import { generateFormsResolver } from "@/schemas/formSchema";
import { useDispatch } from "react-redux";
import { setFormValidator } from "@/redux/features/formResolver/formResolverSlice";

const PersonalDetails = ({ country }) => {
  const { idTypes, id } = country || {};
  const dispatch = useDispatch();

  const stepValue = ENUM_FORM_STEPS.PERSONAL_DETAILS;

  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${id}`);

  const findedStep = findStepsData?.data?.data;
  const stepFields = findedStep?.stepFilds || [];

  useEffect(() => {
    const resolver = generateFormsResolver(findedStep);
    dispatch(setFormValidator(resolver));
  }, [dispatch, findedStep]);

  const idTypeOptions = idTypes?.map((item) => {
    return {
      label: item?.tittle,
      value: item?.tittle,
    };
  });

  const { data, isLoading } = useGetAllCountryDataQuery();
  const countryOptions = data?.data?.data?.map((country) => {
    return {
      label: country?.name,
      value: country?.name,
    };
  });

  if (willLoading) {
    return <CardFormLoader />;
  }

  return (
    <div>
      <FormHeading heading={"First, we need some details from you"} />

      <PersonalInfo
        countriesOptions={countryOptions}
        idTypeOptions={idTypeOptions}
        loading={isLoading}
        data={stepFields}
        stepValue={stepValue}
      />

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default PersonalDetails;
