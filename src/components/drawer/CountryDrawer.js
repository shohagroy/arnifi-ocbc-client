import { Button, Drawer, Flex, message } from "antd";
import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import Form from "../forms/From";
import FormInput from "../forms/FormInput";

import {
  useCreateCountryMutation,
  useUpdateCountryMutation,
} from "@/redux/features/country/countryApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { countrySchema } from "@/schemas/country";
import CreateUpdateInfoModal from "../modal/DeleteInfoModal";

const CountryDrawer = ({ open, setOpen, setData, data }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState({});

  const [createCountry, { isLoading: createLoading }] =
    useCreateCountryMutation();

  const [updateCountry, { isLoading: updateLoading }] =
    useUpdateCountryMutation();

  const onSubmit = async (data) => {
    setOpenModal(true);

    if (data?.key) {
      const info = {
        tittle: "Are you sure update this country info?",
        details: (
          <p className="font-primary">
            Country Name: <strong>{data?.name}</strong>
          </p>
        ),
      };
      setModalText(info);
      setData(data);
    } else {
      const info = {
        tittle: "Are you sure create this country?",
        details: (
          <p className="font-primary">
            Country Name: <strong>{data?.name}</strong>
          </p>
        ),
      };
      setModalText(info);
      setData(data);
    }
  };

  const modalOkHandelar = async () => {
    if (data?.key) {
      // update country

      try {
        const result = await updateCountry(data).unwrap();
        messageApi.open({
          type: "success",
          content: result?.data?.message || "Country Updated Successfully!",
        });
        setOpenModal(false);
        setOpen(false);
        setData({
          name: "",
          countryCode: "",
        });
      } catch (error) {
        messageApi.open({
          type: "error",
          content: error?.data || "Something went wrong!",
        });
      }
    } else {
      try {
        const result = await createCountry(data).unwrap();
        messageApi.open({
          type: "success",
          content: result?.message || "Country Create Successfully!",
        });
        setOpenModal(false);
        setOpen(false);
        setData({
          name: "",
          countryCode: "",
        });
      } catch (error) {
        messageApi.open({
          type: "error",
          content: error?.data || "Something went wrong!",
        });
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
    setData({});
  };

  return (
    <>
      <Drawer
        className="font-primary"
        title={
          <Flex className="font-primary" justify="space-between" align="center">
            <h2> {data?.key ? "Update Country Info" : "Create New Country"}</h2>

            <Button
              icon={<CloseOutlined />}
              onClick={handleClose}
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
            resolver={yupResolver(countrySchema)}
            defaultValues={data}
          >
            <FormInput
              name={"name"}
              type={"text"}
              size="large"
              label={"Country Full Name"}
              placeholder={"Type Country Full Name"}
              required
            />

            <div className="grid my-2 gap-4 grid-cols-2">
              <div>
                <FormInput
                  name={"countryCode"}
                  type={"text"}
                  size="large"
                  label={"Country Code"}
                  placeholder={"e.g. UAE"}
                  required
                />
              </div>
            </div>

            <Button
              disabled={createLoading || updateLoading}
              htmlType="submit"
              // loading={createLoading}
              className="my-4 bg-primary h-[50px] font-bold px-10"
              type="primary"
              size="large"
            >
              {!data?.key ? "Create +" : "Update"}
            </Button>
          </Form>
        </div>
      </Drawer>

      <CreateUpdateInfoModal
        loading={createLoading || updateLoading}
        setOpen={setOpenModal}
        open={openModal}
        submitFn={modalOkHandelar}
        modalText={modalText}
      />
    </>
  );
};

export default CountryDrawer;
