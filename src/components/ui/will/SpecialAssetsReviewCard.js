import { Button, Card } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

const SpecialAssetsReviewCard = ({ instructions }) => {
  const { specifyAssets } = instructions || {};

  return (
    <div className="font-primary">
      <div className="flex justify-between items-center p-1 font-primary">
        <h3 className="text-xl font-semibold">Special Assets (Optional)</h3>
        <Button icon={<EditOutlined />} type="link">
          Edit
        </Button>
      </div>
      <Card className="p-4 font-primary">
        {specifyAssets?.map((item, i) => {
          const { asset, category, estimatedValue, description } = item;

          return (
            <Card key={i} className="my-4 font-primary">
              <div>
                <p className="h-8 w-8 bg-gray-200 flex justify-center items-center rounded-full">
                  {i + 1}
                </p>
                <div className="grid grid-cols-3 gap-4 ">
                  <p>Special asset name</p>
                  <p>Category</p>
                  <p>Estimated value of special asset</p>
                  <p className="font-semibold">{asset}</p>
                  <p className="font-semibold">{category}</p>
                  <p className="font-semibold">{estimatedValue}</p>
                </div>
                <div className="mt-4">
                  <p>Description</p>
                  <p className="font-semibold">{description}</p>
                </div>
              </div>
            </Card>
          );
        })}

        <div className="my-4"></div>
      </Card>
    </div>
  );
};

export default SpecialAssetsReviewCard;
