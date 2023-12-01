"use client";

import React from "react";
import { Button, Dropdown, Flex } from "antd";

import Avatar from "antd/es/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import { userRole } from "@/constans/userRole";
import { removeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const AdminHeader = ({ avatar, role, name }) => {
  const router = useRouter();
  const logOutHandler = () => {
    removeUserInfo("accessToken");
    router.push("/login");
  };

  const items = [
    {
      key: "1",
      label: (
        <Button
          onClick={logOutHandler}
          type="primary"
          danger
          style={{ width: "100%", margin: "0px 0" }}
        >
          Log Out
        </Button>
      ),
    },
  ];
  return (
    <div className="bg-[#001529] shadow-md text-white">
      <div className="max-w-7xl mx-auto ">
        <Flex className="h-[7.5vh]" gap="middle" justify="end" align="center">
          <Flex justify="center" align="center">
            <div className="text-right mr-4">
              <h3 className="text-md">{name || ""}</h3>
              <p>
                <small>
                  {role === userRole.SUPER_ADMIN ? "Super Admin" : "Admin"}
                </small>
              </p>
            </div>

            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              placement="bottomRight"
              arrow
            >
              <Avatar
                style={{ cursor: "pointer" }}
                onClick={(e) => e.preventDefault()}
                size="large"
                src={avatar}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default AdminHeader;
