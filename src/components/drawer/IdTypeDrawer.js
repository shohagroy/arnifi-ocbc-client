import { Button, Drawer, Flex, message } from "antd";
import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import Form from "../forms/From";
import FormInput from "../forms/FormInput";

import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateUpdateInfoModal from "../modal/DeleteInfoModal";
import FormSelectField from "../forms/FormSelectField";
import { idTypeSchema } from "@/schemas/IdType";
import {
  useCreateIdTypeMutation,
  useUpdateIdTypesMutation,
} from "@/redux/features/idType/idTypeApi";

const IdTypeDrawer = ({
  open,
  setOpen,
  setData,
  data,
  options,
  optionsLoading,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState({});

  // const { data: countriesData, isLoading: countryLoading } =
  //   useGetAllCountryDataQuery();

  // const options = countriesData?.data?.data.map((item) => {
  //   return {
  //     label: item?.name,
  //     value: item?.id,
  //   };
  // });

  const [createIdType, { isLoading: createLoading }] =
    useCreateIdTypeMutation();

  const [updateIdType, { isLoading: updateLoading }] =
    useUpdateIdTypesMutation();

  const onSubmit = async (data) => {
    setOpenModal(true);

    if (data?.key) {
      const info = {
        tittle: "Are you sure update this ID Type?",
        details: (
          <p className="font-primary">
            ID Type: <strong>{data?.tittle}</strong>
          </p>
        ),
      };
      setModalText(info);
      setData(data);
    } else {
      const info = {
        tittle: "Are you sure create this ID Type?",
        details: (
          <p className="font-primary">
            ID Type: <strong>{data?.tittle}</strong>
          </p>
        ),
      };
      setModalText(info);
      setData(data);
    }
  };

  const modalOkHandelar = async () => {
    if (data?.key) {
      // update
      const result = await updateIdType(data).unwrap();
      if (result?.data?.success) {
        messageApi.open({
          type: "success",
          content: result?.data?.message || "ID Type Updated Successfully!",
        });
        setOpenModal(false);
        setOpen(false);
        setData({
          tittle: "",
          countryId: "",
        });
      } else {
        messageApi.open({
          type: "error",
          content: result?.message || "Something went wrong!",
        });
      }
    } else {
      // create new
      const result = await createIdType(data).unwrap();

      if (result?.data?.success) {
        messageApi.open({
          type: "success",
          content: result?.message || "ID Type Create Successfully!",
        });
        setOpenModal(false);
        setOpen(false);
        setData({
          tittle: "",
          countryId: "",
        });
      } else {
        messageApi.open({
          type: "error",
          content: result?.message || "Something went wrong!",
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
            <h2> {data?.key ? "Update ID Type" : "Create New ID Type"}</h2>

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
            resolver={yupResolver(idTypeSchema)}
            defaultValues={data}
          >
            <FormInput
              name={"tittle"}
              type={"text"}
              size="large"
              label={"ID Types Tittle"}
              placeholder={"e.g. Emirates ID"}
              required
            />

            <FormSelectField
              loading={optionsLoading}
              showSearch={true}
              name={"countryId"}
              label={"Select Country"}
              options={options}
              required
            />

            <Button
              disabled={createLoading || updateLoading}
              htmlType="submit"
              // loading={createLoading}
              className="my-4 bg-primary text-white h-[50px] font-bold px-10"
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

export default IdTypeDrawer;
