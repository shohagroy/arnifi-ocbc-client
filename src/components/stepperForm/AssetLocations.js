import React, { useState } from "react";
import FormSelectField from "../forms/FormSelectField";
import FormInput from "../forms/FormInput";
import { Button, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

const AssetLocations = ({
  data,
  value,
  index,
  locationCount,
  setLocationCount,
  beneficiaryOptions,
  countryOptions,
}) => {
  // const { remove } = useFieldArray({ name: stepValue });
  const { addressFields, beneficiaryFields } = data || {};
  const [selectedbeneficiary, setSelectedbeneficiary] = useState("");
  const [address, setAddress] = useState({
    line1: "",
    line2: "",
    country: "",
    postalCode: "",
  });

  const beneficiaryLocationAddHandelar = (data) => {
    console.log("call", data);
  };

  const locationRemoveHandelar = () => {
    const savedValues = JSON.parse(getFromLocalStorage("form-data"));
    const updatedLocations = savedValues?.assetAllocation?.locations?.filter(
      (_, i) => i !== index
    );

    const asset = savedValues?.assetAllocation;

    const updatedData = {
      ...savedValues,
      assetAllocation: { ...asset, locations: updatedLocations },
    };

    setToLocalStorage("form-data", JSON.stringify(updatedData));
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
              handleChange={(e) =>
                beneficiaryLocationAddHandelar({ line1: e.target.value })
              }
              label={addressFields?.label}
              required
              type={"text"}
              placeholder={"address line 1"}
              name={`${value}.address.line1`}
            />
          </div>

          <div className="my-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <FormInput
                  type={"text"}
                  placeholder={"address line 2"}
                  name={`${value}.address.line2`}
                />
              </div>
              <div className="">
                <FormSelectField
                  required
                  name={`${value}.address.country`}
                  options={countryOptions}
                  type={"text"}
                />
              </div>
              <div>
                <FormInput
                  required
                  type={"text"}
                  placeholder={"postal code"}
                  name={`${value}.address.postalCode`}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <FormSelectField
            loading={false}
            label={beneficiaryFields?.label}
            handleChange={(e) => setSelectedbeneficiary(e)}
            name={`${value}.beneficiary.${name}}`}
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
