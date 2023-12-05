"use client";

import { Button, Card, Checkbox } from "antd";
import React, { useState } from "react";
// import FormInput from "../forms/FormInput";
// import FormSelectField from "../forms/FormSelectField";
import { QuestionCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";

const AssetAllocationForm = () => {
  const [address, setAddress] = useState(false);
  const idTypeOptions = [
    {
      value: "Options - 1",
      label: "Options - 1",
    },
    {
      value: "Options - 2",
      label: "Options - 2",
    },
    {
      value: "Options - 3",
      label: "Options - 3",
    },
    {
      value: "Options - 5",
      label: "Options - 5",
    },
    {
      value: "Options - 6",
      label: "Options - 6",
    },
    {
      value: "Options - 7",
      label: "Options - 7",
    },
    {
      value: "Options - 8",
      label: "Options - 8",
    },
    {
      value: "Options - 9",
      label: "Options - 9",
    },
    {
      value: "Options - 10",
      label: "Options - 10",
    },
  ];

  return (
    <div>
      <div>
        <div className="p-2">
          <div className="pt-10 font-semibold">
            <p>(Optional)</p>
            <h2 className="text-3xl">
              Do you have any property to give to your beneficiaries?
            </h2>
          </div>

          <div className="text-sm py-6">
            <p className="">
              You can choose to allocate your owned properties (if any) to your
              beneficiaries.
            </p>
            <p className="">
              This is only applicable for property under single ownership and
              may not apply for other types of property ownership arrangements.
            </p>
          </div>

          <div className="py-6 ">
            <a className="text-primary flex" href="/">
              <QuestionCircleOutlined />
              <p className="px-2">
                More information about Gift of Immovable Property
              </p>
            </a>
          </div>
        </div>
        <Card>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <FormInput
                label={"Address"}
                required
                type={"text"}
                placeholder={"address line 1"}
                name={"address.line1"}
              />
            </div>

            <div>
              <FormSelectField
                label={"Beneficiary"}
                name={"idType"}
                required
                options={idTypeOptions}
                type={"text"}
              />
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <FormInput
                    type={"text"}
                    placeholder={"address line 2"}
                    name={"address.line2"}
                  />
                </div>
                <div>
                  <FormSelectField
                    required
                    name={"citizenship"}
                    options={idTypeOptions}
                    type={"text"}
                  />
                </div>
                <div>
                  <FormInput
                    required
                    type={"text"}
                    placeholder={"postal code"}
                    name={"postalCode"}
                  />
                </div>
              </div>
              <Checkbox
                className="py-2"
                onChange={(e) => setAddress(e.target.checked)}
              >
                Same as my address
              </Checkbox>
            </div>
          </div>
        </Card>

        <div className="my-10">
          <Button
            icon={<PlusOutlined />}
            className="bg-primary hover:bg-secondary px-[12px]"
            size="large"
            type="primary"
          >
            Add another immovable Property
          </Button>
        </div>
      </div>

      <div>
        <div className="p-2">
          <div className="pt-10 font-semibold">
            <p>(Optional)</p>
            <h2 className="text-3xl">
              Do you wish to give a sum of money to your beneficiaries?
            </h2>
          </div>

          <div className="text-sm py-6">
            <p className="">
              A “sum of money” here refers to a fixed amount of money that you
              wish to allocate to your beneficiaries.
            </p>
          </div>

          <div className="py-6 ">
            <a className="text-primary flex" href="/">
              <QuestionCircleOutlined />
              <p className="px-2">More information about Gift of Monies</p>
            </a>
          </div>
        </div>
        <Card>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <FormInput
                label={"Sum of money (in SGD)"}
                required
                type={"text"}
                placeholder={"money"}
                name={"money"}
              />
            </div>

            <div>
              <FormSelectField
                label={"Beneficiary"}
                name={"beneficiary"}
                required
                options={idTypeOptions}
                type={"text"}
              />
            </div>
          </div>
        </Card>

        <div className="my-10">
          <Button
            icon={<PlusOutlined />}
            className="bg-primary hover:bg-secondary px-[12px]"
            size="large"
            type="primary"
          >
            Add another Sum of Money allocation
          </Button>
        </div>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default AssetAllocationForm;
