"use client";

import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import DisplayTable from "@/components/table/DisplayTable";
import { Button, Card, Col, Input, Row, Select, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks/useDebounced";
import ConfirmModal from "@/components/ui/ConfirmModal";
import CountryDrawer from "@/components/drawer/CountryDrawer";
import {
  useDeleteCountryMutation,
  useGetAllCountriesQuery,
} from "@/redux/features/country/countryApi";
import AddButton from "../../../components/ui/button/AddButton";
import SearchInput from "@/components/ui/dataInput/SearchInput";
import CreateUpdateInfoModal from "@/components/modal/CreateUpdateInfoModal";

const ManageCountryPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isEditable, setIsEditable] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  // modal code
  const [openDrawer, setOpenDrawer] = useState(false);

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

  const { data, isLoading: tableLoading } = useGetAllCountriesQuery({
    ...query,
  });
  const { meta } = data || {};

  console.log(data);

  const countriesData = data?.data?.data.map((item, i) => {
    return {
      key: item?.id,
      sl: page * size - size + i + 1,
      name: item?.name,
      postalCode: item?.postalCode,
      countryCode: item?.countryCode,
      createdAt: item?.createdAt,
    };
  });

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
    console.log("updated button click");
    // setCountryInfo(data);
    // setIsEditable(true);
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
      dataIndex: "name",
      width: 300,
      // align: "center",
    },

    {
      title: <p>Postal Code</p>,
      dataIndex: "postalCode",
      width: 150,
      // align: "center",
    },

    {
      title: <p>Country Code</p>,
      dataIndex: "countryCode",
      width: 150,
      // align: "center",
    },
    {
      title: <p>Created Date</p>,
      dataIndex: "createdAt",
      width: 200,
      // align: "center",
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
      width: 200, // Set the width here
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
              onClick={() => {
                console.log("delete");
              }}
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
      label: "Manage Admins",
      link: "/admin/manage-admins",
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
                          value: "name",
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
                    text={"Add Country"}
                    click={() => setOpenDrawer(true)}
                  />
                </Col>
              </Row>
            </div>

            <div className="my-4">
              <DisplayTable
                loading={tableLoading}
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
        open={openDrawer}
        setOpen={setOpenDrawer}
        // valueObj={countryInfo}
        // valueFn={setCountryInfo}
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

export default ManageCountryPage;
