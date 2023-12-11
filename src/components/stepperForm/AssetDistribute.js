"use client";

import { Card } from "antd";
import React, { useEffect, useState } from "react";
import FormHeading from "../ui/will/FormHeading";
import FormText from "../ui/will/FormText";
import FormModalText from "../ui/will/FormModalText";
import FormInput from "../forms/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { generateBeneficiaryShareResolver } from "@/schemas/formSchema";
import {
  setFormValidator,
  setShareError,
} from "@/redux/features/formResolver/formResolverSlice";

const AssetDistribute = () => {
  const [error, setError] = useState(false);
  const { beneficiaries } = useSelector((state) => state.forms.formsData);
  const dispatch = useDispatch();

  const totalShare =
    beneficiaries.reduce((total, beneficiary) => {
      const shareValue = parseFloat(beneficiary.share);

      if (!isNaN(shareValue)) {
        return total + shareValue;
      }

      return total;
    }, 0) || 0;

  useEffect(() => {
    if (totalShare !== 100) {
      dispatch(setShareError(true));
      setError(true);
    } else {
      dispatch(setShareError(false));
      setError(false);
    }
  }, [totalShare, dispatch]);

  useEffect(() => {
    const resolver = generateBeneficiaryShareResolver();
    dispatch(setFormValidator(resolver));
  }, [dispatch]);

  const modalTextData = [
    {
      info: "Your assets consist of everything you possess and are beneficially entitled to. These may include monies, properties, bank and insurance policies, investments, cars, and so on.",
      others: [],
    },
    {
      info: "Should you have included specific Gift of Immovable Property(ies) or sum of money(ies), remaining assets for distribution would consist of everything other than those aforementioned gifting.",
      others: [],
    },
  ];

  return (
    <div>
      <div>
        <div className="py-4">
          <FormHeading heading={"How will you distribute your assets?"} />

          <FormText
            text={
              "Your remaining assets consist of everything other than the property and fixed sum you have already allocated in the previous steps. These may include moneys, bank and insurance policies, investments, cars, and so on. The percentage split across all beneficiaries must add up to 100%."
            }
          />

          <FormModalText
            data={modalTextData}
            tittle={"Assets allocation"}
            text={"More information about Gift of Immovable Propert"}
          />

          <FormText
            text={
              "In the event any of the beneficiaries referred to here predecease you, their share shall be given to the surviving beneficiary, and if more than one, in equal shares."
            }
          />
        </div>

        <Card className="my-4 font-primary">
          <table>
            <thead>
              <tr>
                <th className="w-[50px]"></th>
                <th className="w-[250px] text-left">Beneficiary Name</th>
                <th className="w-[200px] text-left">ID/Passport No.</th>
                <th className="w-[150px] text-left">Relationship</th>
                <th className="w-[200px] text-left">Share</th>
              </tr>
            </thead>

            <tbody>
              {beneficiaries?.map((item, i) => {
                const { fullName, idNumber, relation } = item || {};
                return (
                  <tr key={i}>
                    <td className="h-[30px] w-[30px] flex justify-center items-center rounded-full bg-gray-200">
                      {i + 1}
                    </td>
                    <td>{fullName}</td>
                    <td>{idNumber}</td>
                    <td>{relation}</td>
                    <td className="flex justify-center items-center">
                      <div>
                        <FormInput
                          type={"number"}
                          name={`beneficiaries.${i}.share`}
                          required
                        />
                      </div>

                      <p className="text-2xl font-bold ml-3">%</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr className="text-xl font-bold m-3">
                <td colSpan={4} className="text-right">
                  Total:
                </td>
                <td className="text-center"> {totalShare} %</td>
              </tr>
              {error && (
                <tr>
                  <td colSpan={5} className="text-right">
                    <small className="text-red-600 font-primary">
                      Please allocate 100% of your assets before continuing.
                    </small>
                  </td>
                </tr>
              )}
            </tfoot>
          </table>
        </Card>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default AssetDistribute;
