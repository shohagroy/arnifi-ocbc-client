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
      label: <Link href={`/admin/manage-admins`}>Manage Admins</Link>,
      key: "Manage Admins",
      icon: <UserSwitchOutlined />,
    },
    {
      label: "Software Setting",
      key: "Software Setting",
      icon: <SettingFilled />,
      children: [
        {
          label: <Link href={`/admin/manage-countries`}>Manage Countries</Link>,
          key: `/adminmanage-countries`,
        },

        {
          label: <Link href={`/admin/manage-city`}>Manage City</Link>,
          key: `/admin/manage-city`,
        },
        {
          label: <Link href={`/admin/manage-idtypes`}>Manage ID Types</Link>,
          key: `/admin/manage-idtypes`,
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
        {/* <Image
          height={70}
          src={collapsed ? LogoSmall : LogoLarge}
          alt="Arnifi"
          className="duration-300"
        /> */}
      </div>

      <Menu
        theme="dark"
        className="font-primary"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems}
      ></Menu>
    </Sider>
  );
};

export default SideBar;
