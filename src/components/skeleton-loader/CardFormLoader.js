import { Card } from "antd";
import React from "react";

const CardFormLoader = () => {
  return (
    <div className="pb-10">
      <div className="px-4 ">
        <div className={"my-6  animate-pulse"}>
          <div className="w-[80%] h-6 rounded bg-gray-300 my-4"></div>
          <div className="w-1/2 h-6 rounded bg-gray-300 my-4"></div>
          <div className="w-[90%] h-3 rounded bg-gray-300 my-4"></div>
          <div className="w-[70%] h-3 rounded bg-gray-300 my-4"></div>
        </div>

        <Card className=" ">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="my-4">
                  <div className="w-1/2 h-4 rounded bg-gray-300"></div>
                  <div className="w-full h-6 rounded my-3 bg-gray-300"></div>
                </div>
              ))}
            </div>

            <hr className="border-[#EEEEEE] col-span-2 my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="my-6 grid  grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="w-1/3 h-4 my-3 rounded bg-gray-300"></div>
                  <div className="w-full h-6 rounded bg-gray-300"></div>
                </div>

                <div className="col-span-2">
                  <div className="w-full h-6 rounded  bg-gray-300"></div>
                </div>

                <div className="">
                  <div className="w-full h-6 rounded  bg-gray-300"></div>
                </div>

                <div className="">
                  <div className="w-full h-6 rounded  bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardFormLoader;
