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
import { ENUM_FORM_STEPS } from "@/constans/steps";
import AssetAllocationForm from "./AssetAllocationForm";

const DisplayAddedStrpFilds = ({
  data,
  countriesOptions,
  idTypeOptions,
  setStepFields,
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const { countryId, stepValue } = data || {};

  const { data: formStepsData, isLoading } =
    useGetCountryFormStepsQuery(countryId);

  const onSubmit = (data) => {
    console.log(data);
  };

  const selectedStep = formStepsData?.data?.data?.find(
    (item) => item.value === stepValue
  );

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

      {stepFields?.length ||
      selectedStep?.value === ENUM_FORM_STEPS.ASSET_ALLOCATION ? (
        <div className="max-w-5xl mx-auto">
          <Form submitHandler={onSubmit} resolver={yupResolver(validator)}>
            {selectedStep?.value === ENUM_FORM_STEPS.PERSONAL_DETAILS && (
              <PersonalDetailsForm
                isEditable={isEditable}
                countriesOptions={countriesOptions}
                formInputFields={stepFields}
                idTypeOptions={idTypeOptions}
                setStepFields={setStepFields}
              />
            )}

            {selectedStep?.value === ENUM_FORM_STEPS.EXECUTORS && (
              <MainExecutorForm
                isEditable={isEditable}
                countriesOptions={countriesOptions}
                formInputFields={stepFields}
                idTypeOptions={idTypeOptions}
                setStepFields={setStepFields}
              />
            )}

            {/* {selectedStep?.value === ENUM_FORM_STEPS. && (
              <AlternativeExecutorForm
                isEditable={isEditable}
                countriesOptions={countriesOptions}
                formInputFields={stepFields}
                idTypeOptions={idTypeOptions}
                setStepFild={setStepFild}
              />
            )} */}

            {selectedStep?.value === ENUM_FORM_STEPS.BENEFICIARIES && (
              <BeneficiariesForm
                isEditable={isEditable}
                countriesOptions={countriesOptions}
                formInputFields={stepFields}
                idTypeOptions={idTypeOptions}
                setStepFields={setStepFields}
              />
            )}

            {selectedStep?.value === ENUM_FORM_STEPS.ASSET_ALLOCATION && (
              <AssetAllocationForm
                isEditable={isEditable}
                countriesOptions={countriesOptions}
                formInputFields={stepFields}
                idTypeOptions={idTypeOptions}
                setStepFields={setStepFields}
              />
            )}

            <div className="flex my-4 justify-end">
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
