"use client";

import React, { useEffect, useState } from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import FormAddressField from "./FormAddressField";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import { DeleteOutlined } from "@ant-design/icons";
import CardFormLoader from "../skeleton-loader/CardFormLoader";
import { setFormValidator } from "@/redux/features/formResolver/formResolverSlice";
import { generateFormsResolver } from "@/schemas/formSchema";
import { useDispatch } from "react-redux";

const AlternativeExecutors = ({
  idTypeOptions,
  countriesOptions,
  countryId,
  mainExecutor,
}) => {
  const [savedValues, setSavedValues] = useState({});
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setSavedValues(JSON.parse(getFromLocalStorage("form-data")) || {});
  }, [show]);

  const stepValue = ENUM_FORM_STEPS.ALTERNATIVE_EXECUTORS;

  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${countryId}`);

  const findedStep = findStepsData?.data?.data;
  const stepFields = findedStep?.stepFilds || [];

  useEffect(() => {
    if (show) {
      const resolver = generateFormsResolver(findedStep, mainExecutor);
      dispatch(setFormValidator(resolver));
    } else {
      const resolver = generateFormsResolver(mainExecutor);
      dispatch(setFormValidator(resolver));
    }
  }, [dispatch, show, findedStep, mainExecutor]);

  if (willLoading) {
    return <CardFormLoader />;
  }

  const addressFild = stepFields?.find((item) => item.type === "address");

  const alternativeExecutorsAddHandelar = () => {
    const updatedValues = {
      ...savedValues,
      alternativeExecutors: {
        ...savedValues?.alternativeExecutors,
        isShow: true,
      },
    };
    setToLocalStorage("form-data", JSON.stringify(updatedValues));
    setShow(!show);
  };

  const alternativeExecutorsRemoveHandelar = () => {
    const updatedValues = {
      ...savedValues,
      alternativeExecutors: {
        ...savedValues?.alternativeExecutors,
        isShow: false,
      },
    };

    setToLocalStorage("form-data", JSON.stringify(updatedValues));
    setShow(!show);
  };

  return (
    <div>
      {savedValues?.alternativeExecutors?.isShow ? (
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
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {stepFields?.map((data, i) => {
              const { type, placeholder, name, label, required } = data || {};
              return type === "text" && name === "fullName" ? (
                <div key={i} className="col-span-2 grid grid-cols-2">
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
