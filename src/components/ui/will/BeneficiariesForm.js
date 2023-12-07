import { useDeleteStepFildMutation } from "@/redux/features/stepFild/stepFildApi";
import { message } from "antd";
import React from "react";
import PersonalInfo from "./PersonalInfo";
import { QuestionCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormHeading from "./FormHeading";
import FormText from "./FormText";
import FormModalText from "./FormModalText";
// import FormLinkText from "./FormModalText";

const BeneficiariesForm = ({
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

      <div className="">
        <FormHeading heading={"Who will be the Beneficiaries of Your Will?"} />
        <FormText
          text={
            "The Beneficiaries are the people who will benefit from the asset allocation indicated in this will."
          }
        />

        <FormModalText
          text={"More information about Beneficiaries"}
          data={[]}
        />
      </div>

      <PersonalInfo
        isEditable={isEditable}
        data={formInputFields}
        countriesOptions={countriesOptions}
        idTypeOptions={idTypeOptions}
        setStepFields={setStepFields}
        deleteModalOkHandelar={deleteModalOkHandelar}
        loading={deleteLoading}
      />
    </div>
  );
};

export default BeneficiariesForm;
