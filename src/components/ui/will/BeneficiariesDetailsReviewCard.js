import { Button, Card } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

const BeneficiariesDetailsReviewCard = ({ beneficiaries }) => {
  return (
    <div>
      <div className="flex justify-between items-center p-1 font-primary">
        <h3 className="text-xl font-semibold">
          Beneficiaries and asset allocation
        </h3>
        <Button icon={<EditOutlined />} type="link">
          Edit
        </Button>
      </div>
      <Card className="p-4">
        <table className="font-primary">
          <tr>
            <td className="w-[300px] text-left">
              <p>Executors Details</p>
            </td>
            <td className="w-[250px] text-left">
              <p>Property allocation</p>
            </td>
            <td className="w-[200px] text-left">
              <p>Sum of money allocation</p>
            </td>
            <td className="w-[200px] text-left">
              <p>Remaining Assets allocation</p>
            </td>
          </tr>
          <tbody>
            {beneficiaries?.map((data, i) => {
              const {
                fullName,
                idNumber,
                idType,
                relation,
                share,
                address,
                properties,
                giveMoney,
              } = data || {};

              return (
                <tr key={i}>
                  <td>
                    <div className="flex mt-6 items-start">
                      <p className="h-6 w-6 flex justify-center items-center bg-gray-200 rounded-full">
                        {i + 1}
                      </p>
                      <div className="ml-2 -mt-1  font-semibold font-primary">
                        <p>{fullName}</p>
                        <p>
                          {idNumber} <small>({idType})</small>
                        </p>
                        <p>{relation}</p>

                        <p>{address?.line1}</p>
                        <p>{address?.line2}</p>
                        <p>
                          {address?.country}- {address?.postalCode}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    {properties?.length
                      ? properties?.map((asset, i) => {
                          const { line1, line2, country, postalCode } =
                            asset?.address || {};
                          return (
                            <div key={i} className="my-2 capitalize">
                              <p>{line1}</p>
                              <p>{line2}</p>
                              <p>
                                {country} {postalCode && `-${postalCode}`}
                              </p>
                            </div>
                          );
                        })
                      : "N/A"}
                  </td>
                  <td>
                    {giveMoney?.value ? <p>{giveMoney?.value}</p> : "N/A"}
                  </td>
                  <td>{share} %</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default BeneficiariesDetailsReviewCard;
