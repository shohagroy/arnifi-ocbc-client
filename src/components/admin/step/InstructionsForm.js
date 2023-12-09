"use client";

import { Card, message } from "antd";
import React from "react";
import FormSelectField from "@/components/forms/FormSelectField";
import { useDeleteStepFildMutation } from "@/redux/features/stepField/stepFieldApi";
import UpdateDeleteBtn from "@/components/admin/formSections/UpdateDeleteBtn";
import FormHeading from "@/components/ui/will/FormHeading";
import FormText from "@/components/ui/will/FormText";
import FormTextarea from "@/components/forms/FormTextarea";
import FormInput from "@/components/forms/FormInput";

const InstructionsForm = ({
  formInputFields,
  isEditable,
  setStepFields,
  stepValue,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [deleteStepFild, { isLoading: deleteLoading }] =
    useDeleteStepFildMutation();

  const deleteModalOkHandelar = async (data) => {
    try {
      const result = await deleteStepFild(data?.id).unwrap();
      messageApi.open({
        type: "success",
        content: result?.data?.message || "Deleted Successfully!",
      });
      isEditable(false);
    } catch (error) {
      messageApi.open({
        type: "success",
        content: error?.message || "Deleted Successfully!",
      });
    }
  };

  const religion = formInputFields?.find((item) => item?.name === "religion");
  const instructions = formInputFields?.find(
    (item) => item?.name === "instructions"
  );
  const asset = formInputFields?.find((item) => item?.name === "asset");
  const category = formInputFields?.find((item) => item?.name === "category");
  const estimatedValue = formInputFields?.find(
    (item) => item?.name === "estimatedValue"
  );
  const description = formInputFields?.find(
    (item) => item?.name === "description"
  );

  return (
    <div>
      {contextHolder}
      <div>
        <div className="p-2">
          <FormHeading
            optional
            heading={"Do you wish to set any funeral instructions?"}
          />
          <FormText
            text={
              "You may provide detailed instructions for your preferred funeral arrangements. Funeral instructions are not compulsory and may not be legally binding, but they will help your executor carry out your wishes."
            }
          />
        </div>

        <Card>
          <div className="w-1/2 my-4">
            {isEditable && (
              <UpdateDeleteBtn
                data={religion}
                setStepFields={setStepFields}
                deleteModalOkHandelar={deleteModalOkHandelar}
                loading={deleteLoading}
              />
            )}
            <FormSelectField
              label={religion?.label}
              name={`${stepValue}.${religion?.name}`}
              required
              options={[]}
              type={religion?.type}
            />
          </div>

          <div className="w-1/2 my-4">
            {isEditable && (
              <UpdateDeleteBtn
                data={instructions}
                setStepFields={setStepFields}
                deleteModalOkHandelar={deleteModalOkHandelar}
                loading={deleteLoading}
              />
            )}
            <FormSelectField
              label={instructions?.label}
              name={`${stepValue}.${instructions?.name}`}
              required
              options={[]}
              type={instructions?.type}
            />
          </div>
        </Card>
      </div>

      <div>
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

        <Card>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              {isEditable && (
                <UpdateDeleteBtn
                  data={asset}
                  setStepFields={setStepFields}
                  deleteModalOkHandelar={deleteModalOkHandelar}
                  loading={deleteLoading}
                />
              )}
              <FormInput
                label={asset?.label}
                name={`${stepValue}.${asset?.name}`}
                placeholder={asset?.placeholder}
                required={asset?.isRequired}
                type={asset?.type}
              />
            </div>

            <div>
              {isEditable && (
                <UpdateDeleteBtn
                  data={category}
                  setStepFields={setStepFields}
                  deleteModalOkHandelar={deleteModalOkHandelar}
                  loading={deleteLoading}
                />
              )}
              <FormSelectField
                label={category?.label}
                name={`${stepValue}.${category?.name}`}
                placeholder={category?.placeholder}
                required={category?.isRequired}
                options={[]}
                type={category?.type}
              />
            </div>

            <div>
              {isEditable && (
                <UpdateDeleteBtn
                  data={estimatedValue}
                  setStepFields={setStepFields}
                  deleteModalOkHandelar={deleteModalOkHandelar}
                  loading={deleteLoading}
                />
              )}
              <FormInput
                label={estimatedValue?.label}
                name={`${stepValue}.${estimatedValue?.name}`}
                placeholder={estimatedValue?.placeholder}
                required={estimatedValue?.isRequired}
                type={estimatedValue?.type}
              />
            </div>

            <div className="col-span-3">
              {isEditable && (
                <UpdateDeleteBtn
                  data={description}
                  setStepFields={setStepFields}
                  deleteModalOkHandelar={deleteModalOkHandelar}
                  loading={deleteLoading}
                />
              )}
              <FormTextarea
                label={description?.label}
                name={`${stepValue}.${description?.name}`}
                placeholder={estimatedValue?.placeholder}
                required={estimatedValue?.isRequired}
                type={description?.type}
              />
            </div>
          </div>
        </Card>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default InstructionsForm;
