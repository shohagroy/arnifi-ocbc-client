import { Button, Card } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

const SpecialInstructionsReviewCard = ({ specialInstructions }) => {
  return (
    <div className="font-primary">
      <div className="flex justify-between items-center p-1 font-primary">
        <h3 className="text-xl font-semibold">Special Instructions</h3>
        <Button icon={<EditOutlined />} type="link">
          Edit
        </Button>
      </div>
      <Card className="p-4 font-primary">
        <div className="my-4">
          <h4>{specialInstructions}</h4>
        </div>
      </Card>
    </div>
  );
};

export default SpecialInstructionsReviewCard;
