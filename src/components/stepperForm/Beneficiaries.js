"use client";

import { Button, Card, Checkbox } from "antd";
import React, { useState } from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { QuestionCircleOutlined, PlusOutlined } from "@ant-design/icons";

const Beneficiaries = () => {
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
      <div className="p-2">
        <h2 className="pt-10 font-semibold text-3xl">
          Who will be the Beneficiaries of Your Will?
        </h2>

        <div className="text-sm ">
          <p className="py-6">
            The Beneficiaries are the people who will benefit from the asset
            allocation indicated in this will.
          </p>
        </div>

        <div className="py-6 ">
          <a className="text-primary flex" href="/">
            <QuestionCircleOutlined />
            <p className="px-2">More information about Beneficiaries</p>
          </a>
        </div>
      </div>
      <Card>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <FormInput
              label={"Full name of first beneficiary"}
              name={"executorName"}
              placeholder={"Type Full Name"}
              required
              type={"text"}
            />
          </div>
          <div>
            <FormSelectField
              label={"Relationship"}
              name={"idType"}
              required
              options={idTypeOptions}
              type={"text"}
            />
          </div>
          <div>
            <FormSelectField
              label={"Type of ID"}
              name={"idType"}
              required
              options={idTypeOptions}
              type={"text"}
            />
          </div>

          <div>
            <FormInput
              label={"NRIC/Passport No./ID No."}
              name={"idNumber"}
              placeholder={"e.g.S1234567A"}
              required
              type={"text"}
            />
          </div>

          <div>
            <FormInput
              label={"Address"}
              required
              type={"text"}
              placeholder={"address line 1"}
              name={"address"}
            />
          </div>
          <div></div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <FormInput
                  type={"text"}
                  placeholder={"address line 2"}
                  name={"address"}
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
          Add another beneficiary
        </Button>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default Beneficiaries;
