"use client";

import { Card } from "antd";
import React from "react";
import FormSelectField from "../forms/FormSelectField";
import { ENUM_FORM_STEPS } from "@/constans/steps";

const Instructions = () => {
  const stepValue = ENUM_FORM_STEPS.INSTRUCTIONS;

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
              Do you wish to set any funeral instructions?
            </h2>
          </div>

          <div className="text-sm py-6">
            <p className="">
              You may provide detailed instructions for your preferred funeral
              arrangements. Funeral instructions are not compulsory and may not
              be legally binding, but they will help your executor carry out
              your wishes.
            </p>
          </div>

          {/* <div className="py-6 ">
            <a className="text-primary flex" href="/">
              <QuestionCircleOutlined />
              <p className="px-2">More information about Gift of Monies</p>
            </a>
          </div> */}
        </div>
        <Card>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <FormSelectField
                label={"Religion"}
                name={`${stepValue}.religion`}
                required
                options={idTypeOptions}
                type={"text"}
              />
            </div>

            <div></div>
            <div>
              <FormSelectField
                label={"Instructions"}
                name={`${stepValue}.instructions`}
                required
                options={idTypeOptions}
                type={"text"}
              />
            </div>
          </div>
        </Card>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default Instructions;
