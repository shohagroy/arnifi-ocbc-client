"use client";

import React, { useState } from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { Button, Card, Checkbox } from "antd";
import { QuestionCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

const Executors = ({ filds, persistKey }) => {
  const [savedValus, setSavedValues] = useState(
    !!getFromLocalStorage(persistKey)
      ? JSON.parse(getFromLocalStorage(persistKey))
      : ""
  );
  const [sameAddress, setSameAddress] = useState(false);
  const sameAddressHandelar = (isChack) => {
    setSameAddress(isChack);
    if (isChack) {
      savedValus["mainExecutorAddress"] = savedValus?.address;
      setToLocalStorage(persistKey, JSON.stringify(savedValus));
    } else {
      savedValus["mainExecutorAddress"] = {};
      setToLocalStorage(persistKey, JSON.stringify(savedValus));
      setSavedValues({ ...savedValus, address: {} });
    }
  };

  const fromDataArray = Object.keys(filds).map((key) => {
    return {
      name: filds[key]?.name || key,
      label: filds[key]?.label,
      type: filds[key]?.type,
      required: filds[key]?.required,
      placeholder: filds[key]?.placeholder,
      errorText: filds[key]?.errorText,
      options: filds[key]?.options,
    };
  });

  return (
    <div>
      <div className="p-2">
        <h2 className="pt-10 font-semibold text-3xl">
          Who will be the Executor(s) of your Will?
        </h2>

        <div className="text-sm ">
          <p className="py-6">
            The Main Executor is the person appointed to carry out the wishes of
            this Will.
          </p>

          <p>
            An Executor must be over the age of 21, not be a bankrupt and is of
            sound mind to carry out his or her duties under the Will upon the
            Testator’s demise. An Executor can also be a Beneficiary under a
            Will
          </p>
        </div>

        <div className="py-6 ">
          <a className="text-primary flex" href="/">
            <QuestionCircleOutlined />
            <p className="px-2">
              More information about Executors and their responsibilities
            </p>
          </a>
        </div>
      </div>
      <Card>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fromDataArray?.map((data) => {
            const { type, placeholder, name, label, required, options } =
              data || {};

            return name === "mainExecutorFullName" ? (
              <div key={data?.name} className="col-span-2 grid grid-cols-2">
                <div>
                  <FormInput
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    required={required}
                  />
                </div>

                <div></div>
              </div>
            ) : type === "text" && name !== "mainExecutorFullName" ? (
              <div key={name}>
                <FormInput
                  label={label}
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  required={required}
                />
              </div>
            ) : (
              type === "select" && (
                <div key={data?.name}>
                  <FormSelectField
                    label={label}
                    name={name}
                    showSearch={true}
                    required={required}
                    options={options}
                  />
                </div>
              )
            );
          })}

          {filds["mainExecutorAddress"] && (
            <>
              <hr className="border-[#EEEEEE] col-span-2 my-4" />
              <div>
                <FormInput
                  label={"Address"}
                  required
                  type={"text"}
                  value={sameAddress ? savedValus?.address?.line1 : ""}
                  placeholder={"Address line 1"}
                  name={"mainExecutorAddress.line1"}
                />
              </div>
              <div></div>
              <div className="">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <FormInput
                      type={"text"}
                      placeholder={"Address line 2"}
                      value={sameAddress ? savedValus?.address?.line2 : ""}
                      name={"mainExecutorAddress.line2"}
                    />
                  </div>
                  <div>
                    <FormSelectField
                      required={true}
                      name={"mainExecutorAddress.country"}
                      value={sameAddress ? savedValus?.address?.country : ""}
                      options={filds["mainExecutorAddress"]?.country?.options}
                      showSearch={true}
                    />
                  </div>
                  <div>
                    <FormInput
                      required
                      type={"number"}
                      value={sameAddress ? savedValus?.address?.postalCode : ""}
                      placeholder={"postal code"}
                      name={"mainExecutorAddress.postalCode"}
                    />
                  </div>
                </div>
                <Checkbox
                  className="py-2"
                  onChange={(e) => sameAddressHandelar(e.target.checked)}
                >
                  Same as my address
                </Checkbox>
              </div>
            </>
          )}
        </div>
      </Card>

      <div className="my-10">
        <Button
          icon={<PlusOutlined />}
          className="bg-primary hover:bg-secondary px-[12px]"
          size="large"
          type="primary"
        >
          Add Alternative Executor
        </Button>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default Executors;
