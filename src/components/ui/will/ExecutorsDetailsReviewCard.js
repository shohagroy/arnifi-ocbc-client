import { Button, Card } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

const ExecutorsDetailsReviewCard = ({
  fields,
  values,
  executors,
  alternativeExecutors,
}) => {
  const fieldsWithValue = Object.keys(values)?.map((key) => {
    const field = fields?.find((data) => data?.name === key);

    if (field) {
      return {
        label: field.label,
        name: field?.name,
        value: values[key],
      };
    }
  });

  const addressFields = fieldsWithValue?.find(
    (field) => field?.name === "address"
  );
  const otherFields = fieldsWithValue?.filter(
    (field) => field?.name !== "address"
  );
  return (
    <div>
      <div className="flex justify-between items-center p-1 font-primary">
        <h3 className="text-xl font-semibold">Executors</h3>
        <Button icon={<EditOutlined />} type="link">
          Edit
        </Button>
      </div>
      <Card className="p-6">
        <div>
          <p>Executors Details</p>
          <div className="flex my-6 items-start">
            <p className="h-6 w-6 flex justify-center items-center bg-gray-200 rounded-full">
              1
            </p>
            <div className="ml-2 -mt-1 text-lg font-semibold font-primary">
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
            <div className="ml-2 -mt-1 text-lg font-semibold font-primary">
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
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-primary">
          {otherFields?.map((data, i) => {
            const { label, value } = data || {};
            return (
              <div key={i}>
                <p>{label}</p>
                <p className="text-lg font-semibold">{value}</p>
              </div>
            );
          })}
        </div>

        {addressFields && (
          <div className="my-4 ">
            <p>{addressFields?.label}</p>
            <div className="text-xl font-semibold">
              <p>{addressFields?.value?.line1}</p>
              <p>{addressFields?.value?.line2}</p>
              <p>
                {addressFields?.value?.country} -{" "}
                {addressFields?.value?.postalCode}
              </p>
            </div>
          </div>
        )} */}
      </Card>
    </div>
  );
};

export default ExecutorsDetailsReviewCard;
