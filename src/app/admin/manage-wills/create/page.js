"use client";

import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import Form from "@/components/forms/From";
import CreateUpdateInfoModal from "@/components/modal/CreateUpdateInfoModal copy";
import AddButton from "@/components/ui/button/AddButton";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import { useCreateStepFildMutation } from "@/redux/features/stepFild/stepFildApi";
import { formInputFildSchema } from "@/schemas/formSchema";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Col, Row, message, Divider, Checkbox } from "antd";
import React, { useState } from "react";

const CreateNewWillsPage = () => {
  const [stepFild, setStepFild] = useState({
    countryId: null,
    stepId: null,
    name: null,
    label: "",
    type: null,
    placeholder: "",
    errorText: "",
    isRequired: false,
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState({});

  const { data: countriesData, isLoading: countryLoading } =
    useGetAllCountryDataQuery();

  const countriesOptions = countriesData?.data?.data.map((item) => {
    return {
      label: item?.name,
      value: item?.id,
    };
  });

  const [createStepFild, { isLoading: createLoading }] =
    useCreateStepFildMutation();

  const formStepsOptions = [
    {
      label: "Personal Details",
      value: "Personal Details",
    },
    {
      label: "Executors",
      value: "Executors",
    },
    {
      label: "Beneficiaries",
      value: "Beneficiaries",
    },
    {
      label: "Asset Allocation",
      value: "Asset Allocation",
    },
    {
      label: "Instructions",
      value: "Instructions",
    },
  ];

  const formInputTypeOptions = [
    {
      label: "Fild Type Text",
      value: "text",
    },
    {
      label: "Fild Type Number ",
      value: "number",
    },
    {
      label: "Fild Type Select ",
      value: "select",
    },
    {
      label: "Fild Type Radio Button",
      value: "radio",
    },
    {
      label: "Fild Type Files",
      value: "files",
    },
  ];

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

    setStepFild({ ...stepFild, ...data });
    setModalText(info);
    setOpenModal(true);
  };

  const modalOkHandelar = async () => {
    const result = await createStepFild(stepFild).unwrap();
    if (result?.data?.success) {
      messageApi.open({
        type: "success",
        content: result?.data?.message || "User Created Successfully!",
      });
      setModalText({});
      setOpenModal(false);
      setStepFild({
        countryId: null,
        stepId: null,
        label: "",
        name: null,
        type: "",
        placeholder: "",
        errorText: "",
        isRequired: false,
      });
    } else {
      messageApi.open({
        type: "error",
        content: result?.message || "Something went wrong!",
      });
    }
    // setStepFild({
    //   countryId: null,
    //   stepId: null,
    //   label: "",
    //   name: null,
    //   type: "",
    //   placeholder: "",
    //   errorText: "",
    //   isRequired: false,
    // });
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
                stepFilds={stepFild}
              >
                <Row gutter={8}>
                  <Col span={8} className=" items-center">
                    <FormSelectField
                      showSearch
                      required
                      name={"countryId"}
                      placeholder="select country for wills"
                      label={"For Country"}
                      options={countriesOptions}
                    />
                  </Col>

                  <Col span={8} className="">
                    <FormSelectField
                      required
                      name={"stepId"}
                      placeholder="select step"
                      label={"For form steps"}
                      options={formStepsOptions}
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
                    {/* <FormSelectField
                      required
                      name={"name"}
                      placeholder="select value name"
                      label={"For Value"}
                      options={formInputValueName}
                    /> */}
                  </Col>
                </Row>

                <div className="my-4 font-primary text-lg">
                  <Divider orientation="left">
                    <p className="font-primary text-lg">Add Form Input Filds</p>
                  </Divider>
                </div>
                <Row gutter={4} className="my-">
                  <Col span={5}>
                    <FormSelectField
                      required
                      name={"type"}
                      placeholder="select find type"
                      options={formInputTypeOptions}
                    />
                  </Col>

                  <Col span={5} className="">
                    <FormInput
                      name={"label"}
                      required
                      placeholder="enter fild lable tittle"
                    />
                  </Col>

                  <Col span={5} className="">
                    <FormInput
                      name={"placeholder"}
                      required
                      placeholder="enter fild placeholder"
                    />
                  </Col>

                  <Col span={5} className="">
                    <FormInput
                      name={"errorText"}
                      required
                      placeholder="enter fild error message"
                    />
                  </Col>

                  <Col span={4}>
                    <Button
                      htmlType="submit"
                      className="w-full h-[50px] bg-primary hover:bg-primary/90 font-primary font-bold"
                      type="primary"
                      size="large"
                    >
                      Add +
                    </Button>
                  </Col>
                </Row>
                <Col className="my-2">
                  <Checkbox
                    checked={stepFild?.isRequired}
                    onChange={(e) =>
                      setStepFild({
                        ...stepFild,
                        isRequired: e.target.checked,
                      })
                    }
                  >
                    Is Required
                  </Checkbox>
                </Col>
              </Form>

              <div className="my-6">
                <Divider>
                  <p className="font-primary text-lg">Added Form Input</p>
                </Divider>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <CreateUpdateInfoModal
        loading={createLoading}
        setOpen={setOpenModal}
        open={openModal}
        submitFn={modalOkHandelar}
        modalText={modalText}
      />
    </main>
  );
};

export default CreateNewWillsPage;
