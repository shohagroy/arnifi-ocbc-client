import { useGetStepFildsQuery } from "@/redux/features/stepFild/stepFildApi";
import { Divider } from "antd";
import React from "react";

import { Card, Col, Row } from "antd";
import PersonalDetails from "@/components/stepperForm/PersonalDetails";
import Form from "@/components/forms/From";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import FormRadio from "@/components/forms/FormRadio";
import FormGenderRadio from "@/components/forms/FormGenderRadio";

const DisplayAddedStrpFilds = ({ data, countriesOptions }) => {
  const { countryId, stepId } = data || {};
  const search = `/${countryId}/${stepId}`;

  const selectCountry = countriesOptions?.find(
    (option) => option.value === countryId
  );

  const { data: stepFilds, isLoading } = useGetStepFildsQuery(search);
  console.log(stepFilds?.data?.data, isLoading);

  const onSubmit = (data) => {
    console.log(data);
  };

  const idTypesOptions = selectCountry?.idOptions?.map((option) => {
    return {
      label: option?.tittle,
      value: option?.id,
    };
  });

  console.log(idTypesOptions);

  return (
    <div>
      <Divider>
        <p className="font-primary text-lg">Added Form Input</p>
      </Divider>

      {/* <div className="my-4">
        <Form submitHandler={onSubmit}>
          <PersonalDetails filds={stepFilds?.data?.data} />
        </Form>
      </div> */}
      <Form submitHandler={onSubmit}>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {stepFilds?.data?.data?.map((data) => {
            const { type, placeholder, name, label, isRequired, options } =
              data || {};

            console.log(name);

            return type === "text" ? (
              <div key={data?.name}>
                <FormInput
                  label={label}
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  required={isRequired}
                />
              </div>
            ) : type === "radio" && name !== "gender" ? (
              <div key={data?.name}>
                <FormRadio
                  label={label}
                  name={name}
                  required={isRequired}
                  options={options}
                />
              </div>
            ) : type === "radio" && name === "gender" ? (
              <div key={data?.name}>
                <FormGenderRadio
                  label={label}
                  name={name}
                  required={isRequired}
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
                    required={isRequired}
                    options={
                      name === "citizenship" ? countriesOptions : idTypesOptions
                    }
                  />
                </div>
              )
            );
          })}

          {/* {filds["address"] && (
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
          )} */}
        </div>
      </Form>
    </div>
  );
};

export default DisplayAddedStrpFilds;
