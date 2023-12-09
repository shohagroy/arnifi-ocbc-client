"use client";

import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import DisplayTable from "@/components/table/DisplayTable";
import { Button, Card, Col, Row, Switch, message } from "antd";
import React, { useState } from "react";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks/useDebounced";
import AddButton from "../../../components/ui/button/AddButton";
import dayjs from "dayjs";
import {
  useChangeActiveStatusMutation,
  useGetCountriesWillsQuery,
} from "@/redux/features/country/countryApi";
import Link from "next/link";

const ManageWillsPage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [sortBy, setSortBy] = useState("tittle");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [countryId, setCountryId] = useState("");

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

  if (countryId) {
    query["countryId"] = countryId;
  }

  const { data, isLoading: tableLoading } = useGetCountriesWillsQuery({});

  const [updateCountry, { isLoading: updateLoading }] =
    useChangeActiveStatusMutation();

  const { meta } = data || {};

  const countryWillsData = data?.data?.data.map((item, i) => {
    return {
      key: item?.id,
      sl: page * size - size + i + 1,
      tittle: item?.name,
      countryCode: item?.countryCode,
      createdAt: dayjs(item?.createdAt).format("MMM D, YYYY hh:mm A"),
      data: item,
    };
  });

  const activeStatusChangeHandelar = async (data) => {
    const newData = { ...data };
    newData.isActive = !data.isActive;

    try {
      const result = await updateCountry(data).unwrap();

      messageApi.open({
        type: "success",
        content: result?.data?.message || "Country Wills Update Successfully!",
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error?.data || "Something went wrong!",
      });
    }
  };

  const columns = [
    {
      title: <p>SL No</p>,
      width: 80,
      align: "center",
      dataIndex: "sl",
    },
    {
      title: <p>Country Name</p>,
      dataIndex: "tittle",
      width: 250,
      // align: "center",
    },

    {
      title: <p>Country Code</p>,
      dataIndex: "countryCode",
      width: 120,
      align: "center",
    },
    {
      title: <p>Active Status</p>,
      dataIndex: "data",
      width: 150,
      align: "center",
      render: function (data) {
        return (
          <>
            <Switch
              loading={updateLoading}
              onChange={() => activeStatusChangeHandelar(data)}
              checked={data?.isActive}
            />
          </>
        );
      },
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
              className="mx-2"
              disabled
              // onClick={() => updateHandelar(data)}
              type="primary"
            >
              <EditFilled />
            </Button>
            <Button
              disabled
              // onClick={() => openModalHandelar(data)}
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
      label: <p href={"/admin"}>Admin</p>,
      link: "/admin",
    },
    {
      label: "Manage Wills",
      link: "/admin/manage-wills",
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
              <Row gutter={1}>
                <Col span={20}></Col>
                <Col span={4}>
                  <Link href={"/admin/manage-wills/create"}>
                    <AddButton text={"Create New Wills"} />
                  </Link>
                </Col>
              </Row>
            </div>

            <div className="my-4">
              <DisplayTable
                loading={tableLoading}
                columns={columns}
                dataSource={countryWillsData}
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

      {/* <IdTypeDrawer
        open={openDrawer}
        setOpen={setOpenDrawer}
        data={idTypeInfo}
        setData={setIdTypeInfo}
        modalText={modalText}
        setModalText={setModalText}
        options={countriesOptions}
        optionsLoading={countryLoading}
      /> */}

      {/* <DeleteInfoModal
        loading={deleteLoading}
        setOpen={setOpenModal}
        open={openModal}
        submitFn={deleteHandelar}
        modalText={modalText}
      /> */}
    </main>
  );
};

export default ManageWillsPage;
