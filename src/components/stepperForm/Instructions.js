"use client";

import { Button, Card } from "antd";
import React, { useState } from "react";
import FormSelectField from "../forms/FormSelectField";
import {
  ENUM_FORM_STEPS,
  instructionsOptions,
  religionOptions,
} from "@/constans/steps";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import FormInput from "../forms/FormInput";
import FormTextarea from "../forms/FormTextarea";
import InstructionsAssetCard from "./InstructionsAssetCard";
import { PlusOutlined } from "@ant-design/icons";

const Instructions = () => {
  const [assetCount, setAssetCount] = useState(1);
  const stepValue = ENUM_FORM_STEPS.INSTRUCTIONS;

  const assetsDetails = [...Array(assetCount)]?.map((_) => {
    return {};
  });

  return (
    <div>
      <div>
        <div className="p-2">
          <FormHeading
            optional
            heading={"Do you wish to set any funeral instructions?"}
          />

          <FormText
            text={
              "You may provide detailed instructions for preferred funeral arrangements. Funeral instructions are not compulsory and may not be legally binding, but they will help your executor carry out your wishes."
            }
          />
        </div>
        <Card>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <FormSelectField
                label={"Religion"}
                name={`${stepValue}.religion`}
                required
                options={religionOptions}
                type={"text"}
              />
            </div>

            <div></div>
            <div>
              <FormSelectField
                label={"Instructions"}
                name={`${stepValue}.instructions`}
                required
                options={instructionsOptions}
                type={"text"}
              />
            </div>
          </div>
        </Card>
      </div>

      <div>
        <div className="">
          <div className="p-2">
            <FormHeading
              optional
              heading={"Do you have any assets that you would like to specify?"}
            />

            <FormText
              text={
                "The information provided here will be attached as an appendix to your Will. These instructions are not compulsory and may not be legally binding, but they may help the executor(s) locate your assets easily."
              }
            />
          </div>

          {assetsDetails?.map((item, i) => {
            return (
              <InstructionsAssetCard
                key={i}
                index={i}
                stepValue={`${stepValue}.specifyAssets.${i}`}
                setAssetCount={setAssetCount}
                assetCount={assetCount}
              />
            );
          })}
        </div>

        <div className="my-10">
          <Button
            onClick={() => setAssetCount(assetCount + 1)}
            icon={<PlusOutlined />}
            className="bg-primary hover:bg-secondary px-[12px]"
            size="large"
            type="primary"
          >
            Add another asset
          </Button>
        </div>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default Instructions;
