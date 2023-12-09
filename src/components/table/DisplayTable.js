"use client";
import React from "react";

import { Table } from "antd";
const DisplayTable = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 8, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
      }
    : false;

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default DisplayTable;
