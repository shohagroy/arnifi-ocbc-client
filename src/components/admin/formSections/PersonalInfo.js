import UpdateDeleteBtn from "@/components/admin/formSections/UpdateDeleteBtn";
import FormAddressField from "@/components/forms/FormAddressField";
import FormGenderRadio from "@/components/forms/FormGenderRadio";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import { Card } from "antd";
import React from "react";

const PersonalInfo = ({
  data,
  countriesOptions,
  idTypeOptions,
  isEditable,
  setStepFields,
  deleteModalOkHandelar,
  loading,
  stepValue,
}) => {
  const addressType = data?.find((item) => item.type === "address");
  const fullNameFields = data?.find((item) => item.name === "fullName");
  const gender = data?.find((item) => item.name === "gender");
  const relation = data?.find((item) => item.name === "relation");

  const generateFullNameLabel = (name) => {
    if (stepValue === ENUM_FORM_STEPS.BENEFICIARIES) {
      return `Full name of first ${name}.`;
    } else {
      return name;
    }
  };

  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {fullNameFields && (
              <div>
                {isEditable && (
                  <UpdateDeleteBtn
                    data={fullNameFields}
                    deleteModalOkHandelar={deleteModalOkHandelar}
                    setStepFields={setStepFields}
                    loading={loading}
                  />
                )}
                <FormInput
                  label={generateFullNameLabel(fullNameFields?.label)}
                  name={`${stepValue}.${fullNameFields?.name}`}
                  placeholder={fullNameFields?.placeholder}
                  required={fullNameFields?.isRequired}
                  type={fullNameFields?.type}
                />
              </div>
            )}
          </div>

          <div>
            {gender && (
              <div>
                {isEditable && (
                  <UpdateDeleteBtn
                    data={gender}
                    deleteModalOkHandelar={deleteModalOkHandelar}
                    setStepFields={setStepFields}
                    loading={loading}
                  />
                )}
                <FormGenderRadio
                  label={gender?.label}
                  name={`${stepValue}.${gender?.name}`}
                  required={gender?.isRequired}
                />
              </div>
            )}

            {relation && (
              <div>
                {isEditable && (
                  <UpdateDeleteBtn
                    data={relation}
                    deleteModalOkHandelar={deleteModalOkHandelar}
                    setStepFields={setStepFields}
                    loading={loading}
                  />
                )}
                <FormInput
                  label={relation?.label}
                  name={`${stepValue}.${relation?.name}`}
                  placeholder={relation?.placeholder}
                  type={relation?.type}
                  required={relation?.isRequired}
                />
              </div>
            )}
          </div>
        </div>

        {data?.map((item) => {
          const { id, type, placeholder, name, label, isRequired } = item || {};
          return type === "text" && name !== "fullName" ? (
            <div key={id}>
              {isEditable && (
                <UpdateDeleteBtn
                  data={item}
                  deleteModalOkHandelar={deleteModalOkHandelar}
                  setStepFields={setStepFields}
                  loading={loading}
                />
              )}
              <FormInput
                label={label}
                name={`${stepValue}.${name}`}
                placeholder={placeholder}
                type={type}
                required={isRequired}
              />
            </div>
          ) : type === "number" ? (
            <div key={id}>
              {isEditable && (
                <UpdateDeleteBtn
                  data={item}
                  deleteModalOkHandelar={deleteModalOkHandelar}
                  setStepFields={setStepFields}
                  loading={loading}
                />
              )}
              <FormInput
                label={label}
                name={`${stepValue}.${name}`}
                placeholder={placeholder}
                type={type}
                required={isRequired}
              />
            </div>
          ) : (
            type === "select" &&
            name !== "relation" && (
              <div key={id}>
                {isEditable && (
                  <UpdateDeleteBtn
                    data={item}
                    setStepFields={setStepFields}
                    deleteModalOkHandelar={deleteModalOkHandelar}
                    loading={loading}
                  />
                )}
                <FormSelectField
                  label={label}
                  name={`${stepValue}.${name}`}
                  showSearch={true}
                  required={isRequired}
                  options={
                    name === "citizenship" ? countriesOptions : idTypeOptions
                  }
                />
              </div>
            )
          );
        })}

        <div className="col-span-full">
          {addressType && (
            <div>
              <FormAddressField
                stepValue={stepValue}
                data={addressType}
                setStepFields={setStepFields}
                isEditable={isEditable}
                deleteModalOkHandelar={deleteModalOkHandelar}
                loading={loading}
                countriesOptions={countriesOptions}
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PersonalInfo;
