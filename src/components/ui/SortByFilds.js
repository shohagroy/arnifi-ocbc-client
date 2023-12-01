import { Button, Flex } from "antd";
import React from "react";

const SortByFilds = ({ data, setFn, value }) => {
  return (
    <Flex className="w-full bg-gray-100 rounded-3xl p-3">
      {data?.map((item) => (
        <Button
          key={item?.title}
          onClick={() => setFn(item?.value)}
          className={`w-full rounded-3xl  ${
            value === item?.value ? "" : "text-black "
          }`}
          type={value === item?.value ? "primary" : "link"}
        >
          {item?.title}
        </Button>
      ))}
    </Flex>
  );
};

export default SortByFilds;
