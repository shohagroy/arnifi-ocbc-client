import { Button, Divider, Empty } from "antd";
import React, { useState } from "react";

import Form from "@/components/forms/From";
import {
  generateFormsResolver,
  generateSteperFormValidator,
} from "@/schemas/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditFilled } from "@ant-design/icons";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import PersonalDetailsForm from "../step/PersonalDetailsForm";
import MainExecutorForm from "../step/MainExecutorForm";
import BeneficiariesForm from "../step/BeneficiariesForm";
import AssetAllocationForm from "../step/AssetAllocationForm";
import AlternativeExecutorForm from "../step/AlternativeExecutorForm";
import InstructionsForm from "../step/InstructionsForm";

const DisplayAddedFields = ({
  data,
  countriesOptions,
  idTypeOptions,
  setStepFields,
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const { stepValue, countryId } = data || {};

  const { data: steps } = useGetWillStepFildsQuery(
    `/${stepValue}/${countryId}`
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  const findedStep = steps?.data?.data;

  const stepFields = findedStep?.stepFilds || [];

  const resolver = generateFormsResolver(findedStep);
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
          <Form
            persistKey={"test"}
            submitHandler={onSubmit}
            resolver={yupResolver(resolver)}
          >
            {findedStep?.value === ENUM_FORM_STEPS.PERSONAL_DETAILS ? (
              <div>
                <PersonalDetailsForm
                  stepValue={stepValue}
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : findedStep?.value === ENUM_FORM_STEPS.EXECUTORS ? (
              <div>
                <MainExecutorForm
                  stepValue={stepValue}
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : findedStep?.value === ENUM_FORM_STEPS.BENEFICIARIES ? (
              <div>
                <BeneficiariesForm
                  stepValue={stepValue}
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : findedStep?.value === ENUM_FORM_STEPS.ASSET_ALLOCATION ? (
              <div>
                <AssetAllocationForm
                  stepValue={stepValue}
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : findedStep?.value === ENUM_FORM_STEPS.ALTERNATIVE_EXECUTORS ? (
              <div>
                <AlternativeExecutorForm
                  stepValue={stepValue}
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : findedStep?.value === ENUM_FORM_STEPS.INSTRUCTIONS ? (
              <div>
                <InstructionsForm
                  stepValue={stepValue}
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : (
              <div>no data</div>
            )}

            <div className="flex my-10 justify-end">
              <Button
                className="bg-primary font-primary text-white"
                size="large"
                htmlType="submit"
              >
                Click to show error Message
              </Button>
            </div>
          </Form>
        </div>
      ) : (
        <div>
          <Empty />
        </div>
      )}
    </div>
  );
};

export default DisplayAddedFields;
