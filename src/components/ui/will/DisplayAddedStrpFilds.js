import { useGetStepFildsQuery } from "@/redux/features/stepFild/stepFildApi";
import { Button, Divider } from "antd";
import React, { useState } from "react";

import Form from "@/components/forms/From";
import FormHeading from "@/components/ui/will/FormHeading";
import { generateSteperFormValidator } from "@/schemas/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonalDetailsForm from "./PersonalDetailsForm";
import { EditFilled } from "@ant-design/icons";
import { useGetCountryFormStepsQuery } from "@/redux/features/formStep/formStepApi";
import MainExecutorForm from "./MainExecutorForm";
import AlternativeExecutorForm from "./AlternativeExecutorForm";
import BeneficiariesForm from "./BeneficiariesForm";

const DisplayAddedStrpFilds = ({
  data,
  countriesOptions,
  idTypeOptions,
  setStepFild,
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const { countryId, stepId } = data || {};
  const search = `/${countryId}/${stepId}`;

  const { data: formStepsData, isLoading } =
    useGetCountryFormStepsQuery(countryId);

  const onSubmit = (data) => {
    console.log(data);
  };

  const selectedStep =
    formStepsData?.data?.data?.find((item) => item?.id === stepId) || {};

  // console.log(selectedStep)?.tittle;

  const stepFields = selectedStep?.stepFilds || [];

  const validator = generateSteperFormValidator(stepFields);

  return (
    <div>
      <Divider>
        <p className="font-primary text-lg">Added Form Input</p>
      </Divider>

      <div className="flex justify-end ">
        <Button
          onClick={() => setIsEditable(!isEditable)}
          className="text-2xl"
          type="link"
        >
          <EditFilled />
        </Button>
      </div>

      {stepFields?.length ? (
        <div className="max-w-5xl mx-auto">
          <Form submitHandler={onSubmit} resolver={yupResolver(validator)}>
            {selectedStep?.tittle === "Personal Details" && (
              <PersonalDetailsForm
                isEditable={isEditable}
                countriesOptions={countriesOptions}
                formInputFields={stepFields}
                idTypeOptions={idTypeOptions}
                setStepFild={setStepFild}
              />
            )}

            {selectedStep?.tittle === "Executors" && (
              <MainExecutorForm
                isEditable={isEditable}
                countriesOptions={countriesOptions}
                formInputFields={stepFields}
                idTypeOptions={idTypeOptions}
                setStepFild={setStepFild}
              />
            )}

            {selectedStep?.tittle === "Alternative Executor" && (
              <AlternativeExecutorForm
                isEditable={isEditable}
                countriesOptions={countriesOptions}
                formInputFields={stepFields}
                idTypeOptions={idTypeOptions}
                setStepFild={setStepFild}
              />
            )}

            {selectedStep?.tittle === "Beneficiaries" && (
              <BeneficiariesForm
                isEditable={isEditable}
                countriesOptions={countriesOptions}
                formInputFields={stepFields}
                idTypeOptions={idTypeOptions}
                setStepFild={setStepFild}
              />
            )}

            <div className="flex justify-end">
              <Button
                htmlType="submit"
                className="bg-primary font-bold px-10"
                size="large"
                type="primary"
              >
                Next
              </Button>
            </div>
          </Form>
        </div>
      ) : (
        <div>no data found</div>
      )}
    </div>
  );
};

export default DisplayAddedStrpFilds;
