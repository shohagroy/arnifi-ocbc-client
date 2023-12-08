import { Button, Card } from "antd";
import React from "react";
import FormInput from "../forms/FormInput";
import FormTextarea from "../forms/FormTextarea";
import { DeleteOutlined } from "@ant-design/icons";

const InstructionsAssetCard = ({ setAssetCount, assetCount, index }) => {
  const assetRemoveHandelar = () => {
    //     const savedValues = JSON.parse(getFromLocalStorage("form-data"));
    // const updatedLocations = savedValues?.assetAllocation?.sumMoney?.filter(
    //   (_, i) => i !== index
    // );
    // const asset = savedValues?.assetAllocation;
    // const updatedData = {
    //   ...savedValues,
    //   assetAllocation: { ...asset, sumMoney: updatedLocations },
    // };

    // setToLocalStorage("form-data", JSON.stringify(updatedData));
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
          <FormInput type={"text"} label={"Asset"} name={"asset"} />
        </div>
        <div>
          <FormInput type={"text"} label={"Category"} name={"Category"} />
        </div>
        <div>
          <FormInput
            type={"text"}
            label={"Estimated value of asset"}
            name={"value"}
          />
        </div>

        <div className="col-span-3">
          <FormTextarea
            type={"text"}
            label={"Description"}
            name={"description"}
          />
        </div>
      </div>
    </Card>
  );
};

export default InstructionsAssetCard;
