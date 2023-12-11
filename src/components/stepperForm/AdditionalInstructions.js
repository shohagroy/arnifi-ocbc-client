"use client";

import { Card } from "antd";
import React from "react";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import FormTextarea from "../forms/FormTextarea";
import { ENUM_FORM_STEPS } from "@/constans/steps";

const AdditionalInstructions = () => {
  const stepValue = ENUM_FORM_STEPS.INSTRUCTIONS;

  return (
    <div>
      <div>
        <div className="p-2">
          <FormHeading
            optional
            heading={"Do you have any additional instructions?"}
          />

          <FormText
            text={
              "The information collected on this screen will be attached as an appendix to the Will. In this section, you can include detailed instructions regarding guardians of your children, funeral arrangements, last messages to loved ones, etc."
            }
          />

          <FormText
            text={
              "These instructions are not compulsory and may not be legally binding, but they will help the executor carry out your wishes."
            }
          />
        </div>
        <Card className="p-10">
          <div>
            <FormTextarea
              label={"Instructions"}
              name={`${stepValue}.specialInstructions`}
              required={false}
              placeholder={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, quod quae labore quos enim laboriosam quasi veniam vel iste at necessitatibus, odio doloremque illo dicta omnis earum repellendus nemo possimus rem quaerat blanditiis! Aliquam repellat facere nisi vero maiores?"
              }
            />
          </div>
        </Card>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default AdditionalInstructions;
