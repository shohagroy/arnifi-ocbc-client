"use client";

import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import FormModalText from "../ui/will/FormModalText";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import CardFormLoader from "../skeleton-loader/CardFormLoader";
import { getFromLocalStorage } from "@/utils/local-storage";
import { PlusOutlined } from "@ant-design/icons";
import BeneficiaryCard from "./BeneficiaryCard";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import { generateFormsArrayResolver } from "@/schemas/formSchema";
import { setFormValidator } from "@/redux/features/formResolver/formResolverSlice";
import { useDispatch } from "react-redux";

const Beneficiaries = ({ country, persistKey }) => {
  const [beneficiariesCount, setBeneficiariesCount] = useState(
    !!getFromLocalStorage(persistKey)
      ? JSON.parse(getFromLocalStorage(persistKey))?.beneficiaries?.length
      : 1 || 1
  );

  const dispatch = useDispatch();

  const { idTypes, id } = country || {};
  const stepValue = ENUM_FORM_STEPS.BENEFICIARIES;

  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${id}`);

  const { data, isLoading } = useGetAllCountryDataQuery();
  const countryOptions = data?.data?.data?.map((country) => {
    return {
      label: country?.name,
      value: country?.id,
    };
  });

  const findedStep = findStepsData?.data?.data;
  const stepFields = findedStep?.stepFilds || [];
  const addressFild = stepFields?.find((item) => item.type === "address");

  const beneficiariesData = [...Array(beneficiariesCount)]?.map((_) => {
    return {
      addressFild,
      stepFields,
    };
  });

  useEffect(() => {
    const resolver = generateFormsArrayResolver(findedStep);
    dispatch(setFormValidator(resolver));
  }, [dispatch, findedStep]);

  if (willLoading) {
    return <CardFormLoader />;
  }

  const idTypeOptions = idTypes?.map((item) => {
    return {
      label: item?.tittle,
      value: item?.tittle,
    };
  });

  const modalTextData = [
    {
      info: "A Beneficiary is the person who benefits from the deceased’s assets under his Will.",
    },
    {
      info: "In the event a Beneficiary is a minor, the assets bequeathed to him under the Will will have to be held by the trustee appointed under the Will (or if none, by the Executor) until the minor Beneficiary turns 21 years of age (on, in the case of certain classes of assets, 18 years of age).",
    },
    {
      info: "For more information please refer to Information for Minor Beneficiaries.",
    },
  ];

  return (
    <div>
      <div className="py-2">
        <FormHeading heading={" Who will be the Beneficiaries of Your Will?"} />
        <FormText
          text={
            "The Beneficiaries are the people who will benefit from the asset allocation indicated in this will."
          }
        />

        <FormModalText
          tittle={"Beneficiaries of Will"}
          text={"More information about Beneficiaries"}
          data={modalTextData}
        />
      </div>

      {beneficiariesData?.map((item, i) => (
        <BeneficiaryCard
          stepValue={`${stepValue}`}
          data={item}
          index={i}
          key={i}
          idTypeOptions={idTypeOptions}
          setBeneficiariesCount={setBeneficiariesCount}
          beneficiariesCount={beneficiariesCount}
          countryOptions={countryOptions}
          loading={isLoading}
        />
      ))}

      <div className="my-10">
        <Button
          onClick={() => setBeneficiariesCount(beneficiariesCount + 1)}
          icon={<PlusOutlined />}
          className="bg-primary hover:bg-secondary px-[12px]"
          size="large"
          type="primary"
        >
          Add another beneficiary
        </Button>
      </div>
    </div>
  );
};

export default Beneficiaries;
