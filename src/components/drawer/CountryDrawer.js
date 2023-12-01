import { Button, Drawer, Flex, Row, message } from "antd";
import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import Form from "../forms/From";
import FormInput from "../forms/FormInput";

import {
  useCreateCountryMutation,
  useUpdateCountryMutation,
} from "@/redux/features/country/countryApi";

const CountryDrawer = ({ open, setOpen, valueObj, valueFn }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [createCountry, { isLoading }] = useCreateCountryMutation();
  const [updateCountry, { isLoading: updateLoading }] =
    useUpdateCountryMutation();
  const onSubmit = async (data) => {
    valueFn({});
    if (!valueObj?.key) {
      const result = await createCountry(data).unwrap();
      if (result?.errorMessages) {
        messageApi.open({
          type: "error",
          content: result.errorMessages || "Something went wrong!",
        });
      }
      if (result?.data?.id) {
        messageApi.open({
          type: "success",
          content: "Country Create Successfully!",
        });
        setOpen(false);
        valueFn({});
      }
    } else {
      const updatedData = { name: data.name, id: valueObj?.key };

      const result = await updateCountry(updatedData).unwrap();

      if (result?.errorMessages) {
        messageApi.open({
          type: "error",
          content: result.errorMessages || "Something went wrong!",
        });
      }
      if (result?.data?.id) {
        messageApi.open({
          type: "success",
          content: "Country Update Successfully!",
        });
        setOpen(false);
      }
    }
  };
  return (
    <Drawer
      className="font-primary"
      title={
        <Flex className="font-primary" justify="space-between" align="center">
          <h2>{valueObj?.key ? "Update" : "Add"} New Country</h2>

          <Button
            icon={<CloseOutlined />}
            onClick={() => {
              setOpen(!open);
              valueFn({});
            }}
            type="link"
            size="large"
          >
            Close
          </Button>
        </Flex>
      }
      placement="right"
      closable={false}
      width={"500px"}
      onClose={() => setOpen(false)}
      open={open}
      getContainer={false}
    >
      <div>
        {contextHolder}
        <Form
          submitHandler={onSubmit}
          defaultValues={{ name: valueObj?.name } || {}}
        >
          <FormInput
            name={"name"}
            type={"text"}
            size="large"
            label={"Country Name"}
            placeholder={"Type Country Full Name"}
            required
          />

          <div className="grid my-2 gap-4 grid-cols-2">
            <div>
              <FormInput
                name={"name"}
                type={"number"}
                size="large"
                label={"Postal Code"}
                placeholder={"e.g. 5403"}
                required
              />
            </div>

            <div>
              <FormInput
                name={"name"}
                type={"text"}
                size="large"
                label={"Country Code"}
                placeholder={"e.g. +971"}
                required
              />
            </div>
          </div>

          <Button
            htmlType="submit"
            loading={isLoading}
            className="my-4 bg-primary"
            type="primary"
            size="large"
          >
            {!valueObj?.key
              ? isLoading
                ? "Creating..."
                : "Create +"
              : updateLoading
              ? "Updating..."
              : "Update +"}
          </Button>
        </Form>
      </div>
    </Drawer>
  );
};

export default CountryDrawer;
