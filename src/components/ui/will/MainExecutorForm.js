import { useDeleteStepFildMutation } from "@/redux/features/stepFild/stepFildApi";
import { message } from "antd";
import React from "react";
import PersonalInfo from "./PersonalInfo";
import { QuestionCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormHeading from "./FormHeading";
import FormText from "./FormText";
// import FormLinkText from "./FormModalText";
import AlternativeExecutorForm from "./AlternativeExecutorForm";

const MainExecutorForm = ({
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
        <FormHeading heading={"Who will be the Executor(s) of your Will?"} />
        <FormText
          text={
            "The Main Executor is the person appointed to carry out the wishes of this Will."
          }
        />
        <FormText
          text={`An Executor must be over the age of 21, not be a bankrupt and is of
            sound mind to carry out his or her duties under the Will upon the
            Testator’s demise. An Executor can also be a Beneficiary under a
            Will.`}
        />
        {/* <FormLinkText
          text={" More information about Executors and their responsibilities"}
          link={"/"}
        /> */}
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

      <div>
        <AlternativeExecutorForm
          isEditable={isEditable}
          data={formInputFields}
          countriesOptions={countriesOptions}
          idTypeOptions={idTypeOptions}
          setStepFields={setStepFields}
          deleteModalOkHandelar={deleteModalOkHandelar}
          loading={deleteLoading}
        />
      </div>
    </div>
  );
};

export default MainExecutorForm;
