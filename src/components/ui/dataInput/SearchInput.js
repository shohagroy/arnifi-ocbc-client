import { Button, Input } from "antd";
import React from "react";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

const SearchInput = ({ change, placeholder }) => {
  return (
    <div>
      <Input
        prefix={<SearchOutlined />}
        suffix={
          <Button type="link" className="text-gray-500 ">
            <CloseOutlined />
          </Button>
        }
        onChange={change}
        placeholder={placeholder}
        className="text-xl font-semibold h-[50px]"
        size="large"
      />
    </div>
  );
};

export default SearchInput;
