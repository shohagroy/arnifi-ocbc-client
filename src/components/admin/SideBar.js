"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  ProfileOutlined,
  DashboardFilled,
  UserSwitchOutlined,
  SettingFilled,
  ToolFilled,
  PieChartFilled,
  GlobalOutlined,
  IdcardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import LogoLarge from "../../assets/Primary_Logo-dark.png";
import LogoSmall from "../../assets/logo.png";
import Image from "next/image";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = [
    {
      label: <Link href={`/admin`}>Dashboard</Link>,
      key: "Dashboard",
      icon: <DashboardFilled />,
    },
    {
      label: <Link href={`/admin/manage-users`}>Manage Users</Link>,
      key: "/admin/manage-users",
      icon: <UserSwitchOutlined />,
    },
    {
      label: <Link href={`/admin/manage-wills`}>Manage Wills</Link>,
      key: "/admin/manage-wills",
      icon: <FileTextOutlined />,
    },
    {
      label: "Software Setting",
      key: "Software Setting",
      icon: <SettingFilled />,
      children: [
        {
          label: <Link href={`/admin/manage-countries`}>Manage Countries</Link>,
          key: `/admin/manage-countries`,
          icon: <GlobalOutlined />,
        },
        // {
        //   label: <Link href={`/admin/manage-cities`}>Manage Cities</Link>,
        //   key: `/admin/manage-cities`,
        // },
        {
          label: <Link href={`/admin/manage-idtypes`}>Manage ID Types</Link>,
          key: `/admin/manage-idtypes`,
          icon: <IdcardOutlined />,
        },
      ],
    },
    {
      label: "Website Setting",
      key: "Website Setting",
      icon: <ToolFilled />,
      children: [
        {
          label: <Link href={`/admin`}>Banar</Link>,
          key: `/admin`,
        },
        ,
      ],
    },
    {
      label: "Reports",
      key: "Reports",
      icon: <PieChartFilled />,
    },
    {
      label: <Link href={"/admin"}>Manage Profile</Link>,
      key: "profile",
      icon: <ProfileOutlined />,
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={300}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="text-center my-4 duration-300">
        {collapsed ? (
          <Image
            height={70}
            src={LogoSmall}
            alt="Arnifi"
            className="duration-500"
          />
        ) : (
          <Image
            height={70}
            src={LogoLarge}
            alt="Arnifi"
            className="duration-300"
          />
        )}
      </div>

      <Menu
        theme="dark"
        className="font-primary"
        defaultSelectedKeys={["3"]}
        mode="inline"
        items={sidebarItems}
      ></Menu>
    </Sider>
  );
};

export default SideBar;
