import { Button, Card } from "antd";
import React from "react";
import FormInput from "../forms/FormInput";
import FormTextarea from "../forms/FormTextarea";
import { DeleteOutlined } from "@ant-design/icons";
import { useFieldArray } from "react-hook-form";
import FormSelectField from "../forms/FormSelectField";
import { assetsCategories } from "@/constans/steps";

const InstructionsAssetCard = ({
  setAssetCount,
  assetCount,
  index,
  stepValue,
}) => {
  const { remove } = useFieldArray({ name: stepValue });
  const assetRemoveHandelar = () => {
    remove(index);
    setAssetCount(assetCount - 1);
  };
  return (
    <Card className="my-6">
      <div className="px-4 flex justify-between ">
        <p className="font-primary text-sm h-10 w-10 bg-gray-200 flex justify-center items-center rounded-full ">
          {index + 1}
        </p>
        <div className="w-[150px] flex justify-end text-xl text-gray-500">
          {index !== 0 && (
            <Button danger type="link" onClick={assetRemoveHandelar}>
              <DeleteOutlined />
            </Button>
          )}
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <FormInput
            placeholder={"asset name"}
            type={"text"}
            label={"Asset"}
            name={`${stepValue}.asset`}
          />
        </div>
        <div>
          <FormSelectField
            type={"text"}
            options={assetsCategories || []}
            placeholder={"category"}
            label={"Category"}
            name={`${stepValue}.category`}
          />
        </div>
        <div>
          <FormInput
            type={"number"}
            placeholder={"eg.100"}
            label={"Estimated value of asset"}
            name={`${stepValue}.value`}
          />
        </div>

        <div className="col-span-3">
          <FormTextarea
            type={"text"}
            placeholder={"description"}
            label={"Description"}
            name={`${stepValue}.description`}
          />
        </div>
      </div>
    </Card>
  );
};

export default InstructionsAssetCard;
