import { Card, Flex } from "antd";
import React from "react";

const CardLoader = () => {
  return (
    <div className="animate-pulse w-full ">
      <Card className="shadow-sm ">
        <div className=" h-[150px] w-full rounded bg-gray-200"></div>
        <div className="my-4">
          <div className=" h-4 w-[200px] rounded bg-gray-200"></div>
          <div className=" h-4 w-[100px] mt-2 rounded bg-gray-200"></div>
          <div className=" h-4 w-full mt-2 rounded bg-gray-200"></div>
          <div className=" h-4 w-full mt-2 rounded bg-gray-200"></div>
        </div>
      </Card>
    </div>
  );
};

export default CardLoader;
