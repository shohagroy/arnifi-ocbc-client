import { Button, Card } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

const SpecialAssetsReviewCard = ({ instructions }) => {
  const { specifyAssets } = instructions || {};

  console.log(specifyAssets);
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
          const { asset, category, value, description } = item;
          return (
            <div className="my-4" key={i}>
              <div className="my-4 grid grid-cols-3 gap-4 ">
                <p>Special asset name</p>
                <p>Category</p>
                <p>Estimated value of special asset</p>

                <p>{asset}</p>
                <p>{category}</p>
                <p>{value}</p>
              </div>

              <div>
                <p>Description</p>
                <p className="font-semibold">{description}</p>
              </div>
            </div>
          );
        })}

        <div className="my-4"></div>
      </Card>
    </div>
  );
};

export default SpecialAssetsReviewCard;
