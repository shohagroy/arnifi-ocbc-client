"use client";

import { Card } from "antd";
import React from "react";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import FormRadio from "../forms/FormRadio";
import MIcon from "../../assets/male-icon.png";
import FIcon from "../../assets/female-icon.png";

const PersonalDetails = () => {
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

  const genderOptions = [
    {
      label: "Male",
      value: "male",
      icon: MIcon,
    },
    {
      label: "Female",
      value: "female",
      icon: FIcon,
    },
  ];

  return (
    <div>
      <h2 className="py-10 font-semibold text-3xl">
        First, we need some details from you
      </h2>
      <Card>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <FormInput
              label={"Full Name"}
              name={"name"}
              placeholder={"Type Full Name"}
              required
              type={"text"}
            />
          </div>

          <div>
            <FormRadio
              label={"Gender"}
              name={"gender"}
              required
              options={genderOptions}
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
            <FormSelectField
              label={"Citizenship"}
              name={"citizenship"}
              required
              options={idTypeOptions}
              type={"text"}
            />
          </div>
          <hr className="border-[#EEEEEE] col-span-2 my-4" />
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

          <div className="">
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
          </div>
        </div>
      </Card>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default PersonalDetails;
