import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const footerMenu = [
    {
      key: 1,
      lebel: "Conditions of Access",
      link: "/",
    },
    {
      key: 2,
      lebel: "Policies",
      link: "/",
    },
    {
      key: 3,
      lebel: "Notices",
      link: "/",
    },

    {
      key: 4,
      lebel: "Security",
      link: "/",
    },
  ];

  const contactIcon = [
    {
      key: 1,
      icon: <FacebookOutlined />,
      link: "/",
    },
    {
      key: 2,
      icon: <TwitterOutlined />,
      link: "/",
    },
    {
      key: 3,
      icon: <YoutubeOutlined />,
      link: "/",
    },
  ];
  return (
    <footer
      style={{
        borderTop: "3px solid #3955D9",
      }}
    >
      <div className="max-w-5xl mx-auto p-3 flex justify-between ">
        <div className="flex">
          <ul className="flex  items-center">
            {footerMenu.map((item) => {
              return (
                <li className="" key={item.key}>
                  <a
                    className="px-2 text-sm hover:border-none text-primary"
                    href={item.link}
                  >
                    {item.lebel}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mx-2">
            {contactIcon?.map((icon) => (
              <a className="px-2 text-primary" href={icon.link} key={icon.key}>
                {icon.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[12px]">
            © Copyright 2004 – 2017 – OCBC Bank. All Rights Reserved. Co. Reg.
            No.: 193200032W
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
