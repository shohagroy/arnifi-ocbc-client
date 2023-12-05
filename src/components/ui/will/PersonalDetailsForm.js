import UpdateDeleteBtn from "@/components/admin/formSections/UpdateDeleteBtn";
import FormAddressField from "@/components/forms/FormAddressField";
import FormGenderRadio from "@/components/forms/FormGenderRadio";
import FormInput from "@/components/forms/FormInput";
import FormRadio from "@/components/forms/FormRadio";
import FormSelectField from "@/components/forms/FormSelectField";
import { useDeleteStepFildMutation } from "@/redux/features/stepFild/stepFildApi";
import { message } from "antd";
import React from "react";
import PersonalInfo from "./PersonalInfo";
import FormHeading from "@/components/ui/will/FormHeading";

const PersonalDetailsForm = ({
  formInputFields,
  countriesOptions,
  idTypeOptions,
  isEditable,
  setStepFild,
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
        isEditable={isEditable}
        data={formInputFields}
        countriesOptions={countriesOptions}
        idTypeOptions={idTypeOptions}
        setStepFild={setStepFild}
        deleteModalOkHandelar={deleteModalOkHandelar}
        loading={deleteLoading}
      />
    </div>
  );
};

export default PersonalDetailsForm;
