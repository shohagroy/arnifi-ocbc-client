import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import { Button, Checkbox, Col, Divider, Row } from "antd";
import React from "react";

const FormFildAdd = ({ formInputTypeOptions = [], value, setValue }) => {
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
            Add +
          </Button>
        </Col>
      </Row>
      <Col className="my-2">
        <Checkbox
          checked={value?.isRequired}
          onChange={(e) =>
            setValue({
              ...stepFild,
              isRequired: e.target.checked,
            })
          }
        >
          Is Required
        </Checkbox>
      </Col>
    </div>
  );
};

export default FormFildAdd;
