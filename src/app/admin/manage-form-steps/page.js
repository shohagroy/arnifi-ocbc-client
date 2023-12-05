"use client";

import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import DisplayTable from "@/components/table/DisplayTable";
import { Button, Card, Col, Row, Select, message } from "antd";
import React, { useState } from "react";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks/useDebounced";
import AddButton from "../../../components/ui/button/AddButton";
import SearchInput from "@/components/ui/dataInput/SearchInput";
import dayjs from "dayjs";
import DeleteInfoModal from "@/components/modal/DeleteInfoModal";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import SearchSelect from "@/components/ui/dataInput/SearchSelect";
import FormStepDrawer from "@/components/drawer/FormStepDrawer";
import {
  useDeleteFormStepMutation,
  useGetAllFormStepsQuery,
} from "@/redux/features/formStep/formStepApi";

const ManageFormStepPage = () => {
  const [formStepInfo, setFormStepInfo] = useState({});
  const [messageApi, contextHolder] = message.useMessage();

  // filtar
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [sortBy, setSortBy] = useState("tittle");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [countryId, setCountryId] = useState("");

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

  if (countryId) {
    query["countryId"] = countryId;
  }

  const { data, isLoading: tableLoading } = useGetAllFormStepsQuery({
    ...query,
  });
  const { meta } = data || {};

  const formStepsDara = data?.data?.data.map((item, i) => {
    return {
      key: item?.id,
      sl: page * size - size + i + 1,
      tittle: item?.tittle,
      country: item?.country?.name,
      countryCode: item?.country?.countryCode,
      countryId: item?.countryId,
      createdAt: dayjs(item?.createdAt).format("MMM D, YYYY hh:mm A"),
    };
  });

  const { data: countriesData, isLoading: countryLoading } =
    useGetAllCountryDataQuery();

  const countriesOptions =
    countriesData?.data?.data.map((item) => {
      return {
        label: item?.name,
        value: item?.id,
      };
    }) || [];

  // countriesOptions?.unshift({
  //   label: "All Countries",
  //   value: "",
  // });

  const [deleteFormStep, { isLoading: deleteLoading }] =
    useDeleteFormStepMutation();

  const openModalHandelar = (data) => {
    const info = {
      tittle: "Are you sure delete this ID Types?",
      details: (
        <p className="font-primary">
          Tittle: <strong>{data?.tittle}</strong>
        </p>
      ),
    };

    setFormStepInfo(data);
    setModalText(info);
    setOpenModal(true);
  };

  const deleteHandelar = async () => {
    const result = await deleteFormStep(formStepInfo?.key).unwrap();
    if (result?.data?.success) {
      messageApi.open({
        type: "success",
        content: result?.data?.message || "Id Type Delete Successfully!",
      });
      setOpenModal(false);
      setFormStepInfo({
        tittle: "",
        countryId: "",
      });
    } else {
      messageApi.open({
        type: "error",
        content: result?.message || "Something went wrong!",
      });
    }
  };

  const updateHandelar = (data) => {
    setFormStepInfo(data);
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
      title: <p>ID Type Tittle</p>,
      dataIndex: "tittle",
      width: 250,
      // align: "center",
    },

    {
      title: <p>Country Name</p>,
      dataIndex: "country",
      width: 150,
      // align: "center",
    },

    {
      title: <p>Country Code</p>,
      dataIndex: "countryCode",
      width: 120,
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
      label: <p href={"/admin"}>Admin</p>,
      link: "/admin",
    },
    {
      label: "Manage Form Step",
      link: "/admin/manage-form-step",
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
                <Col span={6}>
                  <SearchInput
                    placeholder={"search..."}
                    change={(e) => setSearchTerm(e.target.value)}
                  />
                </Col>
                <Col span={6}>
                  <SearchSelect
                    value={countryId}
                    loading={countryLoading}
                    options={[
                      { label: "All Countries", value: "" },
                      ...countriesOptions,
                    ]}
                    handleChange={(e) => setCountryId(e)}
                  />
                </Col>
                <Col span={8} className="flex items-center">
                  <div className="flex items-center font-primary text-lg">
                    <p>Sort by:</p>
                    <Select
                      onChange={(e) => setSortBy(e)}
                      value={sortBy}
                      className={`focus:border-primary h-[50px] w-[100px] ml-3`}
                      size={"large"}
                      options={[
                        {
                          label: "Tittle",
                          value: "tittle",
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
                      className={`focus:border-primary h-[50px] w-[150px] ml-3`}
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
                    text={"Add Step"}
                    click={() => setOpenDrawer(true)}
                  />
                </Col>
              </Row>
            </div>

            <div className="my-4">
              <DisplayTable
                loading={tableLoading}
                columns={columns}
                dataSource={formStepsDara}
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

      <FormStepDrawer
        open={openDrawer}
        setOpen={setOpenDrawer}
        data={formStepInfo}
        setData={setFormStepInfo}
        modalText={modalText}
        setModalText={setModalText}
        options={countriesOptions}
        optionsLoading={countryLoading}
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

export default ManageFormStepPage;
