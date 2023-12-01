import { Button } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons"; //<PlusOutlined />

const AddButton = ({ click, text }) => {
  return (
    <div>
      <Button
        icon={<PlusOutlined />}
        onClick={click}
        className="w-full h-[50px] bg-primary font-semibold font-primary"
        type="primary"
        size="large"
      >
        {text}
      </Button>
    </div>
  );
};

export default AddButton;
