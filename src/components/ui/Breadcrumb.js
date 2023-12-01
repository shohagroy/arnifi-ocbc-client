import React from "react";
import { Breadcrumb, Flex } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

const BreadCrumb = ({ breadItems = [] }) => {
  return (
    <div className="max-w-7xl mx-auto p-2 ">
      <Breadcrumb
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
  );
};

export default BreadCrumb;
