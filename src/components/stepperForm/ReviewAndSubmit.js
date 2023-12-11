"use client";

import { Button, Card } from "antd";
import React from "react";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import { EditOutlined } from "@ant-design/icons";
import PersonalDetailsReviewCard from "../ui/will/PersonalDetailsReviewCard";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import { useSelector } from "react-redux";

const ReviewAndSubmit = ({ stepFields }) => {
  const { personalDetails } = useSelector((state) => state.forms?.formsData);
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

        <PersonalDetailsReviewCard
          fields={personalDetailsFields}
          values={personalDetails}
        />
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default ReviewAndSubmit;
