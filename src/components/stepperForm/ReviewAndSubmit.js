"use client";

import { Card } from "antd";
import React from "react";

const ReviewAndSubmit = () => {
  return (
    <div>
      <div>
        <div className="p-2">
          <div className="pt-10 font-semibold">
            <p>(Optional)</p>
            <h2 className="text-3xl">User Review and submit</h2>
          </div>

          <div className="text-sm py-6">
            <p className="">
              You may provide detailed ReviewAndSubmit for your preferred
              funeral arrangements. Funeral ReviewAndSubmit are not compulsory
              and may not be legally binding, but they will help your executor
              carry out your wishes.
            </p>
          </div>

          {/* <div className="py-6 ">
            <a className="text-primary flex" href="/">
              <QuestionCircleOutlined />
              <p className="px-2">More information about Gift of Monies</p>
            </a>
          </div> */}
        </div>
        <Card></Card>
      </div>

      <hr className="border-[#EEEEEE] col-span-2 my-10" />
    </div>
  );
};

export default ReviewAndSubmit;
