import React, { useState } from "react";
import FormSelectField from "../forms/FormSelectField";
import FormInput from "../forms/FormInput";
import { Button, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useFieldArray } from "react-hook-form";
import { ENUM_FORM_STEPS } from "@/constans/steps";

const AssetLocations = ({
  data,
  value,
  index,
  locationCount,
  setLocationCount,
  beneficiaryOptions,
  countryOptions,
}) => {
  const [beneficiaryIndex, setBeneficiaryIndex] = useState(0);
  const stepValue = ENUM_FORM_STEPS.BENEFICIARIES;

  const { remove } = useFieldArray({
    name: `${stepValue}.${beneficiaryIndex}.properties`,
  });

  const propertiesAddHandelar = (e) => {
    console.log(e);
  };

  const { addressFields, beneficiaryFields } = data || {};

  const locationRemoveHandelar = () => {
    remove(index);
    setLocationCount(locationCount - 1);
  };

  return (
    <Card className="my-4">
      <div className="px-4 flex justify-between ">
        <p className="font-primary text-sm h-10 w-10 bg-gray-200 flex justify-center items-center rounded-full ">
          {index + 1}
        </p>
        <div className="w-[150px] flex justify-end text-xl text-gray-500">
          {index !== 0 && (
            <Button danger type="link" onClick={locationRemoveHandelar}>
              <DeleteOutlined />
            </Button>
          )}
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div>
            <FormInput
              label={addressFields?.label}
              required
              type={"text"}
              placeholder={"address line 1"}
              name={`${stepValue}.${beneficiaryIndex}.properties.${index}.address.line1`}
            />
          </div>

          <div className="my-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <FormInput
                  type={"text"}
                  placeholder={"address line 2"}
                  name={`${stepValue}.${beneficiaryIndex}.properties.${index}.address.line2`}
                />
              </div>
              <div className="">
                <FormSelectField
                  required
                  name={`${stepValue}.${beneficiaryIndex}.properties.${index}.address.country`}
                  options={countryOptions}
                  type={"text"}
                />
              </div>
              <div>
                <FormInput
                  required
                  type={"text"}
                  placeholder={"postal code"}
                  name={`${stepValue}.${beneficiaryIndex}.properties.${index}.address.postalCode`}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <FormSelectField
            defaultValue={beneficiaryIndex}
            handleChange={(e) => setBeneficiaryIndex(e)}
            label={beneficiaryFields?.label}
            name={`${value}.beneficiary`}
            required
            options={beneficiaryOptions || []}
            type={"text"}
          />
        </div>
      </div>
    </Card>
  );
};

export default AssetLocations;
