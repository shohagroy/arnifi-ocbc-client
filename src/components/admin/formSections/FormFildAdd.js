import FormCheckbox from "@/components/forms/FormCheckbox";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import { Button, Col, Divider, Row } from "antd";
import React from "react";

const FormFildAdd = ({ value }) => {
  const formInputTypeOptions = [
    {
      value: "text",
      label: " Input Type Text Fild",
    },
    {
      value: "number",
      label: "Input Type text Number Fild",
    },
    {
      value: "select",
      label: "Select Item Type Fild",
    },
    {
      value: "radio",
      label: "Radio Button Type Fild",
    },
    {
      value: "address",
      label: "Address Fild",
    },
  ];

  return (
    <div>
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
            {value?.id ? "Update" : "Add +"}
          </Button>
        </Col>
      </Row>
      <Col className="my-2">
        <FormCheckbox name={"isRequired"} />
      </Col>
    </div>
  );
};

export default FormFildAdd;
