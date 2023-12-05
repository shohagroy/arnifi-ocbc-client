"use client";

import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import FormFildAdd from "@/components/admin/formSections/FormFildAdd";
import FormSelectField from "@/components/forms/FormSelectField";
import Form from "@/components/forms/From";
import CreateUpdateInfoModal from "@/components/modal/CreateUpdateInfoModal copy";
import DisplayAddedStrpFilds from "@/components/ui/will/DisplayAddedStrpFilds";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import {
  useCreateStepFildMutation,
  useUpdateStepFildMutation,
} from "@/redux/features/stepFild/stepFildApi";
import { formInputFildSchema } from "@/schemas/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Col, Row, message } from "antd";
import React, { useState } from "react";

const CreateNewWillsPage = () => {
  const [stepFild, setStepFild] = useState({
    countryId: null,
    stepId: null,
    type: null,
    errorText: "",
    isRequired: false,
    label: "",
    name: null,
    placeholder: "",
  });

  const [messageApi, contextHolder] = message.useMessage();
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState({});

  const [createStepFild, { isLoading: createLoading }] =
    useCreateStepFildMutation();

  const [updateStepFild, { isLoading: updateLoading }] =
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

  const selectedCountry = countriesOptions?.find(
    (item) => item?.value === stepFild?.countryId
  );

  const formStepOptions = selectedCountry?.formSteps?.map((item) => {
    return {
      label: item?.tittle,
      value: item?.id,
      data: item,
    };
  });

  const idTypeOptions = selectedCountry?.idTypes?.map((item) => {
    return {
      label: item?.tittle,
      value: item?.id,
      data: item,
    };
  });

  const formInputValueName = [
    {
      label: "Full Name",
      value: "fullName",
    },
    {
      label: "Gender",
      value: "gender",
    },
    {
      label: "Relation",
      value: "relation",
    },
    {
      label: "Type Of ID",
      value: "idType",
    },
    {
      label: "ID Number",
      value: "idNumber",
    },
    {
      label: "Citizenship",
      value: "citizenship",
    },
    {
      label: "Address",
      value: "address",
    },
  ];

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

  const inputFildAddHandelar = (data) => {
    if (data?.id) {
      const info = {
        tittle: "Are you sure update this step fild?",
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

      setStepFild(data);
      setModalText(info);
      setOpenModal(true);
    } else {
      const info = {
        tittle: "Are you sure create this step fild?",
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

      setStepFild(data);
      setModalText(info);
      setOpenModal(true);
    }
  };

  const modalOkHandelar = async () => {
    console.log(stepFild);
    try {
      if (stepFild?.id) {
        const result = await updateStepFild(stepFild).unwrap();
        messageApi.open({
          type: "success",
          content:
            result?.data?.message || "Step From Fild Update Successfully!",
        });
        setModalText({});
        setOpenModal(false);
        setStepFild({
          // ...stepFild,
          // label: "",
          countryId: stepFild?.countryId,
          stepId: stepFild?.stepId,
          name: null,
          type: null,
          // placeholder: "",
          // errorText: "",
          isRequired: false,
          id: null,
        });
      } else {
        const result = await createStepFild(stepFild).unwrap();
        messageApi.open({
          type: "success",
          content:
            result?.data?.message || "Step From Fild Created Successfully!",
        });
        setModalText({});
        setOpenModal(false);
        setStepFild({
          ...stepFild,
          label: "",
          name: null,
          type: null,
          placeholder: "",
          errorText: "",
          isRequired: false,
          id: null,
        });
      }
    } catch (error) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: error?.data || "Something went wrong!",
      });
    }
  };

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
                submitHandler={inputFildAddHandelar}
                resolver={yupResolver(formInputFildSchema)}
                // stepFilds={stepFild}
                defaultValues={stepFild}
                persistKey="create-filds"
              >
                <Row gutter={8}>
                  <Col span={8} className=" items-center">
                    <FormSelectField
                      showSearch
                      loading={countryLoading}
                      required
                      handleChange={(e) =>
                        setStepFild({ ...stepFild, countryId: e })
                      }
                      name={"countryId"}
                      placeholder="select country for wills"
                      label={"For Country"}
                      options={countriesOptions}
                    />
                  </Col>

                  <Col span={8} className="">
                    <FormSelectField
                      required
                      handleChange={(e) =>
                        setStepFild({ ...stepFild, stepId: e })
                      }
                      name={"stepId"}
                      placeholder="select step"
                      label={"For form steps"}
                      options={formStepOptions || []}
                    />
                  </Col>

                  <Col span={8} className="">
                    <FormSelectField
                      required
                      name={"name"}
                      placeholder="select step"
                      label={"For Value"}
                      options={formInputValueName}
                    />
                  </Col>
                </Row>

                <FormFildAdd setValue={setStepFild} value={stepFild} />
              </Form>

              <div className="my-6">
                <DisplayAddedStrpFilds
                  data={stepFild}
                  setStepFild={setStepFild}
                  idTypeOptions={idTypeOptions}
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
