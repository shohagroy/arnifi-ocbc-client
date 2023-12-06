"use client";

import React, { useEffect, useState } from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { Button, Card, Checkbox } from "antd";
import { QuestionCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import FormAddressField from "./FormAddressField";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import FormModalText from "../ui/will/FormModalText";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import { DeleteOutlined } from "@ant-design/icons";

const AlternativeExecutors = ({
  setStepValue,
  idTypeOptions,
  countriesOptions,
  countryId,
  setShow,
}) => {
  const stepValue = ENUM_FORM_STEPS.ALTERNATIVE_EXECUTORS;

  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${countryId}`);

  const stepFields = findStepsData?.data?.data?.stepFilds || [];

  const addressFild = stepFields?.find((item) => item.type === "address");

  return (
    <div>
      <Card>
        <div className="px-4 flex ">
          <p className="font-primary text-sm ">
            <i>
              The execution power will be passed on to the Alternative Executor
              if circumstances cause the main Executor to be unable to execute
              the Will.
            </i>
          </p>
          <div className="w-[150px] flex justify-end text-xl text-gray-500">
            <Button danger type="link" onClick={() => setShow(false)}>
              <DeleteOutlined />
            </Button>
          </div>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {stepFields?.map((data) => {
            const { type, placeholder, name, label, required } = data || {};
            return type === "text" && name === "fullName" ? (
              <div key={name} className="col-span-2 grid grid-cols-2">
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
                <div key={name}>
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
                <div key={data?.name}>
                  <FormSelectField
                    // loading={isLoading}
                    label={label}
                    name={`${stepValue}.${name}`}
                    showSearch={true}
                    required={required}
                    options={
                      name === "idType" ? idTypeOptions : countriesOptions
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
    </div>
  );
};

export default AlternativeExecutors;
