import { Button, Col, Flex, Row, message } from "antd";
import React, { useRef, useState } from "react";
import Form from "@/components/forms/From";
import FormInput from "../forms/FormInput";
import { useUpdateInfoMutation } from "@/redux/features/user/userApi";
import FormSelectField from "../forms/FormSelectField";

const DetailsUpdateFilds = ({ name, value, label }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isEdit, setIsEdit] = useState(false);

  const [updateInfo, { isLoading }] = useUpdateInfoMutation();

  const genderOptions = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "others",
      value: "Others",
    },
  ];

  const onSubmit = async (data) => {
    const result = await updateInfo(data).unwrap();
    if (result?.errorMessages) {
      messageApi.open({
        type: "error",
        content: result.errorMessages || "Something went wrong!",
      });
    }
    if (result?.data?.id) {
      messageApi.open({
        type: "success",
        content: "User update Successfully!",
      });
      setIsEdit(false);
    }
  };

  return (
    <Row
      style={{
        width: "100%",
        borderTop: "1px solid #ccc",
      }}
      gutter={20}
    >
      <Col span={6} className=" py-4">
        <p>{label}</p>
        {contextHolder}
      </Col>
      <Col span={18} className="py-4">
        <Flex justify="space-between" align="center">
          {isEdit ? (
            <Form submitHandler={onSubmit} defaultValues={{ [name]: value }}>
              {name === "gender" ? (
                <FormSelectField
                  disabled={false}
                  name={name}
                  label={label}
                  options={genderOptions}
                  size="large"
                />
              ) : (
                <FormInput
                  name={name}
                  type={name === "email" ? "email" : "text"}
                  size="large"
                  label={label}
                  required
                />
              )}

              {isEdit && (
                <Button
                  loading={isLoading}
                  htmlType="submit"
                  size="small"
                  className="mt-2"
                  type="primary"
                >
                  {isLoading ? "Saving..." : "Save"}
                </Button>
              )}
            </Form>
          ) : (
            <div className={`${name !== "email" && "capitalize"}`}>{value}</div>
          )}

          <Flex className="flex-col justify-between">
            <Button
              onClick={() => setIsEdit(!isEdit)}
              type={isEdit ? "primary" : "link"}
              danger={isEdit}
            >
              {isEdit ? "Cancel" : "Edit"}
            </Button>
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default DetailsUpdateFilds;
