"use client";

import { Card } from "antd";
import React from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { ENUM_FORM_STEPS, relationsOptions } from "@/constans/steps";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import FormModalText from "../ui/will/FormModalText";
import FormAddressField from "./FormAddressField";
import SecendBeneficiaries from "./SecendBeneficiaries";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import CardFormLoader from "../skeleton-loader/CardFormLoader";

const Beneficiaries = ({ country }) => {
  const { idTypes, id } = country || {};
  const stepValue = ENUM_FORM_STEPS.BENEFICIARIES;

  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${id}`);

  const stepFields = findStepsData?.data?.data?.stepFilds || [];

  const idTypeOptions = idTypes?.map((item) => {
    return {
      label: item?.tittle,
      value: item?.id,
    };
  });

  if (willLoading) {
    return <CardFormLoader />;
  }

  const addressFild = stepFields?.find((item) => item.type === "address");
  const modalTextData = [
    {
      info: "A Beneficiary is the person who benefits from the deceased’s assets under his Will.",
    },
    {
      info: "In the event a Beneficiary is a minor, the assets bequeathed to him under the Will will have to be held by the trustee appointed under the Will (or if none, by the Executor) until the minor Beneficiary turns 21 years of age (on, in the case of certain classes of assets, 18 years of age).",
    },
    {
      info: "For more information please refer to Information for Minor Beneficiaries.",
    },
  ];

  return (
    <div>
      <div className="py-2">
        <FormHeading heading={" Who will be the Beneficiaries of Your Will?"} />
        <FormText
          text={
            "The Beneficiaries are the people who will benefit from the asset allocation indicated in this will."
          }
        />

        <FormModalText
          tittle={"Beneficiaries of Will"}
          text={"More information about Beneficiaries"}
          data={modalTextData}
        />
      </div>

      <Card>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {stepFields?.map((data, i) => {
            const { type, placeholder, name, label, required } = data || {};

            return type === "text" ? (
              <div key={i}>
                <FormInput
                  label={label}
                  name={`${stepValue}.${name}`}
                  placeholder={placeholder}
                  type={type}
                  required={required}
                />
              </div>
            ) : (
              type === "select" && (
                <div key={i}>
                  <FormSelectField
                    label={label}
                    name={`${stepValue}.${name}`}
                    showSearch={true}
                    required={required}
                    options={
                      name === "idType" ? idTypeOptions : relationsOptions
                    }
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

      <div className="my-10">
        <SecendBeneficiaries idTypeOptions={idTypeOptions} countryId={id} />
      </div>
    </div>
  );
};

export default Beneficiaries;
