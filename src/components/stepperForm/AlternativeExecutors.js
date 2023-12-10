"use client";

import React, { useEffect, useState } from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import { DeleteOutlined } from "@ant-design/icons";
import CardFormLoader from "../skeleton-loader/CardFormLoader";
import { setFormValidator } from "@/redux/features/formResolver/formResolverSlice";
import { generateFormsResolver } from "@/schemas/formSchema";
import { useDispatch } from "react-redux";
import FormAddressField from "../forms/FormAddressField";

const AlternativeExecutors = ({
  idTypeOptions,
  countriesOptions,
  countryId,
  mainExecutor,
}) => {
  const [isAlternativeExecutors, setIsAlternativeExecutors] = useState(
    !!getFromLocalStorage("alt-exe")
      ? JSON.parse(getFromLocalStorage("alt-exe"))
      : false
  );

  const dispatch = useDispatch();
  const stepValue = ENUM_FORM_STEPS.ALTERNATIVE_EXECUTORS;

  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${countryId}`);

  const findedStep = findStepsData?.data?.data;
  const stepFields = findedStep?.stepFilds || [];

  const addressType = stepFields?.find((item) => item.type === "address");
  const fullNameFields = stepFields?.find((item) => item.name === "fullName");

  useEffect(() => {
    if (isAlternativeExecutors) {
      const resolver = generateFormsResolver(findedStep, mainExecutor);
      dispatch(setFormValidator(resolver));
    } else {
      const resolver = generateFormsResolver(mainExecutor);
      dispatch(setFormValidator(resolver));
    }
  }, [dispatch, isAlternativeExecutors, findedStep, mainExecutor]);

  if (willLoading) {
    return <CardFormLoader />;
  }

  const alternativeExecutorsAddHandelar = () => {
    setToLocalStorage("alt-exe", JSON.stringify(true));
    setIsAlternativeExecutors(true);
  };

  const alternativeExecutorsRemoveHandelar = () => {
    setToLocalStorage("alt-exe", JSON.stringify(false));
    setIsAlternativeExecutors(false);
  };

  return (
    <div>
      {isAlternativeExecutors ? (
        <Card>
          <div className="px-4 flex ">
            <p className="font-primary text-sm ">
              <i>
                The execution power will be passed on to the Alternative
                Executor if circumstances cause the main Executor to be unable
                to execute the Will.
              </i>
            </p>
            <div className="w-[150px] flex justify-end text-xl text-gray-500">
              <Button
                danger
                type="link"
                onClick={alternativeExecutorsRemoveHandelar}
              >
                <DeleteOutlined />
              </Button>
            </div>
          </div>

          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {fullNameFields && (
                  <div>
                    <FormInput
                      label={fullNameFields?.label}
                      name={`${stepValue}.${fullNameFields?.name}`}
                      placeholder={fullNameFields?.placeholder}
                      required={fullNameFields?.isRequired}
                      type={fullNameFields?.type}
                    />
                  </div>
                )}
              </div>
            </div>

            {stepFields?.map((item) => {
              const { id, type, placeholder, name, label, isRequired } =
                item || {};
              return type === "text" && name !== "fullName" ? (
                <div key={id}>
                  <FormInput
                    label={label}
                    name={`${stepValue}.${name}`}
                    placeholder={placeholder}
                    type={type}
                    required={isRequired}
                  />
                </div>
              ) : (
                type === "select" && (
                  <div key={id}>
                    <FormSelectField
                      label={label}
                      name={`${stepValue}.${name}`}
                      showSearch={true}
                      required={isRequired}
                      options={
                        name === "citizenship"
                          ? countriesOptions
                          : idTypeOptions
                      }
                    />
                  </div>
                )
              );
            })}

            <div className="col-span-full">
              {addressType && (
                <div>
                  <FormAddressField
                    stepValue={stepValue}
                    data={addressType}
                    countriesOptions={countriesOptions}
                  />
                </div>
              )}
            </div>
          </div>
        </Card>
      ) : (
        <Button
          onClick={alternativeExecutorsAddHandelar}
          icon={<PlusOutlined />}
          className="bg-primary hover:bg-secondary px-[12px]"
          size="large"
          type="primary"
        >
          Add Alternative Executor
        </Button>
      )}
    </div>
  );
};

export default AlternativeExecutors;
