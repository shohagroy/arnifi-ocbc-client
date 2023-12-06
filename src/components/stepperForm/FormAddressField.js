import React from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";

const FormAddressField = ({ value }) => {
  const { data, isLoading } = useGetAllCountryDataQuery();

  const countryOptions = data?.data?.data?.map((country) => {
    return {
      label: country?.name,
      value: country?.id,
    };
  });

  return (
    <>
      <div>
        <FormInput
          label={"Address"}
          required
          type={"text"}
          placeholder={"address line 1"}
          name={`${value}.address.line1`}
        />
      </div>
      <div></div>
      <div className="">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <FormInput
              type={"text"}
              placeholder={"address line 2"}
              name={`${value}.address.line2`}
            />
          </div>
          <div>
            <FormSelectField
              required={true}
              loading={isLoading}
              name={`${value}.address.country`}
              options={countryOptions}
              showSearch={true}
            />
          </div>
          <div>
            <FormInput
              required
              type={"number"}
              name={`${value}.address.postalCode`}
              placeholder={"postal code"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddressField;
