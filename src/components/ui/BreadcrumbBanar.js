"use client";

import { Breadcrumb, Flex } from "antd";
import Link from "next/link";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";

const bg =
  "https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/bg-banner-home2-01.jpg";

const BreadcrumbBanar = ({ breadItems = [], name, tittle }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "400px",
        width: "100%",
      }}
      className="h-[200px]  lg:h-[400px]"
    >
      <Flex className="bg-black/40 w-full h-full text-white justify-center items-center">
        <div className="flex flex-col items-center">
          <p>Travel Point | {name}</p>
          <h2 className=" text-2xl lg:text-5xl font-bold">{tittle}</h2>
          <Breadcrumb
            className="bg-white px-6 py-1 mt-4 rounded-md"
            separator=">"
            items={[
              {
                title: (
                  <Link href={"/"}>
                    <Flex>
                      <HomeOutlined /> <p className="mx-2">Home</p>
                    </Flex>
                  </Link>
                ),
              },
              //   {
              //     title: (
              //       <Link href={"/"}>
              //         <Flex>
              //           <HomeOutlined /> <p className="mx-2">Home</p>
              //         </Flex>
              //       </Link>
              //     ),
              //   },

              ...breadItems,
            ]}
          />
        </div>
      </Flex>
      {/* <img src={bg} alt="image" /> */}
    </div>
  );
};

export default BreadcrumbBanar;
