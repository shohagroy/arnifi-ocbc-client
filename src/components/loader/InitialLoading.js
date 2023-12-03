import { Row, Space, Spin } from "antd";
import React from "react";

const InitialLoading = () => {
  return (
    <Row justify="center" align="middle" className="w-full h-full">
      <Space>
        <div>
          <Spin size="large"></Spin>
        </div>
      </Space>
    </Row>
  );
};

export default InitialLoading;
