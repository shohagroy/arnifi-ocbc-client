import { Button, Drawer, Flex, message } from "antd";
import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import Form from "../forms/From";
import FormInput from "../forms/FormInput";

import { yupResolver } from "@hookform/resolvers/yup";
import CreateUpdateInfoModal from "../modal/DeleteInfoModal";
import FormSelectField from "../forms/FormSelectField";
import {
  useCreateUserMutation,
  useUpdateInfoMutation,
} from "@/redux/features/user/userApi";
import { createSchema } from "@/schemas/user";

const AdminDrawer = ({ open, setOpen, setData, data }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState({});

  const [createUser, { isLoading: createLoading }] = useCreateUserMutation();
  const [updateInfo, { isLoading: updateLoading }] = useUpdateInfoMutation();

  const onSubmit = async (data) => {
    if (!data?.key) {
      if (data?.password !== data?.repassword) {
        return messageApi.open({
          type: "error",
          content: "Password and Re-Password not match!",
        });
      }

      const info = {
        tittle: "Are you sure create this user?",
        details: (
          <>
            <p className="font-primary">
              Name: <strong>{data?.fullName}</strong>
            </p>
            <p className="font-primary">
              Email: <strong>{data?.email}</strong>
            </p>
            <p className="font-primary">
              Role:{" "}
              <strong>
                {data?.role === "super_admin" ? "Super Admin" : "Admin"}
              </strong>
            </p>
          </>
        ),
      };
      setModalText(info);
      setData(data);
      setOpenModal(true);
    } else {
      const info = {
        tittle: "Are you sure update this user info?",
        details: (
          <>
            <p className="font-primary">
              Name: <strong>{data?.fullName}</strong>
            </p>
            <p className="font-primary">
              Email: <strong>{data?.email}</strong>
            </p>
            <p className="font-primary">
              Role:{" "}
              <strong>
                {data?.role === "super_admin" ? "Super Admin" : "Admin"}
              </strong>
            </p>
          </>
        ),
      };
      setModalText(info);
      setData(data);
      setOpenModal(true);
    }
  };

  const modalOkHandelar = async () => {
    if (!data?.key) {
      const result = await createUser(data).unwrap();
      if (result?.data?.success) {
        messageApi.open({
          type: "success",
          content: result?.data?.message || "User Created Successfully!",
        });
        setOpenModal(false);
        setOpen(false);
        setData({
          fullName: "",
          email: "",
          password: "",
          repassword: "",
          role: "admin",
          contact: "",
        });
      } else {
        messageApi.open({
          type: "error",
          content: result?.message || "Something went wrong!",
        });
      }
    } else {
      const { password, repassword, sl, createdAt, ...other } = data || {};
      const result = await updateInfo(other).unwrap();
      if (result?.data?.success) {
        messageApi.open({
          type: "success",
          content: result?.data?.message || "User Info Update Successfully!",
        });
        setOpenModal(false);
        setOpen(false);
        setData({
          fullName: "",
          email: "",
          password: "",
          role: "admin",
          contact: "",
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
    setData({ role: "admin" });
  };

  return (
    <>
      <Drawer
        className="font-primary"
        title={
          <Flex className="font-primary" justify="space-between" align="center">
            <h2> {data?.key ? "Update User Info" : "Create New User"}</h2>

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
        open={open}
        getContainer={false}
      >
        <div>
          {contextHolder}
          <Form
            submitHandler={onSubmit}
            resolver={!data?.key ? yupResolver(createSchema) : null}
            defaultValues={data}
          >
            <FormInput
              name={"fullName"}
              type={"text"}
              size="large"
              label={"Full Name"}
              placeholder={"Type User Full Name"}
              required
            />

            <FormInput
              name={"email"}
              type={"email"}
              size="large"
              label={"Email"}
              placeholder={"Type User Email"}
              required
            />

            <FormInput
              disabled={data?.key}
              name={"password"}
              type={"password"}
              size="large"
              label={"Password"}
              placeholder={"********"}
              required
            />

            <FormInput
              disabled={data?.key}
              name={"repassword"}
              type={"password"}
              size="large"
              label={"Re-Password"}
              placeholder={"********"}
              required
            />

            <div className="grid my-2 gap-4 grid-cols-2">
              <div>
                <FormSelectField
                  name={"role"}
                  size="large"
                  required
                  label={"Access Level"}
                  options={[
                    {
                      label: "Admin",
                      value: "admin",
                    },
                    {
                      label: "Super Admin",
                      value: "super_admin",
                    },
                  ]}
                />
              </div>

              <div>
                <FormInput
                  name={"contact"}
                  type={"text"}
                  size="large"
                  label={"Contact"}
                  placeholder={"e.g. +23456789"}
                  required
                />
              </div>
            </div>

            <Button
              disabled={createLoading || updateLoading}
              htmlType="submit"
              loading={createLoading}
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

export default AdminDrawer;
