"use client";

import { Button, Card, message } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import { useDeleteStepFildMutation } from "@/redux/features/stepFild/stepFildApi";
import UpdateDeleteBtn from "@/components/admin/formSections/UpdateDeleteBtn";
import FormHeading from "@/components/ui/will/FormHeading";
import FormText from "@/components/ui/will/FormText";
import FormModalText from "@/components/ui/will/FormModalText";

const AssetAllocationForm = ({
  formInputFields,
  idTypeOptions,
  isEditable,
  setStepFields,
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

  const addressType = formInputFields?.find((item) => item.type === "address");
  const beneficiaryType = formInputFields?.find(
    (item) => item.type === "select"
  );
  const sumMoneyType = formInputFields?.find((item) => item.type === "text");

  return (
    <div>
      {contextHolder}
      <div>
        <div className="p-2">
          <FormHeading
            optional
            heading={"Do you have any property to give to your beneficiaries?"}
          />
          <FormText
            text={
              "You can choose to allocate your owned properties (if any) to your beneficiaries."
            }
          />
          <FormText
            text={
              "This is only applicable for property under single ownership and may not apply for other types of property ownership arrangements."
            }
          />

          <FormModalText
            text={"More information about Gift of Immovable Property"}
          />
        </div>

        <Card>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {addressType && (
              <div>
                {isEditable && (
                  <UpdateDeleteBtn
                    data={addressType}
                    setStepFields={setStepFields}
                    deleteModalOkHandelar={deleteModalOkHandelar}
                    loading={deleteLoading}
                  />
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-full">
                    <FormInput
                      label={"Address"}
                      required
                      type={"text"}
                      placeholder={"address line 1"}
                      name={"address.line1"}
                    />
                  </div>

                  <div className="col-span-full">
                    <FormInput
                      required
                      type={"text"}
                      placeholder={"address line 2"}
                      name={"address.line2"}
                    />
                  </div>

                  <div>
                    <FormSelectField
                      name={"address.country"}
                      placeholder="select country"
                      required
                      options={[]}
                      type={"text"}
                    />
                  </div>

                  <div className="">
                    <FormInput
                      required
                      type={"text"}
                      placeholder={"postal code"}
                      name={"address.postalCode"}
                    />
                  </div>
                </div>
              </div>
            )}

            {beneficiaryType && (
              <div>
                {isEditable && (
                  <UpdateDeleteBtn
                    data={beneficiaryType}
                    setStepFields={setStepFields}
                    deleteModalOkHandelar={deleteModalOkHandelar}
                    loading={deleteLoading}
                  />
                )}
                <FormSelectField
                  label={beneficiaryType?.label}
                  name={beneficiaryType?.name}
                  required
                  options={idTypeOptions}
                  type={beneficiaryType?.type}
                />
              </div>
            )}
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
          <FormHeading
            optional
            heading={
              "Do you wish to give a sum of money to your beneficiaries?"
            }
          />
          <FormText
            text={
              "A “sum of money” here refers to a fixed amount of money that you wish to allocate to your beneficiaries. "
            }
          />

          <FormModalText text={"More information about Gift of Monies"} />
        </div>
        <Card>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {sumMoneyType && (
                <div>
                  {isEditable && (
                    <UpdateDeleteBtn
                      data={sumMoneyType}
                      setStepFields={setStepFields}
                      deleteModalOkHandelar={deleteModalOkHandelar}
                      loading={deleteLoading}
                    />
                  )}
                  <FormInput
                    label={sumMoneyType?.label}
                    required
                    type={sumMoneyType?.type}
                    placeholder={sumMoneyType?.placeholder}
                    name={sumMoneyType?.name}
                  />
                </div>
              )}
            </div>

            {beneficiaryType && (
              <div>
                {isEditable && (
                  <UpdateDeleteBtn
                    data={beneficiaryType}
                    setStepFields={setStepFields}
                    deleteModalOkHandelar={deleteModalOkHandelar}
                    loading={deleteLoading}
                  />
                )}

                <FormSelectField
                  label={beneficiaryType?.label}
                  name={beneficiaryType?.name}
                  required
                  options={idTypeOptions}
                  type={beneficiaryType?.type}
                />
              </div>
            )}
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
