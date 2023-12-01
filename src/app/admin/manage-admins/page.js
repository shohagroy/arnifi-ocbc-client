"use client";

import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import DisplayTable from "@/components/table/DisplayTable";
import { Button, Card, Col, Input, Row, Select, message } from "antd";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useDebounced } from "@/redux/hooks/useDebounced";
import ConfirmModal from "@/components/ui/ConfirmModal";
import CountryDrawer from "@/components/drawer/CountryDrawer";
import {
  useDeleteCountryMutation,
  useGetAllCountriesQuery,
} from "@/redux/features/country/countryApi";
import FormSelectField from "@/components/forms/FormSelectField";
import AddButton from "../../../components/ui/button/AddButton";
import SearchInput from "@/components/ui/dataInput/SearchInput";

const ManageAdminsPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isEditable, setIsEditable] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [open, setOpen] = useState(false);
  const [countryInfo, setCountryInfo] = useState({});
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

  const { data, isLoading } = useGetAllCountriesQuery({ ...query });
  const countriesData = data?.data?.map((item, i) => {
    return {
      key: item?.id,
      sl: page * size - size + i + 1,
      name: item?.name,
      createdAt: item?.createdAt,
    };
  });
  const meta = data?.meta || {};

  const [deleteCountry, { isLoading: deleteLoading }] =
    useDeleteCountryMutation();

  const itemDeleteHandelar = async () => {
    const result = await deleteCountry(countryInfo?.key).unwrap();
    if (result?.errorMessages) {
      messageApi.open({
        type: "error",
        content: result.errorMessages || "Something went wrong!",
      });
    }
    if (result?.data?.id) {
      messageApi.open({
        type: "success",
        content: "Country Delete Successfully!",
      });
      setOpen(false);
    }
  };

  const openModalHandelar = (data) => {
    setCountryInfo(data);
    setModalText({
      tittle: "Are your sure Delete this Country?",
      details: (
        <div>
          <p>
            Name: <span className="text-xl font-bold">{data?.name}</span>
          </p>
        </div>
      ),
    });
    setOpen(true);
  };

  const handelCountryUpdate = (data) => {
    setCountryInfo(data);
    setIsEditable(true);
  };

  const columns = [
    {
      title: <p>SL No</p>,
      width: 100,
      align: "center",
      dataIndex: "sl",
    },
    {
      title: <p>Country Name</p>,
      dataIndex: "name",
      width: 300,
      align: "center",
    },

    {
      title: <p>Postal Code</p>,
      dataIndex: "postalCode",
      width: 300,
      align: "center",
    },

    {
      title: <p>Country Code</p>,
      dataIndex: "name",
      width: 300,
      align: "center",
    },
    // {
    //   title: <p>Postal Code</p>,
    //   dataIndex: "createdAt",
    //   width: 250, // Set the width here
    //   align: "center",
    //   render: function (data) {
    //     return data && dayjs(data).format("MMM D, YYYY hh:mm A");
    //   },
    //   sorter: true,
    // },
    {
      title: <p>Action</p>,
      width: 100, // Set the width here
      align: "center",
      render: function (data) {
        return (
          <>
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => handelCountryUpdate(data)}
              type="primary"
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => openModalHandelar(data)}
              type="primary"
              danger
            >
              <DeleteOutlined />
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

  // const resetFilters = () => {
  //   setSortBy("");
  //   setSortOrder("");
  //   setSearchTerm("");
  // };

  const breadCrumbItems = [
    {
      label: <Link href={"/admin"}>Admin</Link>,
      link: "/admin",
    },
    {
      label: "Manage Country",
      link: "/admin/manage-country",
    },
  ];

  const dateOptions = [
    {
      label: "Up to Low",
      value: "asd",
    },
    {
      label: "Low to High",
      value: "desc",
    },
  ];

  return (
    <main>
      {contextHolder}
      <section>
        <AdminBreadCrumb items={breadCrumbItems} />

        <div className="max-w-7xl mx-auto my-4 px-2">
          <Card className="mt-10 min-h-[70vh]">
            <div>
              <Row gutter={16}>
                <Col span={10}>
                  <SearchInput
                    placeholder={"search..."}
                    change={(e) => setSearchTerm(e.target.value)}
                  />
                </Col>
                <Col span={10}>
                  <div className="flex items-center font-primary text-xl">
                    <p>Sort by Date:</p>

                    <Select
                      // style={
                      //   errorMessage && {
                      //     border: "1.5px solid #F15656",
                      //     borderRadius: "10px",
                      //   }
                      // }
                      className={`focus:border-primary h-[50px] w-[200px] ml-3`}
                      // onChange={handleChange ? handleChange : onChange}
                      size={"large"}
                      options={dateOptions}
                    />
                  </div>
                  {/* <SearchInput
                    placeholder={"search..."}
                    change={(e) => setSearchTerm(e.target.value)}
                  /> */}
                </Col>
                <Col span={4}>
                  <AddButton
                    text={"Create New Admin"}
                    click={() => setIsEditable(true)}
                  />
                </Col>
              </Row>
            </div>

            <div className=" my-4">
              <DisplayTable
                loading={isLoading}
                columns={columns}
                dataSource={countriesData}
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

      <CountryDrawer
        open={isEditable}
        setOpen={setIsEditable}
        valueObj={countryInfo}
        valueFn={setCountryInfo}
      />
      <ConfirmModal
        submitFn={itemDeleteHandelar}
        setOpen={setOpen}
        open={open}
        loading={deleteLoading}
        modalText={modalText}
      />
    </main>
  );
};

export default ManageAdminsPage;
