import { Button, Card } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

const PersonalDetailsReviewCard = ({ fields, values }) => {
  // console.log(values);

  // console.log(fields);
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

  // console.log(fieldsWithValue);

  const addressFields = fieldsWithValue?.find(
    (field) => field?.name === "address"
  );
  const otherFields = fieldsWithValue?.filter(
    (field) => field?.name !== "address"
  );
  console.log(addressFields);
  // const allInfo =
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
          {otherFields?.map((data, i) => {
            const { label, value } = data || {};
            return (
              <div key={i}>
                <p>{label}</p>
                <p className="text-xl font-semibold">{value}</p>
              </div>
            );
          })}

          {/* <div>
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
          </div> */}
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
        )}
      </Card>
    </div>
  );
};

export default PersonalDetailsReviewCard;
