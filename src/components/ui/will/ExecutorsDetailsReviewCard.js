import { Button, Card } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

const ExecutorsDetailsReviewCard = ({ executors, alternativeExecutors }) => {
  return (
    <div>
      <div className="flex justify-between items-center p-1 font-primary">
        <h3 className="text-xl font-semibold">Executors</h3>
        <Button icon={<EditOutlined />} type="link">
          Edit
        </Button>
      </div>
      <Card className="p-4">
        <div>
          <p>Executors Details</p>
          <div className="flex my-6 items-start">
            <p className="h-6 w-6 flex justify-center items-center bg-gray-200 rounded-full">
              1
            </p>
            <div className="ml-2 -mt-1 font-semibold font-primary">
              <p>{executors?.fullName}</p>
              <p>
                {executors?.idNumber} <small>({executors?.idType})</small>
              </p>

              <p>{executors?.address?.line1}</p>
              <p>{executors?.address?.line2}</p>
              <p>
                {executors?.address?.country}- {executors?.address?.postalCode}
              </p>
            </div>
          </div>

          <div className="flex mt-6 items-start">
            <p className="h-6 w-6 flex justify-center items-center bg-gray-200 rounded-full">
              2
            </p>
            <div className="ml-2 -mt-1 font-semibold font-primary">
              <p>{alternativeExecutors?.fullName}</p>
              <p>
                {alternativeExecutors?.idNumber}{" "}
                <small>({alternativeExecutors?.idType})</small>
              </p>

              <p>{alternativeExecutors?.address?.line1}</p>
              <p>{alternativeExecutors?.address?.line2}</p>
              <p>
                {alternativeExecutors?.address?.country}-{" "}
                {alternativeExecutors?.address?.postalCode}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExecutorsDetailsReviewCard;
