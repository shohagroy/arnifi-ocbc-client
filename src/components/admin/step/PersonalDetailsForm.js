import { useDeleteStepFildMutation } from "@/redux/features/stepField/stepFieldApi";
import { message } from "antd";
import React from "react";
import FormHeading from "@/components/ui/will/FormHeading";
import PersonalInfo from "../formSections/PersonalInfo";

const PersonalDetailsForm = ({
  stepValue,
  formInputFields,
  countriesOptions,
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

  return (
    <div>
      {contextHolder}
      <FormHeading heading={"First, we need some details from you"} />

      <PersonalInfo
        stepValue={stepValue}
        isEditable={isEditable}
        data={formInputFields}
        countriesOptions={countriesOptions}
        idTypeOptions={idTypeOptions}
        setStepFields={setStepFields}
        deleteModalOkHandelar={deleteModalOkHandelar}
        loading={deleteLoading}
      />

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default PersonalDetailsForm;
