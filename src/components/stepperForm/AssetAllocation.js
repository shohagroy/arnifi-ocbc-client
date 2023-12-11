"use client";

import { Button } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { ENUM_FORM_STEPS } from "@/constans/steps";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import FormModalText from "../ui/will/FormModalText";
import { useGetWillStepFildsQuery } from "@/redux/features/formStep/formStepApi";
import CardFormLoader from "../skeleton-loader/CardFormLoader";
import AssetLocations from "./AssetLocations";
import { getFromLocalStorage } from "@/utils/local-storage";
import AssetSum from "./AssetSum";
import { useFieldArray, useForm } from "react-hook-form";

const AssetAllocation = ({ country }) => {
  const [locationCount, setLocationCount] = useState(
    !!getFromLocalStorage("form-data")
      ? Number(
          JSON.parse(getFromLocalStorage("form-data"))?.assetAllocation
            ?.locations?.length
        ) || 1
      : 1
  );

  const [sumCount, setSumCount] = useState(
    !!getFromLocalStorage("form-data")
      ? Number(
          JSON.parse(getFromLocalStorage("form-data"))?.assetAllocation
            ?.sumMoney?.length
        ) || 1
      : 1
  );

  const [beneficiariesData, setBeneficiariesData] = useState(
    !!getFromLocalStorage("form-data")
      ? JSON.parse(getFromLocalStorage("form-data"))?.beneficiaries
      : []
  );

  const beneficiaryOptions = beneficiariesData?.map((item, i) => {
    return {
      label: `${item.fullName} (${item?.relation})`,
      value: i,
    };
  });

  const stepValue = ENUM_FORM_STEPS.ASSET_ALLOCATION;
  const beneficiaryValue = ENUM_FORM_STEPS.BENEFICIARIES;

  const { data: findStepsData, isLoading: willLoading } =
    useGetWillStepFildsQuery(`/${stepValue}/${country?.id}`);

  const stepFields = findStepsData?.data?.data?.stepFilds || [];
  const addressFields = stepFields?.find((item) => item.type === "address");
  const beneficiaryFields = stepFields?.find(
    (item) => item.name === "beneficiary"
  );

  const sumMoneyFields = stepFields?.find((item) => item.name === "sumMoney");
  const assetLocations = [...Array(locationCount)]?.map((_) => {
    return {
      addressFields,
      beneficiaryFields,
    };
  });

  const assetSums = [...Array(sumCount)]?.map((_) => {
    return {
      sumMoneyFields,
      beneficiaryFields,
    };
  });

  const { data } = useGetAllCountryDataQuery();

  if (willLoading) {
    return <CardFormLoader />;
  }

  const countryOptions = data?.data?.data?.map((country) => {
    return {
      label: country?.name,
      value: country?.name,
    };
  });

  const modalTextData = [
    {
      info: "Gift of Immovable Property refers to the transference of rights, title, interest and benefits that the Testator has in a specified property, to a specified beneficiary. Residuary distribution of assets will be performed after the gifting of these property(ies) is completed. ",
      others: [],
    },
  ];

  const modalTextData2 = [
    {
      info: "Gift of Immovable Property refers to the transference of rights, title, interest and benefits that the Testator has in a specified property, to a specified beneficiary. Residuary distribution of assets will be performed after the gifting of these property(ies) is completed. ",
      others: [],
    },
  ];

  return (
    <div>
      <div>
        <div className="py-4">
          <FormHeading
            optional
            heading={"Do you have any property to give to your beneficiaries?"}
          />
          <FormText
            text={
              "You can choose to allocate your owned properties (if any) to your beneficiaries. "
            }
          />
          <FormText
            text={
              "This is only applicable for property under single ownership and may not apply for other types of property ownership arrangements."
            }
          />

          <FormModalText
            data={modalTextData}
            tittle={"More information about Gift of Immovable Property"}
            text={"More information about Gift of Immovable Propert"}
          />
        </div>

        {assetLocations?.map((item, i) => (
          <AssetLocations
            stepValue={beneficiaryValue}
            beneficiaryOptions={beneficiaryOptions}
            data={item}
            setLocationCount={setLocationCount}
            locationCount={locationCount}
            index={i}
            key={i}
            countryOptions={countryOptions}
          />
        ))}

        <div className="my-10">
          <Button
            onClick={() => setLocationCount(locationCount + 1)}
            icon={<PlusOutlined />}
            className="bg-primary hover:bg-secondary px-[12px]"
            size="large"
            type="primary"
          >
            Add another immovable Property
          </Button>
        </div>
      </div>

      <div>
        <div className="p-2">
          <FormHeading
            optional
            heading={
              "Do you wish to give a sum of money to your beneficiaries?"
            }
          />

          <FormText
            text={
              "A “sum of money” here refers to a fixed amount of wish to allocate to your beneficiaries."
            }
          />

          <FormModalText
            text={"More information about Gift of Monies"}
            data={modalTextData2}
            tittle={"More information about Gift of Monies"}
          />
        </div>
        {assetSums?.map((item, i) => (
          <AssetSum
            beneficiaryOptions={beneficiaryOptions}
            key={i}
            value={`${stepValue}.sumMoney.${i}`}
            data={item}
            setSumCount={setSumCount}
            sumCount={sumCount}
            index={i}
          />
        ))}

        <div className="my-10">
          <Button
            onClick={() => setSumCount(sumCount + 1)}
            icon={<PlusOutlined />}
            className="bg-primary hover:bg-secondary px-[12px]"
            size="large"
            type="primary"
          >
            Add another Sum of Money allocation
          </Button>
        </div>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default AssetAllocation;
