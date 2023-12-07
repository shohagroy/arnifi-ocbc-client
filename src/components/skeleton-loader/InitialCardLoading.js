import { Card } from "antd";
import React from "react";
import CardHeadLoder from "./CardHeadLoder";
import CardFormLoader from "./CardFormLoader";

const InitialCardLoading = () => {
  return (
    <div className="max-w-5xl mx-auto min-h-[80vh]">
      <CardHeadLoder />
      <CardFormLoader />
    </div>
  );
};

export default InitialCardLoading;
