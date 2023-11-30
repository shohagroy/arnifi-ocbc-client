"use client";

import { Card } from "antd";
import React from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import FormRadio from "../forms/FormRadio";

const PersonalDetails = ({ filds }) => {
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
      <h2 className="py-10 font-semibold text-3xl">
        First, we need some details from you
      </h2>
      <Card>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fromDataArray?.map((data) => {
            const { type, placeholder, name, label, required, options } =
              data || {};
            return type === "text" ? (
              <div key={data?.name}>
                <FormInput
                  label={label}
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  required={required}
                />
              </div>
            ) : type === "radio" ? (
              <div key={data?.name}>
                <FormRadio
                  label={label}
                  name={name}
                  required={required}
                  options={options}
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

          {filds["address"] && (
            <>
              <hr className="border-[#EEEEEE] col-span-2 my-4" />
              <div>
                <FormInput
                  label={"Address"}
                  required
                  type={"text"}
                  placeholder={"address line 1"}
                  name={"address.line1"}
                />
              </div>
              <div></div>
              <div className="">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <FormInput
                      type={"text"}
                      placeholder={"address line 2"}
                      name={"address.line2"}
                    />
                  </div>
                  <div>
                    <FormSelectField
                      required={true}
                      name={"address.country"}
                      options={filds["address"]?.country?.options}
                      showSearch={true}
                    />
                  </div>
                  <div>
                    <FormInput
                      required
                      type={"number"}
                      placeholder={"postal code"}
                      name={"address.postalCode"}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Card>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default PersonalDetails;
