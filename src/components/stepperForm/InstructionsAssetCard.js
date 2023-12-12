import { Button, Card } from "antd";
import React from "react";
import FormInput from "../forms/FormInput";
import FormTextarea from "../forms/FormTextarea";
import { DeleteOutlined } from "@ant-design/icons";
import { useFieldArray } from "react-hook-form";
import FormSelectField from "../forms/FormSelectField";
import { assetsCategories } from "@/constans/steps";

const InstructionsAssetCard = ({
  data,
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
  const assetField = data?.find((item) => item?.name === "asset");
  const categoryField = data?.find((item) => item?.name === "category");
  const estimatedvalueField = data?.find(
    (item) => item?.name === "estimatedValue"
  );

  const descriptionField = data?.find((item) => item?.name === "description");

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
            placeholder={assetField?.placeholder}
            type={assetField?.type}
            label={assetField?.label}
            required={assetField?.isRequired}
            name={`${stepValue}.${index}.${assetField?.name}`}
          />
        </div>
        <div>
          <FormSelectField
            options={assetsCategories || []}
            placeholder={categoryField?.placeholder}
            label={categoryField?.label}
            required={categoryField?.isRequired}
            name={`${stepValue}.${index}.${categoryField?.name}`}
          />
        </div>
        <div>
          <FormInput
            placeholder={estimatedvalueField?.placeholder}
            type={estimatedvalueField?.type}
            label={estimatedvalueField?.label}
            required={estimatedvalueField?.isRequired}
            name={`${stepValue}.${index}.${estimatedvalueField?.name}`}
          />
        </div>

        {descriptionField && (
          <div className="col-span-3">
            <FormTextarea
              required={descriptionField?.isRequired}
              placeholder={descriptionField?.placeholder}
              label={descriptionField?.label}
              name={`${stepValue}.${index}.${descriptionField?.name}`}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default InstructionsAssetCard;
