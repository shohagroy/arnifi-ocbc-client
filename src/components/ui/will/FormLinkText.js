import React from "react";
import { QuestionCircleOutlined, PlusOutlined } from "@ant-design/icons";

const FormLinkText = ({ text, link }) => {
  return (
    <div className="py-6 ">
      <a className="text-primary flex" href={link}>
        <QuestionCircleOutlined />
        <p className="px-2">{text}</p>
      </a>
    </div>
  );
};

export default FormLinkText;
