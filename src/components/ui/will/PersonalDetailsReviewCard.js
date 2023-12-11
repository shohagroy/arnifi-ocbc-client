import { Button, Card } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

const PersonalDetailsReviewCard = ({ fields, values }) => {
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
        <h3 className="text-xl font-semibold">Personal Details</h3>
        <Button icon={<EditOutlined />} type="link">
          Edit
        </Button>
      </div>
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-primary">
          {otherFields?.map((data, i) => {
            const { label, value } = data || {};
            return (
              <div key={i}>
                <p>{label}</p>
                <p className="text- font-semibold">{value}</p>
              </div>
            );
          })}
        </div>

        {addressFields && (
          <div className="my-4 ">
            <p>{addressFields?.label}</p>
            <div className="text- font-semibold">
              <p>{addressFields?.value?.line1}</p>
              <p>{addressFields?.value?.line2}</p>
              <p>
                {addressFields?.value?.country} -{" "}
                {addressFields?.value?.postalCode}
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PersonalDetailsReviewCard;
