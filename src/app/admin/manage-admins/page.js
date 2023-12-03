"use client";

import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import DisplayTable from "@/components/table/DisplayTable";
import { Button, Card, Col, Row, Select, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks/useDebounced";
import AddButton from "../../../components/ui/button/AddButton";
import SearchInput from "@/components/ui/dataInput/SearchInput";
import dayjs from "dayjs";
import DeleteInfoModal from "@/components/modal/DeleteInfoModal";
import AdminDrawer from "@/components/drawer/AdminDrawer";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/features/user/userApi";

const ManageAdminPage = () => {
  const [userInfo, setUserInfo] = useState({ role: "admin" });
  const [messageApi, contextHolder] = message.useMessage();

  // filtar
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [sortBy, setSortBy] = useState("fullName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  // modal code
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState({});

  const query = {};
  query["size"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["search"] = debouncedTerm;
  }

  const { data, isLoading: tableLoading } = useGetAllUserQuery({
    ...query,
  });
  const { meta } = data || {};

  const usersData = data?.data?.data.map((item, i) => {
    return {
      key: item?.id,
      sl: page * size - size + i + 1,
      fullName: item?.fullName,
      email: item?.email,
      password: "Hard@Password9",
      repassword: "Hard@Password9",
      role: item?.role,
      contact: item?.contact,
      createdAt: dayjs(item?.createdAt).format("MMM D, YYYY hh:mm A"),
    };
  });

  const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation();

  const openModalHandelar = (data) => {
    const info = {
      tittle: "Are you sure delete this user?",
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

    setUserInfo(data);
    setModalText(info);
    setOpenModal(true);
  };

  const deleteHandelar = async () => {
    const result = await deleteUser(userInfo?.key).unwrap();
    if (result?.data?.success) {
      messageApi.open({
        type: "success",
        content: result?.data?.message || "User Delete Successfully!",
      });
      setOpenModal(false);
      setUserInfo({
        role: "admin",
      });
    } else {
      messageApi.open({
        type: "error",
        content: result?.message || "Something went wrong!",
      });
    }
  };

  const updateHandelar = (data) => {
    setUserInfo(data);
    setOpenDrawer(true);
  };

  const columns = [
    {
      title: <p>SL No</p>,
      width: 80,
      align: "center",
      dataIndex: "sl",
    },
    {
      title: <p>Full Name</p>,
      dataIndex: "fullName",
      width: 200,
      // align: "center",
    },

    {
      title: <p>Email</p>,
      dataIndex: "email",
      width: 250,
      // align: "center",
    },
    {
      title: <p>Access Level</p>,
      dataIndex: "role",
      width: 150,
      // align: "center",
    },

    {
      title: <p>Contact</p>,
      dataIndex: "contact",
      width: 200,
      // align: "center",
    },
    {
      title: <p>Created Date</p>,
      dataIndex: "createdAt",
      width: 200,
      // align: "center",
    },

    {
      title: <p>Action</p>,
      width: 200, // Set the width here
      align: "center",
      render: function (data) {
        return (
          <>
            <Button
              className="mx-2 bg-primary"
              onClick={() => updateHandelar(data)}
              type="primary"
            >
              <EditFilled />
            </Button>
            <Button
              onClick={() => openModalHandelar(data)}
              type="primary"
              danger
            >
              <DeleteFilled />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page, pageSize) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination, filter, sorter) => {
    const { order, field } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const breadCrumbItems = [
    {
      label: <Link href={"/admin"}>Admin</Link>,
      link: "/admin",
    },
    {
      label: "Manage Admins",
      link: "/admin/manage-admins",
    },
  ];

  return (
    <main>
      {contextHolder}
      <section>
        <AdminBreadCrumb items={breadCrumbItems} />

        <div className="max-w-7xl mx-auto my-4 px-2">
          <Card className="mt-10 min-h-[80vh]">
            <div>
              <Row gutter={16}>
                <Col span={10}>
                  <SearchInput
                    placeholder={"search..."}
                    change={(e) => setSearchTerm(e.target.value)}
                  />
                </Col>
                <Col span={10} className="flex items-center">
                  <div className="flex items-center font-primary text-lg">
                    <p>Sort by:</p>
                    <Select
                      onChange={(e) => setSortBy(e)}
                      value={sortBy}
                      className={`focus:border-primary h-[50px] w-[100px] ml-3`}
                      size={"large"}
                      options={[
                        {
                          label: "Name",
                          value: "fullName",
                        },
                        {
                          label: "Date",
                          value: "createdAt",
                        },
                      ]}
                    />
                  </div>

                  <div className="flex items-center font-primary text-lg">
                    <Select
                      className={`focus:border-primary h-[50px] w-[200px] ml-3`}
                      onChange={(e) => setSortOrder(e)}
                      value={sortOrder}
                      size={"large"}
                      options={[
                        {
                          label: "Low to High",
                          value: "asc",
                        },
                        {
                          label: "High to Low",
                          value: "desc",
                        },
                      ]}
                    />
                  </div>
                </Col>
                <Col span={4}>
                  <AddButton
                    text={"Add User"}
                    click={() => setOpenDrawer(true)}
                  />
                </Col>
              </Row>
            </div>

            <div className="my-4">
              <DisplayTable
                loading={tableLoading}
                columns={columns}
                dataSource={usersData}
                pageSize={size}
                totalPages={meta?.total}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
              />
            </div>
          </Card>
        </div>
      </section>

      <AdminDrawer
        open={openDrawer}
        setOpen={setOpenDrawer}
        data={userInfo}
        setData={setUserInfo}
        modalText={modalText}
        setModalText={setModalText}
        // openModal={openModal}
        // setOpenModal={setOpenModal}
      />

      <DeleteInfoModal
        loading={deleteLoading}
        setOpen={setOpenModal}
        open={openModal}
        submitFn={deleteHandelar}
        modalText={modalText}
      />
    </main>
  );
};

export default ManageAdminPage;
