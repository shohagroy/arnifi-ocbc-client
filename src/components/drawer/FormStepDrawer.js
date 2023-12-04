import { Button, Drawer, Flex, message } from "antd";
import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import Form from "../forms/From";
import FormInput from "../forms/FormInput";

import { yupResolver } from "@hookform/resolvers/yup";
import CreateUpdateInfoModal from "../modal/DeleteInfoModal";
import FormSelectField from "../forms/FormSelectField";
import { formStepSchema } from "@/schemas/formStep";
import {
  useCreateFormStepMutation,
  useUpdateFormStepMutation,
} from "@/redux/features/formStep/formStepApi";

const FormStepDrawer = ({
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

  const [createFormStep, { isLoading: createLoading }] =
    useCreateFormStepMutation();

  const [updateFormStep, { isLoading: updateLoading }] =
    useUpdateFormStepMutation();

  const onSubmit = async (data) => {
    setOpenModal(true);

    if (data?.key) {
      const info = {
        tittle: "Are you sure update this Form Step?",
        details: (
          <p className="font-primary">
            Tittle: <strong>{data?.tittle}</strong>
          </p>
        ),
      };
      setModalText(info);
      setData(data);
    } else {
      const info = {
        tittle: "Are you sure create this Form Step?",
        details: (
          <p className="font-primary">
            Tittle: <strong>{data?.tittle}</strong>
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
      const result = await updateFormStep(data).unwrap();
      if (result?.data?.success) {
        messageApi.open({
          type: "success",
          content: result?.data?.message || "Form Step Updated Successfully!",
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
      const result = await createFormStep(data).unwrap();

      if (result?.data?.success) {
        messageApi.open({
          type: "success",
          content: result?.message || "Form Step Create Successfully!",
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
            <h2> {data?.key ? "Update Form Step" : "Create New Form Step"}</h2>

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
            resolver={yupResolver(formStepSchema)}
            defaultValues={data}
          >
            <FormInput
              name={"tittle"}
              type={"text"}
              size="large"
              label={"Form Step Tittle"}
              placeholder={"e.g. Personal Details"}
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

export default FormStepDrawer;
