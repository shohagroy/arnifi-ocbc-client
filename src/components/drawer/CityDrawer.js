import { Button, Drawer, Flex, message } from "antd";
import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import Form from "../forms/From";
import FormInput from "../forms/FormInput";
import {
  useCreateCityMutation,
  useUpdateCityMutation,
} from "@/redux/features/city/cityAPi";
import FormSelectField from "../forms/FormSelectField";

const CityDrawer = ({ open, setOpen, valueObj, valueFn, options }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [createCity, { isLoading }] = useCreateCityMutation();

  const [updateCity, { isLoading: updateLoading }] = useUpdateCityMutation();

  const onSubmit = async (data) => {
    valueFn({});
    if (!valueObj?.key) {
      const result = await createCity(data).unwrap();
      if (result?.errorMessages) {
        messageApi.open({
          type: "error",
          content: result.errorMessages || "Something went wrong!",
        });
      }
      if (result?.data?.id) {
        messageApi.open({
          type: "success",
          content: "City Create Successfully!",
        });
        setOpen(false);
        valueFn({});
      }
    } else {
      const updatedData = { name: data.name, id: valueObj?.key };

      const result = await updateCity(updatedData).unwrap();

      if (result?.errorMessages) {
        messageApi.open({
          type: "error",
          content: result.errorMessages || "Something went wrong!",
        });
      }
      if (result?.data?.id) {
        messageApi.open({
          type: "success",
          content: "City Update Successfully!",
        });
        setOpen(false);
      }
    }
  };

  return (
    <Drawer
      className=""
      title={
        <Flex justify="space-between" align="center">
          <h2>{valueObj?.key ? "Update" : "Add"} New City</h2>

          <Button
            onClick={() => {
              setOpen(!open);
              valueFn({});
            }}
            type="primary"
            danger
            size="large"
          >
            <CloseOutlined />
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
          defaultValues={
            {
              name: valueObj?.name,
              countryId: valueObj?.countryId,
            } || {}
          }
        >
          <FormInput
            name={"name"}
            type={"text"}
            size="large"
            label={"City Name"}
            required
          />

          <div className="my-4">
            <FormSelectField
              name={"countryId"}
              // loading={countryLoading}
              label={"Country Name"}
              options={options}
              placeholder="Select Country..."
              size="large"
            />
          </div>
          <Button
            htmlType="submit"
            loading={isLoading}
            className="my-4"
            type="primary"
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

export default CityDrawer;
