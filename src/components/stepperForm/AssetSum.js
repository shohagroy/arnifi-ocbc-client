import React, { useState } from "react";
import FormSelectField from "../forms/FormSelectField";
import FormInput from "../forms/FormInput";
import { Button, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { useFieldArray } from "react-hook-form";
import { ENUM_FORM_STEPS } from "@/constans/steps";

const AssetSum = ({
  data,
  value,
  index,
  setSumCount,
  sumCount,
  beneficiaryOptions,
}) => {
  const { sumMoneyFields, beneficiaryFields } = data || {};
  const [beneficiaryIndex, setBeneficiaryIndex] = useState(0);
  const stepValue = ENUM_FORM_STEPS.BENEFICIARIES;

  const { remove, fields, update } = useFieldArray({
    name: `${stepValue}.${beneficiaryIndex}.giveMoney`,
  });

  const current = { ...fields };

  const propertiesAddHandelar = (e) => {
    console.log(e);
  };

  const locationRemoveHandelar = () => {
    remove(index);
    setLocationCount(locationCount - 1);
  };

  const sumMoneyRemoveHandelar = () => {
    remove(index);
    setSumCount(sumCount - 1);
  };

  return (
    <Card className="my-4">
      <div className="px-4 flex justify-between ">
        <p className="font-primary text-sm h-10 w-10 bg-gray-200 flex justify-center items-center rounded-full ">
          {index + 1}
        </p>
        <div className="w-[150px] flex justify-end text-xl text-gray-500">
          {index !== 0 && (
            <Button danger type="link" onClick={sumMoneyRemoveHandelar}>
              <DeleteOutlined />
            </Button>
          )}
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <FormInput
            label={sumMoneyFields?.label}
            required
            type={"number"}
            placeholder={sumMoneyFields?.money}
            name={`${stepValue}.${beneficiaryIndex}.giveMoney.value`}
          />
        </div>

        <div>
          <FormSelectField
            label={beneficiaryFields?.label}
            name={`${value}.beneficiary`}
            handleChange={(e) => setBeneficiaryIndex(e)}
            value={index}
            required
            options={beneficiaryOptions || []}
            type={"text"}
          />
        </div>
      </div>
    </Card>
  );
};

export default AssetSum;
