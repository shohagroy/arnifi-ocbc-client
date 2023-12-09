"use client";

import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import DisplayAddedFields from "@/components/admin/formSections/DisplayAddedFields";
import FormFieldAdd from "@/components/admin/formSections/FormFieldAdd";
import FormSelectField from "@/components/forms/FormSelectField";
import Form from "@/components/forms/From";
import CreateUpdateInfoModal from "@/components/modal/CreateUpdateInfoModal";
import { generatorStepfieldsValueOptions } from "@/constans/stepFields";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import { useGetAllFormStepsQuery } from "@/redux/features/formStep/formStepApi";
import {
  useCreateStepFildMutation,
  useUpdateStepFildMutation,
} from "@/redux/features/stepField/stepFieldApi";
import { formInputFildSchema } from "@/schemas/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Col, Row, message } from "antd";
import React, { useState } from "react";

const CreateNewWillsPage = () => {
  const [stepFields, setStepFields] = useState({});

  const [messageApi, contextHolder] = message.useMessage();
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState({});

  const [createStepFields, { isLoading: createLoading }] =
    useCreateStepFildMutation();

  const [updateStepFields, { isLoading: updateLoading }] =
    useUpdateStepFildMutation();

  const { data: countriesData, isLoading: countryLoading } =
    useGetAllCountryDataQuery();

  const countriesOptions = countriesData?.data?.data.map((item) => {
    return {
      label: item?.name,
      value: item?.id,
      idOptions: item?.idTypes,
      formSteps: item?.formSteps,
    };
  });

  const { data: stepsData, isLoading } = useGetAllFormStepsQuery({
    size: 100,
  });

  const formStepsOptions = stepsData?.data?.data?.map((step) => {
    return {
      label: step?.tittle,
      value: step?.value,
    };
  });

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

  const inputFieldAddHandelar = (data) => {
    let info = {};
    if (data?.id) {
      info = {
        tittle: "Are you sure update this step field?",
        details: (
          <>
            <p className="font-primary">
              Label: <strong>{data?.label}</strong>
            </p>
            <p className="font-primary">
              Placeholder: <strong>{data?.placeholder}</strong>
            </p>
            <p className="font-primary">
              Error: <strong>{data?.errorText}</strong>
            </p>
          </>
        ),
      };
    } else {
      info = {
        tittle: "Are you sure create this step field?",
        details: (
          <>
            <p className="font-primary">
              Label: <strong>{data?.label}</strong>
            </p>
            <p className="font-primary">
              Placeholder: <strong>{data?.placeholder}</strong>
            </p>
            <p className="font-primary">
              Error: <strong>{data?.errorText}</strong>
            </p>
          </>
        ),
      };
    }

    setStepFields(data);
    setModalText(info);
    setOpenModal(true);
  };

  const modalOkHandelar = async () => {
    try {
      if (stepFields?.id) {
        const result = await updateStepFields(stepFields).unwrap();
        messageApi.open({
          type: "success",
          content:
            result?.data?.message || "Step From Fild Update Successfully!",
        });
        setModalText({});
        setOpenModal(false);
        setStepFields({
          countryId: stepFields?.countryId,
          stepValue: stepFields?.stepValue,
        });
      } else {
        const result = await createStepFields(stepFields).unwrap();
        messageApi.open({
          type: "success",
          content:
            result?.data?.message || "Step From Fild Created Successfully!",
        });
        setModalText({});
        setOpenModal(false);
        setStepFields({
          countryId: stepFields?.countryId,
          stepValue: stepFields?.stepValue,
        });
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error?.data || "Something went wrong!",
      });
    }
  };

  const stepFieldsValueOptions = generatorStepfieldsValueOptions(
    stepFields?.stepValue
  );

  return (
    <main className="font-primary">
      {contextHolder}
      <section>
        <AdminBreadCrumb items={breadCrumbItems} />

        <div className="max-w-7xl mx-auto my-4 px-2">
          <Card
            className="mt-10 min-h-[80vh]"
            title={
              <p className="font-primary text-xl">Create Country wise Wills</p>
            }
          >
            <div>
              <Form
                submitHandler={inputFieldAddHandelar}
                resolver={yupResolver(formInputFildSchema)}
                defaultValues={stepFields}
              >
                <Row gutter={8}>
                  <Col span={8} className=" items-center">
                    <FormSelectField
                      showSearch
                      loading={countryLoading}
                      required
                      handleChange={(e) =>
                        setStepFields({ ...stepFields, countryId: e })
                      }
                      name={"countryId"}
                      placeholder="select country for wills"
                      label={"For Country"}
                      options={countriesOptions}
                    />
                  </Col>

                  <Col span={8} className="">
                    <FormSelectField
                      loading={isLoading}
                      required
                      handleChange={(e) =>
                        setStepFields({ ...stepFields, stepValue: e })
                      }
                      name={"stepValue"}
                      placeholder="select step"
                      label={"For form steps"}
                      options={formStepsOptions || []}
                    />
                  </Col>

                  <Col span={8} className="">
                    <FormSelectField
                      handleChange={(e) =>
                        setStepFields({ ...stepFields, name: e })
                      }
                      required
                      name={"name"}
                      placeholder="select type"
                      label={"For Value"}
                      options={stepFieldsValueOptions || []}
                    />
                  </Col>
                </Row>

                <FormFieldAdd setValue={setStepFields} value={stepFields} />
              </Form>

              <div className="my-6">
                <DisplayAddedFields
                  data={stepFields}
                  setStepFields={setStepFields}
                  idTypeOptions={[]}
                  countriesOptions={countriesOptions}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <CreateUpdateInfoModal
        loading={createLoading || updateLoading}
        setOpen={setOpenModal}
        open={openModal}
        submitFn={modalOkHandelar}
        modalText={modalText}
      />
    </main>
  );
};

export default CreateNewWillsPage;
