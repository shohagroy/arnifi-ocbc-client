import React from "react";
import FormInput from "./FormInput";
import FormSelectField from "./FormSelectField";
import UpdateDeleteBtn from "../admin/formSections/UpdateDeleteBtn";

const FormAddressField = ({
  countriesOptions,
  isEditable,
  data,
  deleteModalOkHandelar,
  loading,
  setStepFild,
}) => {
  return (
    <div className="my-10">
      <hr className="border-[#EEEE] col-span-2 my-4 " />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="">
          {isEditable && (
            <UpdateDeleteBtn
              data={data}
              setStepFild={setStepFild}
              deleteModalOkHandelar={deleteModalOkHandelar}
              loading={loading}
            />
          )}
          <div className="my-4 col-span-2">
            <FormInput
              label={"Address"}
              required
              type={"text"}
              placeholder={"address line 1"}
              name={"address.line1"}
            />
          </div>
          <div></div>
          <div className="">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <FormInput
                  type={"text"}
                  placeholder={"address line 2"}
                  name={"address.line2"}
                />
              </div>
              <div>
                <FormSelectField
                  required={true}
                  name={"address.country"}
                  options={countriesOptions}
                  showSearch={true}
                />
              </div>
              <div>
                <FormInput
                  required
                  type={"number"}
                  placeholder={"postal code"}
                  name={"address.postalCode"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddressField;
