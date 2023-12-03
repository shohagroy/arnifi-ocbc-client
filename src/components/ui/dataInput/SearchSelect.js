import { Select } from "antd";
import React from "react";

const SearchSelect = ({ handleChange, options, optionsLoading, value }) => {
  return (
    <div>
      <Select
        className={`focus:border-primary h-[50px] w-full text-xl`}
        showSearch={true}
        loading={optionsLoading}
        onChange={handleChange}
        value={value}
        size={"large"}
        options={options}
      />
    </div>
  );
};

export default SearchSelect;
