"use client";

import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import FormFildAdd from "@/components/admin/formSections/FormFildAdd";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import Form from "@/components/forms/From";
import CreateUpdateInfoModal from "@/components/modal/CreateUpdateInfoModal";
import DisplayAddedStrpFilds from "@/components/ui/will/DisplayAddedStrpFilds";
import { allStepsFields, formStepsOptions } from "@/constans/steps";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import {
  useCreateStepFildMutation,
  useUpdateStepFildMutation,
} from "@/redux/features/stepFild/stepFildApi";
import {
  formInputFildSchema,
  generateFormValidatorUpdated,
} from "@/schemas/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Col, Divider, Row, message } from "antd";
import React, { useState } from "react";

const AddNewWillPage = () => {
  const breadCrumbItems = [
    {
      label: <p href={"/admin"}>Admin</p>,
      link: "/admin",
    },
    {
      label: "Manage Wills",
      link: "/admin/manage-wills",
    },
    {
      label: "Create Wills",
      link: "/admin/manage-wills/create",
    },
  ];

  const handelSubmit = (data) => {
    console.log("submit", data);
  };

  const willsData = {
    personal: {
      tittle: "For Personal Details",
      value: {
        fullName: {
          tittle: "lable for Full Name field.",
          placeholder: "Placeholder text",
          error: "Error text for error display",
        },
        gender: {
          tittle: "Tittle for Gender field.",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
        idType: {
          tittle: "Tittle for Id Type Field",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
        idNumber: {
          tittle: "Tittle for Id Number Field",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
      },
    },

    mainExecutors: {
      tittle: "For Main Executors Details",
      value: {
        fullName: {
          tittle: "lable for Executors Name field.",
          placeholder: "Executors name Placeholder ",
          error: "Error text for error display",
        },
        idType: {
          tittle: "Tittle for Id Type Field",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
        idNumber: {
          tittle: "Tittle for Id Number Field",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
        citizenship: {
          tittle: "Tittle for citizenship Field",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
      },
    },
    alternativeExecutors: {
      tittle: "For Alternative Executor Details",
      value: {
        fullName: {
          tittle: "lable for Executors Name field.",
          placeholder: "Executors name Placeholder ",
          error: "Error text for error display",
        },
        idType: {
          tittle: "Tittle for Id Type Field",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
        idNumber: {
          tittle: "Tittle for Id Number Field",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
        citizenship: {
          tittle: "Tittle for citizenship Field",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
      },
    },
    beneficiaries: {
      tittle: "For Beneficiaries Details",
      value: {
        fullName: {
          tittle: "lable for Beneficiaries Name field.",
          placeholder: "Beneficiaries name Placeholder ",
          error: "Error text for error display",
        },
        relationship: {
          tittle: "lable for Beneficiaries Name field.",
          placeholder: "Beneficiaries name Placeholder ",
          error: "Error text for error display",
        },
        idType: {
          tittle: "Tittle for Id Type Field",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
        idNumber: {
          tittle: "Tittle for Id Number Field",
          placeholder: "placeholder text",
          error: "Error text for error display",
        },
      },
    },
  };

  const resolver = generateFormValidatorUpdated(willsData);

  return (
    <main className="font-primary">
      {/* {contextHolder} */}
      <section>
        <AdminBreadCrumb items={breadCrumbItems} />

        <div className="max-w-7xl mx-auto my-4 px-2">
          <Card
            className="mt-10 min-h-[80vh]"
            title={
              <p className="font-primary text-xl">Create Country wise Wills</p>
            }
          >
            <Form submitHandler={handelSubmit} resolver={yupResolver(resolver)}>
              {Object.keys(willsData)?.map((firstKey) => {
                return (
                  <Card key={firstKey}>
                    <Divider orientation="left">
                      <p className="font-primary text-lg">
                        {willsData[firstKey]?.tittle}
                      </p>
                    </Divider>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {Object.keys(willsData[firstKey]?.value)?.map(
                        (secendKey) => {
                          const fieldData =
                            willsData[firstKey]?.value[secendKey];

                          //   console.log(firstKey);

                          return Object.keys(fieldData)?.map((lastKey) => {
                            const fieldValue =
                              willsData[firstKey]?.value[secendKey][lastKey];

                            return (
                              <div key={fieldValue}>
                                <FormInput
                                  //   label={fieldData[lastKey]}
                                  placeholder={fieldData[lastKey]}
                                  required
                                  type="text"
                                  name={`${firstKey}.${secendKey}.${lastKey}`}
                                />
                              </div>
                            );
                          });
                        }
                      )}
                    </div>
                  </Card>
                );
              })}

              <div>
                <Button htmlType="submit"> Submit</Button>
              </div>
            </Form>
          </Card>
        </div>
      </section>

      {/* <CreateUpdateInfoModal
        loading={createLoading || updateLoading}
        setOpen={setOpenModal}
        open={openModal}
        submitFn={modalOkHandelar}
        modalText={modalText}
      /> */}
    </main>
  );
};

export default AddNewWillPage;
