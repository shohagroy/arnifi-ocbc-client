"use client";

import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";

const FormExplore = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [subStep, setSubStep] = useState(0);

  const steps = [
    {
      title: "First",
      content: "First-content",
    },
    {
      title: "Second",
      content: [
        <div
          key="sub-step-1"
          style={{ display: subStep === 0 ? "block" : "none" }}
        >
          <p>Second-content - Sub Step 1</p>
        </div>,
        <div
          key="sub-step-2"
          style={{ display: subStep === 1 ? "block" : "none" }}
        >
          <p>Second-content - Sub Step 2</p>
        </div>,
      ],
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];

  const next = () => {
    if (subStep < 1) {
      setSubStep(subStep + 1);
    } else {
      setCurrent(current + 1);
      setSubStep(0);
    }
  };

  const prev = () => {
    if (subStep > 0) {
      setSubStep(subStep - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            {subStep === 0 ? "Next - Sub Step 1" : "Complete"}
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={prev}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default FormExplore;
