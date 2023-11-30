"use client";

import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import Form from "../forms/From";
import Link from "next/link";
import { generateFormValidator } from "@/schemas/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { getFromLocalStorage } from "@/utils/local-storage";

const StepperForm = ({ steps, formData, persistKey }) => {
  const [current, setCurrent] = useState(0);
  const [savedValues, setSavedValues] = useState(
    JSON.parse(getFromLocalStorage(persistKey)) || ""
  );

  const resolver = generateFormValidator(formData);

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const onSubmit = (data) => {
    // next();
    setCurrent(current + 1);
    console.log(data, "submit");
  };

  return (
    <div className="p-6">
      <Form
        defaultValues={savedValues}
        persistKey={persistKey}
        submitHandler={onSubmit}
        resolver={yupResolver(resolver)}
      >
        <Steps current={current} items={items} />
        <div>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
            textAlign: "right",
          }}
        >
          {current > 0 && (
            <Link href={"/step"}>
              <Button
                className="bg-primary font-bold px-6 text-white"
                size="large"
                style={{
                  margin: "0 8px",
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            </Link>
          )}
          {current < steps.length - 1 && (
            // <Link href={"/step"}>
            //   <Button
            //     htmlType="submit"
            //     className="bg-primary font-bold px-10"
            //     size="large"
            //     type="primary"
            //     onClick={() => next()}
            //   >
            //     Next
            //   </Button>
            // </Link>
            <Button
              htmlType="submit"
              className="bg-primary font-bold px-10"
              size="large"
              type="primary"
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Link href={"/"}>
              <Button
                className="bg-primary font-bold px-10"
                size="large"
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Submit
              </Button>
            </Link>
          )}
        </div>
      </Form>
    </div>
  );
};
export default StepperForm;
