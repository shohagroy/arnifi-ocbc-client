import { Card, Flex } from "antd";
import React from "react";

const AttractionLoader = ({ count }) => {
  return (
    <div>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="animate-pulse my-4">
          <Card className="shadow-sm ">
            <Flex>
              <div className="w-[400px] bg-gray-200  rounded-md">
                <div className=" h-full w-full rounded bg-gray-200"></div>
              </div>

              <div className="w-full  pl-3">
                <div className=" h-3 w-[200px] rounded bg-gray-200"></div>
                <div className=" h-6 w-full my-3 rounded bg-gray-200"></div>
                <div className=" h-3 w-full rounded bg-gray-200"></div>

                <div className="mt-2">
                  <div className=" h-4 w-[150px] rounded bg-gray-200"></div>
                  <Flex justify="space-between" align="start">
                    <div>
                      <div className=" h-5 w-[200px] my-3 rounded bg-gray-200"></div>
                      <div className=" h-5 w-full rounded bg-gray-200"></div>
                    </div>
                    <div>
                      <Flex justify="end">
                        <div className=" h-5 w-[100px] rounded bg-gray-200"></div>
                      </Flex>
                      <div className=" h-6 my-3 w-[200px] rounded bg-gray-200"></div>
                    </div>
                  </Flex>
                </div>
              </div>
            </Flex>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AttractionLoader;
