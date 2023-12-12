"use client";

import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import FormSelectField from "../forms/FormSelectField";
import {
  ENUM_FORM_STEPS,
  instructionsOptions,
  religionOptions,
} from "@/constans/steps";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import InstructionsAssetCard from "./InstructionsAssetCard";
import { PlusOutlined } from "@ant-design/icons";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import CardFormLoader from "../skeleton-loader/CardFormLoader";
import { useFormContext } from "react-hook-form";
import { generateInstructionsResolver } from "@/schemas/formSchema";
import { useDispatch } from "react-redux";
import { setFormValidator } from "@/redux/features/formResolver/formResolverSlice";

const Instructions = ({ country }) => {
  const { id } = country;

  const dispatch = useDispatch();
  const { watch } = useFormContext();
  const { specifyAssets } = watch()?.instructions || {};

  const [assetCount, setAssetCount] = useState(specifyAssets?.length || 1);
  const stepValue = ENUM_FORM_STEPS.INSTRUCTIONS;

  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${id}`);

  const findedStep = findStepsData?.data?.data;
  const stepFields = findedStep?.stepFilds || [];

  const religionFields = stepFields?.find((item) => item?.name === "religion");
  const instructionsFields = stepFields?.find(
    (item) => item?.name === "instructions"
  );

  const otherFields = stepFields?.filter(
    (item) => item?.name !== "religion" && item?.name !== "instructions"
  );

  const assetsDetails = [...Array(assetCount)]?.map((_) => {
    return otherFields;
  });
  const validatorData = { religionFields, instructionsFields, otherFields };
  const resolver = generateInstructionsResolver(validatorData);

  useEffect(() => {
    if (resolver) {
      dispatch(setFormValidator(resolver));
    }
  }, [dispatch, willLoading]);

  if (willLoading) {
    return <CardFormLoader />;
  }

  // console.log(validatorData);

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
                label={religionFields?.label}
                name={`${stepValue}.${religionFields?.name}`}
                required
                options={religionOptions}
              />
            </div>

            <div></div>
            <div>
              <FormSelectField
                label={instructionsFields?.label}
                name={`${stepValue}.${instructionsFields?.name}`}
                required
                options={instructionsOptions}
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
                data={item}
                key={i}
                index={i}
                stepValue={`${stepValue}.specifyAssets`}
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
