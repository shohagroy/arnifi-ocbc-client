import React from "react";
import FormSelectField from "../forms/FormSelectField";
import FormInput from "../forms/FormInput";
import { Button, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { useFieldArray } from "react-hook-form";

const AssetSum = ({
  data,
  value,
  index,
  setSumCount,
  sumCount,
  beneficiaryOptions,
}) => {
  const { remove } = useFieldArray({ name: "assetAllocation.sumMoney" });
  const { sumMoneyFields, beneficiaryFields } = data || {};

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
            name={`${value}.money`}
          />
        </div>

        <div>
          <FormSelectField
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

export default AssetSum;
