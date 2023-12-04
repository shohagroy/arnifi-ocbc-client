"use client";

import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import Form from "@/components/forms/From";
import AddButton from "@/components/ui/button/AddButton";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import { formInputFildSchema } from "@/schemas/formSchema";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Col, Row, message, Divider } from "antd";
import React, { useState } from "react";

const CreateNewWillsPage = () => {
  const [createInfo, setCreateInfo] = useState(
    !!getFromLocalStorage("create-inputs")
      ? Number(JSON.parse(getFromLocalStorage("create-inputs")))
      : [] || []
  );

  const [defaultValue, setDefaultValue] = useState({
    countryId: null,
    step: null,
    label: "",
    name: "",
    type: null,
    placeholder: "",
    errorText: "",
  });
  const [messageApi, contextHolder] = message.useMessage();

  const { data: countriesData, isLoading: countryLoading } =
    useGetAllCountryDataQuery();

  const countriesOptions = countriesData?.data?.data.map((item) => {
    return {
      label: item?.name,
      value: item?.id,
    };
  });

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

  const inputFildAddHandelar = (e) => {
    console.log(createInfo);
    // setToLocalStorage("create-inputs", JSON.stringify([...createInfo, e]));
    // setDefaultValue({
    //   countryId: "",
    //   step: "",
    //   label: "",
    //   name: "",
    //   type: "",
    //   placeholder: "",
    //   errorText: "",
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
                defaultValues={defaultValue}
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
                      name={"step"}
                      placeholder="select step"
                      label={"For form steps"}
                      options={formStepsOptions}
                    />
                  </Col>
                </Row>

                <div className="my-4 font-primary text-lg">
                  <Divider orientation="left">
                    <p className="font-primary text-lg">Add Form Input Filds</p>
                  </Divider>
                </div>
                <Row gutter={4} className="my-">
                  <Col span={4}>
                    <FormSelectField
                      required
                      name={"type"}
                      placeholder="select find type"
                      options={formInputTypeOptions}
                    />
                  </Col>

                  <Col span={4} className="">
                    <FormInput
                      name={"label"}
                      placeholder="enter fild lable tittle"
                    />
                  </Col>

                  <Col span={4} className="">
                    <FormInput
                      name={"name"}
                      placeholder="enter fild value name"
                    />
                  </Col>

                  <Col span={5} className="">
                    <FormInput
                      name={"placeholder"}
                      placeholder="enter fild placeholder"
                    />
                  </Col>

                  <Col span={5} className="">
                    <FormInput
                      name={"errorText"}
                      placeholder="enter fild error message"
                    />
                  </Col>

                  <Col span={2}>
                    <Button
                      htmlType="submit"
                      className="w-full h-[50px] font-primary font-bold"
                      type="primary"
                      size="large"
                    >
                      Add +
                    </Button>
                  </Col>
                </Row>
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
    </main>
  );
};

export default CreateNewWillsPage;
