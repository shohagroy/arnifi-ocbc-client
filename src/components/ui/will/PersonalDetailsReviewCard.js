import { Button, Card } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

const PersonalDetailsReviewCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-1 font-primary">
        <h3 className="text-xl font-semibold">Personal Details</h3>
        <Button icon={<EditOutlined />} type="link">
          Edit
        </Button>
      </div>
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-primary">
          <div>
            <p>Name</p>
            <p className="text-xl font-semibold">Full Name</p>
          </div>
          <div>
            <p>Gender</p>
            <p className="text-xl font-semibold">Male</p>
          </div>
          <div>
            <p>Type Of ID</p>
            <p className="text-xl font-semibold">NRIC (Blue)</p>
          </div>
          <div>
            <p>NRIC/Passport No./ID No.</p>
            <p className="text-xl font-semibold">NRIC/Passport No./ID No.</p>
          </div>
          <div>
            <p>Citizenship</p>
            <p className="text-xl font-semibold">Bangladesh</p>
          </div>
        </div>

        <div className="my-4">
          <p>Address</p>
          <p className="text-xl font-semibold">Address Line 1</p>
          <p className="text-xl font-semibold">Address Line 2</p>
          <p className="text-xl font-semibold">Country - postal code</p>
        </div>
      </Card>
    </div>
  );
};

export default PersonalDetailsReviewCard;
