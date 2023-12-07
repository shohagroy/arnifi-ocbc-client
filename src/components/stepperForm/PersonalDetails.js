"use client";

import { Card } from "antd";
import React, { useEffect } from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import FormGenderRadio from "../forms/FormGenderRadio";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import FormHeading from "../ui/will/FormHeading";
import FormAddressField from "./FormAddressField";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import CardLoader from "../skeleton-loader/CardLoader";
import CardFormLoader from "../skeleton-loader/CardFormLoader";

const PersonalDetails = ({ country }) => {
  const { idTypes, id } = country || {};

  const stepValue = ENUM_FORM_STEPS.PERSONAL_DETAILS;

  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${id}`);

  const stepFields = findStepsData?.data?.data?.stepFilds || [];

  const idTypeOptions = idTypes?.map((item) => {
    return {
      label: item?.tittle,
      value: item?.id,
    };
  });

  const { data, isLoading } = useGetAllCountryDataQuery();

  const countryOptions = data?.data?.data?.map((country) => {
    return {
      label: country?.name,
      value: country?.id,
    };
  });

  if (willLoading) {
    return <CardFormLoader />;
  }

  const addressFild = stepFields?.find((item) => item.type === "address");

  return (
    <div>
      <FormHeading heading={"First, we need some details from you"} />
      <Card>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {stepFields?.map((data) => {
            const { type, placeholder, name, label, required, options } =
              data || {};
            return type === "text" ? (
              <div key={name}>
                <FormInput
                  label={label}
                  name={`${stepValue}.${name}`}
                  placeholder={placeholder}
                  type={type}
                  required={required}
                />
              </div>
            ) : type === "radio" ? (
              <div key={name}>
                <FormGenderRadio
                  label={label}
                  name={`${stepValue}.${name}`}
                  required={required}
                  options={options}
                />
              </div>
            ) : (
              type === "select" && (
                <div key={name}>
                  <FormSelectField
                    loading={isLoading}
                    name={`${stepValue}.${name}`}
                    label={label}
                    showSearch={true}
                    required={required}
                    options={name === "idType" ? idTypeOptions : countryOptions}
                  />
                </div>
              )
            );
          })}

          {addressFild && (
            <>
              <hr className="border-[#EEEEEE] col-span-2 my-4" />
              <FormAddressField value={stepValue} />
            </>
          )}
        </div>
      </Card>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default PersonalDetails;
