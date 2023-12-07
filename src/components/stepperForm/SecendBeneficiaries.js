"use client";

import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { PlusOutlined } from "@ant-design/icons";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { ENUM_FORM_STEPS, relationsOptions } from "@/constans/steps";
import FormAddressField from "./FormAddressField";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import { DeleteOutlined } from "@ant-design/icons";
import ThirdBeneficiaries from "./ThirdBeneficiaries";
import CardFormLoader from "../skeleton-loader/CardFormLoader";

const SecendBeneficiaries = ({ countryId, idTypeOptions }) => {
  const [savedValues, setSavedValues] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    setSavedValues(JSON.parse(getFromLocalStorage("form-data")) || {});
  }, [show]);

  const stepValue = ENUM_FORM_STEPS.SECEND_BENEFICIARIES;
  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${countryId}`);

  if (willLoading) {
    return <CardFormLoader />;
  }

  const stepFields = findStepsData?.data?.data?.stepFilds || [];
  const addressFild = stepFields?.find((item) => item.type === "address");

  const beneficiariesAddHandelar = () => {
    const updatedValues = {
      ...savedValues,
      [stepValue]: {
        ...savedValues?.[stepValue],
        isShow: true,
      },
    };
    setToLocalStorage("form-data", JSON.stringify(updatedValues));
    setShow(!show);
  };

  const beneficiariesRemoveHandelar = () => {
    const updatedValues = {
      ...savedValues,
      [stepValue]: {
        ...savedValues?.[stepValue],
        isShow: false,
      },
    };

    setToLocalStorage("form-data", JSON.stringify(updatedValues));
    setShow(!show);
  };

  return (
    <div>
      {savedValues?.[stepValue]?.isShow ? (
        <div>
          <Card>
            <div className="px-4 flex justify-between ">
              <p className="font-primary text-sm h-10 w-10 bg-gray-200 flex justify-center items-center rounded-full ">
                2
              </p>
              <div className="w-[150px] flex justify-end text-xl text-gray-500">
                <Button
                  danger
                  type="link"
                  onClick={beneficiariesRemoveHandelar}
                >
                  <DeleteOutlined />
                </Button>
              </div>
            </div>
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
                        // showSearch={true}
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
            <ThirdBeneficiaries
              idTypeOptions={idTypeOptions}
              countryId={countryId}
            />
          </div>
        </div>
      ) : (
        <div className="my-10">
          <Button
            onClick={beneficiariesAddHandelar}
            icon={<PlusOutlined />}
            className="bg-primary hover:bg-secondary px-[12px]"
            size="large"
            type="primary"
          >
            Add another beneficiary
          </Button>
        </div>
      )}

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default SecendBeneficiaries;
