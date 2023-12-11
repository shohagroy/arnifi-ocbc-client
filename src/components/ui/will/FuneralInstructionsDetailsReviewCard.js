import { Button, Card } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

const FuneralInstructionsDetailsReviewCard = ({ instructions }) => {
  const { religion, instructions: instructionsValue } = instructions || {};
  return (
    <div className="font-primary">
      <div className="flex justify-between items-center p-1 font-primary">
        <h3 className="text-xl font-semibold">
          Funeral Instructions (Optional)
        </h3>
        <Button icon={<EditOutlined />} type="link">
          Edit
        </Button>
      </div>
      <Card className="p-4 font-primary">
        <div className="my-4">
          <p>Religion</p>
          <p className="font-semibold">{religion}</p>
        </div>

        <div className="my-4">
          <p>Instructions</p>
          <p className="font-semibold">{instructionsValue}</p>
        </div>
      </Card>
    </div>
  );
};

export default FuneralInstructionsDetailsReviewCard;
