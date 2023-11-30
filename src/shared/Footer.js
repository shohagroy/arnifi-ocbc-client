import React from "react";
import {
  FacebookFilled,
  TwitterOutlined,
  LinkedinFilled,
} from "@ant-design/icons"; //<LinkedinFilled />

import Logo from "../assets/Primary_Logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const contactIcon = [
    {
      key: 1,
      icon: <FacebookFilled />,
      link: "https://www.facebook.com/arnifiofficial",
    },
    {
      key: 2,
      icon: <TwitterOutlined />,
      link: "https://twitter.com/i/flow/login?redirect_after_login=%2Farnifiofficial",
    },
    {
      key: 3,
      icon: <LinkedinFilled />,
      link: "https://www.linkedin.com/company/arnifiofficial",
    },
  ];

  const businessCountry = [
    {
      name: "Soudi Arabia",
      link: "https://www.arnifi.com/saudiArabia",
      icon: "",
    },
    {
      name: "UAE",
      link: "https://www.arnifi.com/saudiArabia",
      icon: "",
    },
    {
      name: "IFZA",
      link: "https://www.arnifi.com/saudiArabia",
      icon: "",
    },
    {
      name: "Maydan",
      link: "https://www.arnifi.com/saudiArabia",
      icon: "",
    },
    {
      name: "Shama",
      link: "https://www.arnifi.com/saudiArabia",
      icon: "",
    },
    {
      name: "Rakex",
      link: "https://www.arnifi.com/saudiArabia",
      icon: "",
    },
  ];

  return (
    <footer className="py-6 bg-white ">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <Link href={"/"}>
              <Image src={Logo} alt="Arnifi" width={150} />
            </Link>
          </div>

          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <div className="w-full h-full">
              <p className="w-[350px] text-sm text-black/60">
                Arnifi provides customized and tailored services around the
                world who aims to expand their businesses across the Middle
                East.
              </p>

              <div className="mt-12">
                {contactIcon?.map((icon) => (
                  <a
                    className="p-2 text-black text-xl"
                    href={icon.link}
                    key={icon.key}
                    target="_"
                  >
                    {icon.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-full md:col-span-6">
            <div className="flex justify-between items-start">
              <div className="w-full">
                <p className="pb-1  text-sm text-black/60">
                  START YOUR BUSINESS
                </p>
                <ul>
                  {businessCountry?.map((item) => (
                    <li key={item?.name}>
                      <a
                        rel="noopener noreferrer"
                        href={item?.link}
                        target="_"
                        className="hover:text-primary text-black duration-200"
                      >
                        {item?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full">
                <p className="pb-1  text-sm text-black/60">CONTACT</p>
                <p>hello@arnifi.com</p>
                <p>+971 58 505 4423</p>
              </div>

              <div className="w-full">
                <p className="pb-1  text-sm text-black/60">LOCATION</p>
                <p>Floor 9, Building 4, One central, Dubai</p>
                <a
                  rel="noopener noreferrer"
                  href={"https://maps.app.goo.gl/vxSp7XmqiXtXXQ5NA"}
                  target="_"
                  className="hover:text-primary text-black duration-200"
                >
                  View on map
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div>
            <span>©2023 </span> <a href="arnifi.com">Arnifi.com</a>
          </div>
          <div>
            <a
              className="text-primary"
              rel="noopener noreferrer"
              href="https://www.arnifi.com/privacypolicy"
              target="_"
            >
              <span>Privacy policy</span>
            </a>
            <span className="mx-2"> | </span>
            <a
              className="text-primary"
              rel="noopener noreferrer"
              href="https://www.arnifi.com/tnc"
              target="_"
            >
              <span>Terms of service</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
