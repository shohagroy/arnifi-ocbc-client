import React from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import MainExecutorForm from "./MainExecutorForm";
import AlternativeExecutorForm from "./AlternativeExecutorForm";
import BeneficiariesForm from "./BeneficiariesForm";

const DisplayStepFormField = ({ tittle, data }) => {
  console.log(data);
  return (
    <div>
      <div>
        {tittle === "Personal Details" && (
          <PersonalDetailsForm
            countriesOptions={[]}
            formInputFields={data}
            idTypeOptions={[]}
            setStepFild={() => {}}
          />
        )}

        {tittle === "Main Executors" && (
          <MainExecutorForm
            countriesOptions={[]}
            formInputFields={data}
            idTypeOptions={[]}
            setStepFild={() => {}}
          />
        )}

        {tittle === "Alternative Executor" && (
          <AlternativeExecutorForm
            countriesOptions={[]}
            formInputFields={data}
            idTypeOptions={[]}
            setStepFild={() => {}}
          />
        )}

        {tittle === "Beneficiaries" && (
          <BeneficiariesForm
            countriesOptions={[]}
            formInputFields={data}
            idTypeOptions={[]}
            setStepFild={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default DisplayStepFormField;
