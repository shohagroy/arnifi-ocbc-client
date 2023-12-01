import React from "react";
import { Pagination } from "antd";

const PaginationOprions = ({ meta, setPage, page, size, setSize }) => {
  return (
    <Pagination
      className="w-full flex justify-center items-center p-2 rounded-md shadow-md border bg-gray-100"
      total={meta?.total}
      current={page} // Use 'current' to control the current page
      pageSize={size} // Use 'pageSize' to control the items per page
      onChange={setPage} // Pass the 'setPage' function for page changes
      showSizeChanger
      onShowSizeChange={setSize} // Pass the 'setSize' function for changing items per page
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      pageSizeOptions={[10, 15, 20, 30]}
    />
  );
};

export default PaginationOprions;
