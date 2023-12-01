"use client";

import { Button, Card, Checkbox } from "antd";
import React, { useState } from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { QuestionCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

const Beneficiaries = ({ filds, persistKey }) => {
  const [savedValus, setSavedValues] = useState(
    JSON.parse(getFromLocalStorage(persistKey))
  );
  const [sameAddress, setSameAddress] = useState(false);
  const sameAddressHandelar = (isChack) => {
    setSameAddress(isChack);
    if (isChack) {
      savedValus["firstBeneficiaryAddress"] = savedValus?.address;
      setToLocalStorage(persistKey, JSON.stringify(savedValus));
    } else {
      savedValus["firstBeneficiaryAddress"] = {};
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
          Who will be the Beneficiaries of Your Will?
        </h2>

        <div className="text-sm ">
          <p className="py-6">
            The Beneficiaries are the people who will benefit from the asset
            allocation indicated in this will.
          </p>
        </div>

        <div className="py-6 ">
          <a className="text-primary flex" href="/">
            <QuestionCircleOutlined />
            <p className="px-2">More information about Beneficiaries</p>
          </a>
        </div>
      </div>

      <Card>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fromDataArray?.map((data) => {
            const { type, placeholder, name, label, required, options } =
              data || {};

            return type === "text" ? (
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

          {filds["firstBeneficiaryAddress"] && (
            <>
              <hr className="border-[#EEEEEE] col-span-2 my-4" />
              <div>
                <FormInput
                  label={"Address"}
                  required
                  type={"text"}
                  value={sameAddress ? savedValus?.address?.line1 : ""}
                  placeholder={"Address line 1"}
                  name={"firstBeneficiaryAddress.line1"}
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
                      name={"firstBeneficiaryAddress.line2"}
                    />
                  </div>
                  <div>
                    <FormSelectField
                      required={true}
                      name={"firstBeneficiaryAddress.country"}
                      value={sameAddress ? savedValus?.address?.country : ""}
                      options={
                        filds["firstBeneficiaryAddress"]?.country?.options
                      }
                      showSearch={true}
                    />
                  </div>
                  <div>
                    <FormInput
                      required
                      type={"number"}
                      value={sameAddress ? savedValus?.address?.postalCode : ""}
                      placeholder={"postal code"}
                      name={"firstBeneficiaryAddress.postalCode"}
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

          {/* <div>
            <FormInput
              label={"Full name of first beneficiary"}
              name={"executorName"}
              placeholder={"Type Full Name"}
              required
              type={"text"}
            />
          </div>
          <div>
            <FormSelectField
              label={"Relationship"}
              name={"idType"}
              required
              options={idTypeOptions}
              type={"text"}
            />
          </div>
          <div>
            <FormSelectField
              label={"Type of ID"}
              name={"idType"}
              required
              options={idTypeOptions}
              type={"text"}
            />
          </div>

          <div>
            <FormInput
              label={"NRIC/Passport No./ID No."}
              name={"idNumber"}
              placeholder={"e.g.S1234567A"}
              required
              type={"text"}
            />
          </div>

          <div>
            <FormInput
              label={"Address"}
              required
              type={"text"}
              placeholder={"address line 1"}
              name={"address"}
            />
          </div>
          <div></div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <FormInput
                  type={"text"}
                  placeholder={"address line 2"}
                  name={"address"}
                />
              </div>
              <div>
                <FormSelectField
                  required
                  name={"citizenship"}
                  options={idTypeOptions}
                  type={"text"}
                />
              </div>
              <div>
                <FormInput
                  required
                  type={"text"}
                  placeholder={"postal code"}
                  name={"postalCode"}
                />
              </div>
            </div>
            <Checkbox
              className="py-2"
              onChange={(e) => setAddress(e.target.checked)}
            >
              Same as my address
            </Checkbox>
          </div> */}
        </div>
      </Card>

      <div className="my-10">
        <Button
          icon={<PlusOutlined />}
          className="bg-primary hover:bg-secondary px-[12px]"
          size="large"
          type="primary"
        >
          Add another beneficiary
        </Button>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default Beneficiaries;
