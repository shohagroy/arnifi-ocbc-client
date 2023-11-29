import React from "react";
import Primary_Logo from "../assets/Primary_Logo.png";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-white ">
      <div className="max-w-5xl  p-3 mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Primary_Logo} alt="Arnifi" width={150} />
        </Link>
        <div>
          <Button type="link" className="text-lg  text-black">
            FAQ
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
