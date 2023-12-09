"use client";

import React, { useEffect } from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { Card } from "antd";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
// import FormAddressField from "./FormAddressField";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import FormModalText from "../ui/will/FormModalText";
import AlternativeExecutors from "./AlternativeExecutors";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import CardFormLoader from "../skeleton-loader/CardFormLoader";
import { useDispatch } from "react-redux";
import { setFormValidator } from "@/redux/features/formResolver/formResolverSlice";
import { generateFormsResolver } from "@/schemas/formSchema";
import FormAddressField from "../forms/FormAddressField";

const Executors = ({ country }) => {
  const { idTypes, id } = country || {};

  const dispatch = useDispatch();

  const stepValue = ENUM_FORM_STEPS.EXECUTORS;

  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${id}`);

  const findedStep = findStepsData?.data?.data;
  const stepFields = findedStep?.stepFilds || [];

  // const resolver = generateFormsResolver(findedStep);

  // useEffect(() => {
  //   if (resolver) {
  //     dispatch(setFormValidator(resolver));
  //   }
  // }, [resolver, dispatch]);

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

  const modalTextData = [
    {
      info: " An Executor is the person appointed by the Testator under his Will to carry out the wishes of the Testator in accordance with the Will. An Executor can also be a beneficiary under a Will and a Testator can appoint more than one Executor in his Will. Where there are more than one Executors, they must act jointly (together). ",
      others: [],
    },
    {
      info: " Please note that the Online Will Generator does not cater to joint Executors. However, the Online Will Generator allows the Testator to include an alternative Executor. If circumstances cause the main Executor to be unable to execute the terms of the Will, the execution power will be passed on to the alternative Executor. ",
      others: [],
    },
    {
      info: " An Executor must be over the age of 21, not be a bankrupt and is of sound mind to carry out his or her duties under the Will upon the Testator’s demise. ",
      others: [],
    },
    {
      info: " Some of the Executor’s duties would include: ",
      others: [
        " (a) Applying for Grant of Probate for the deceased;",
        " (b) Making funeral arrangements for the deceased;",
        " (c) Settling the lawful just debts owed by the deceased;",
        " (d) Taking possession of and Distributing the assets of the deceased in accordance with the Will. ",
      ],
    },
    {
      info: " If circumstances are such that an Executor refuses or is unable to take up his office, the relevant persons will have to seek legal advice as to how next to proceed.",
    },
  ];

  return (
    <div>
      <div className="p-2">
        <FormHeading heading={" Who will be the Executor(s) of your Will?"} />
        <FormText
          text={
            "The Main Executor is the person appointed to carry out the wishes of this Will."
          }
        />
        <FormText
          text={
            "An Executor must be over the age of 21, not be a bankrupt and is of sound mind to carry out his or her duties under the Will upon the Testator’s demise. An Executor can also be a Beneficiary under a Will"
          }
        />

        <FormModalText
          tittle={"Executor(s) of Will"}
          text={"More information about Executors and their responsibilities"}
          data={modalTextData}
        />
      </div>

      <Card>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {stepFields?.map((data, i) => {
            const { type, placeholder, name, label, required } = data || {};
            return type === "text" && name === "fullName" ? (
              <div key={i} className="md:col-span-2 md:grid md:grid-cols-2">
                <div>
                  <FormInput
                    label={label}
                    name={`${stepValue}.${name}`}
                    placeholder={placeholder}
                    type={type}
                    required={required}
                  />
                </div>

                <div></div>
              </div>
            ) : type === "text" ? (
              <>
                <div key={i}>
                  <FormInput
                    label={label}
                    name={`${stepValue}.${name}`}
                    placeholder={placeholder}
                    type={type}
                    required={required}
                  />
                </div>
              </>
            ) : (
              type === "select" && (
                <div key={i}>
                  <FormSelectField
                    loading={isLoading}
                    label={label}
                    name={`${stepValue}.${name}`}
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

      <div className="my-10">
        <AlternativeExecutors
          countryId={id}
          idTypeOptions={idTypeOptions}
          countriesOptions={countryOptions}
          mainExecutor={findedStep}
        />
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default Executors;
