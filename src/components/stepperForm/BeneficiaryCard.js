import React from "react";
import FormAddressField from "./FormAddressField";
import FormSelectField from "../forms/FormSelectField";
import FormInput from "../forms/FormInput";
import { Button, Card } from "antd";
import { relationsOptions } from "@/constans/steps";
import { DeleteOutlined } from "@ant-design/icons";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

const BeneficiaryCard = ({
  data,
  index,
  stepValue,
  idTypeOptions,
  setBeneficiariesCount,
  beneficiariesCount,
}) => {
  const { stepFields, addressFild } = data || {};

  const beneficiaryRemoveHandelar = () => {
    const savedValues = JSON.parse(getFromLocalStorage("form-data"));
    const updatedLocations = savedValues?.beneficiaries?.filter(
      (_, i) => i !== index
    );
    const updatedData = {
      ...savedValues,
      beneficiaries: updatedLocations,
    };

    setToLocalStorage("form-data", JSON.stringify(updatedData));
    setBeneficiariesCount(beneficiariesCount - 1);
  };

  const generateFullNameLabel = () => {
    if (index === 0) {
      return "Full Name of first Beneficiary.";
    } else if (index === 1) {
      return "Full Name of second Beneficiary.";
    } else if (index === 2) {
      return "Full Name of third Beneficiary.";
    } else if (index === 3) {
      return "Full Name of fourth Beneficiary.";
    } else if (index === 4) {
      return "Full Name of fifth Beneficiary.";
    } else if (index === 5) {
      return "Full Name of sixth Beneficiary.";
    } else if (index === 6) {
      return "Full Name of seventh Beneficiary.";
    } else if (index === 7) {
      return "Full Name of eighth Beneficiary.";
    } else if (index === 8) {
      return "Full Name of ninth Beneficiary.";
    } else if (index === 9) {
      return "Full Name of tenth Beneficiary.";
    }
  };

  return (
    <Card className="my-4">
      <div className="px-4 flex justify-between ">
        <p className="font-primary text-sm h-10 w-10 bg-gray-200 flex justify-center items-center rounded-full ">
          {index + 1}
        </p>
        <div className="w-[150px] flex justify-end text-xl text-gray-500">
          {index !== 0 && (
            <Button danger type="link" onClick={beneficiaryRemoveHandelar}>
              <DeleteOutlined />
            </Button>
          )}
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {stepFields?.map((data, i) => {
          const { type, placeholder, name, label, required } = data || {};

          return type === "text" ? (
            <div key={i}>
              <FormInput
                label={name === "fullName" ? generateFullNameLabel() : label}
                name={`${stepValue}.${index}.${name}`}
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
                  name={`${stepValue}.${index}.${name}`}
                  //   showSearch={true}
                  required={required}
                  options={name === "idType" ? idTypeOptions : relationsOptions}
                />
              </div>
            )
          );
        })}

        {addressFild && (
          <>
            <hr className="border-[#EEEEEE] col-span-2 my-4" />
            <FormAddressField value={`${stepValue}.${index}`} />
          </>
        )}
      </div>
    </Card>
  );
};

export default BeneficiaryCard;
