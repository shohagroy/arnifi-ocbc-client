"use client";

import React from "react";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import PersonalDetailsReviewCard from "../ui/will/PersonalDetailsReviewCard";
import ExecutorsDetailsReviewCard from "../ui/will/ExecutorsDetailsReviewCard";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import { useSelector } from "react-redux";
import BeneficiariesDetailsReviewCard from "../ui/will/BeneficiariesDetailsReviewCard";

const ReviewAndSubmit = ({ stepFields }) => {
  const {
    personalDetails,
    executors,
    alternativeExecutors,
    beneficiaries,
    assetAllocation,
  } = useSelector((state) => state.forms?.formsData);
  const personalDetailsFields = stepFields?.filter(
    (field) => field?.stepValue === ENUM_FORM_STEPS.PERSONAL_DETAILS
  );

  return (
    <div>
      <div>
        <div className="py-4">
          <FormHeading heading={"Please review your will below."} />
          <FormText
            text={
              "You are almost done! After you save the Will and close this session, you can no longer retrieve or edit the document. Do make sure that all the information is correct, as you will need to start over again if you need to make changes to your Will."
            }
          />
        </div>

        <hr className="border-[#EEEEEE] col-span-2 my-4" />

        <div className="my-4">
          <PersonalDetailsReviewCard
            fields={personalDetailsFields}
            values={personalDetails}
          />
        </div>

        <div className="my-4">
          <ExecutorsDetailsReviewCard
            executors={executors}
            alternativeExecutors={alternativeExecutors}
          />
        </div>

        <div className="my-4">
          <BeneficiariesDetailsReviewCard
            beneficiaries={beneficiaries}
            executors={executors}
            alternativeExecutors={alternativeExecutors}
          />
        </div>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default ReviewAndSubmit;
