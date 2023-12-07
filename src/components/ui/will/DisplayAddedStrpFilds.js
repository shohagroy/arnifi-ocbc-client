import { useGetStepFildsQuery } from "@/redux/features/stepFild/stepFildApi";
import { Button, Divider, Empty } from "antd";
import React, { useState } from "react";

import Form from "@/components/forms/From";
import FormHeading from "@/components/ui/will/FormHeading";
import { generateSteperFormValidator } from "@/schemas/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonalDetailsForm from "./PersonalDetailsForm";
import { EditFilled } from "@ant-design/icons";
import {
  useGetCountryFormStepsQuery,
  useGetWillStepFildsQuery,
} from "@/redux/features/formStep/formStepApi";
import MainExecutorForm from "./MainExecutorForm";
import AlternativeExecutorForm from "./AlternativeExecutorForm";
import BeneficiariesForm from "./BeneficiariesForm";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import AssetAllocationForm from "./AssetAllocationForm";
import OtherBeneficiariesForm from "./OtherBeneficiariesForm";

const DisplayAddedStrpFilds = ({
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

  const findStep = steps?.data?.data;

  const stepFields = findStep?.stepFilds || [];
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
            {findStep?.value === ENUM_FORM_STEPS.PERSONAL_DETAILS ? (
              <div>
                <PersonalDetailsForm
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : findStep?.value === ENUM_FORM_STEPS.EXECUTORS ? (
              <div>
                <MainExecutorForm
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : findStep?.value === ENUM_FORM_STEPS.BENEFICIARIES ? (
              <div>
                <BeneficiariesForm
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : findStep?.value === ENUM_FORM_STEPS.ASSET_ALLOCATION ? (
              <div>
                <AssetAllocationForm
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : findStep?.value === ENUM_FORM_STEPS.SECEND_BENEFICIARIES ||
              ENUM_FORM_STEPS.THIRD_BENEFICIARIES ||
              ENUM_FORM_STEPS.FOURTH_BENEFICIARIES ||
              ENUM_FORM_STEPS.FIFTH_BENEFICIARIES ||
              ENUM_FORM_STEPS.SIXTH_BENEFICIARIES ||
              ENUM_FORM_STEPS.SEVENTH_BENEFICIARIES ||
              ENUM_FORM_STEPS.EIGHTH_BENEFICIARIES ||
              ENUM_FORM_STEPS.NINETH_BENEFICIARIES ||
              ENUM_FORM_STEPS.THIRD_BENEFICIARIES ? (
              <div>
                <OtherBeneficiariesForm
                  isEditable={isEditable}
                  countriesOptions={countriesOptions}
                  formInputFields={stepFields}
                  idTypeOptions={idTypeOptions}
                  setStepFields={setStepFields}
                />
              </div>
            ) : findStep?.value === ENUM_FORM_STEPS.ALTERNATIVE_EXECUTORS ? (
              <div>
                <AlternativeExecutorForm
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

            <Button htmlType="submit">Submit to error Message</Button>
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

export default DisplayAddedStrpFilds;
