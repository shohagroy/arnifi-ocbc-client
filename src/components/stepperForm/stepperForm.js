"use client";

import React, { useEffect, useState } from "react";
import { Button, Steps } from "antd";
import Form from "../forms/From";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { useSelector } from "react-redux";
import willTemp from "@/template/will";
import savePdfFile from "@/utils/savePdfFile";
import { useRouter } from "next/navigation";

const StepperForm = ({
  steps,
  persistKey,
  setAssetStep,
  assetStep,
  setAdditional,
  additional,
}) => {
  const [current, setCurrent] = useState(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step"))?.step)
      : 0
  );

  const navigation = useRouter();
  const [loading, setLoading] = useState(false);

  const [savedValues, setSavedValues] = useState(
    !!getFromLocalStorage(persistKey)
      ? JSON.parse(getFromLocalStorage(persistKey))
      : ""
  );

  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);

  const { validator, shareError } = useSelector((state) => state.resolver);

  const prev = () => {
    if (current === 3 && assetStep > 1) {
      setToLocalStorage("assetStep", JSON.stringify(assetStep - 1));
      setAssetStep(assetStep - 1);
    } else if (current === 4 && additional > 1) {
      setToLocalStorage("additional", JSON.stringify(additional - 1));
      setAdditional(additional - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const onSubmit = (data) => {
    if (current === 3 && assetStep === 1) {
      setToLocalStorage("assetStep", JSON.stringify(assetStep + 1));
      setAssetStep(assetStep + 1);
    } else if (current === 3 && assetStep > 1 && shareError) {
      return;
    } else if (current === 4 && additional === 1) {
      setToLocalStorage("additional", JSON.stringify(additional + 1));
      setAdditional(additional + 1);
    } else {
      setCurrent(current + 1);
    }

    setSavedValues(data);
  };

  const pdfDownloadHandelar = async () => {
    setLoading(true);
    const htmlTemplate = willTemp(savedValues);
    await savePdfFile(htmlTemplate);

    navigation.push("/");
    setLoading(false);
    localStorage.clear();
  };

  return (
    <div className="p-6">
      <Form
        defaultValues={savedValues}
        persistKey={persistKey}
        submitHandler={onSubmit}
        resolver={validator && yupResolver(validator)}
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
            <Button
              loading={loading}
              className="bg-primary font-bold px-10"
              size="large"
              type="primary"
              onClick={pdfDownloadHandelar}
            >
              {loading ? "Please wait.." : "Download PDF"}
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};
export default StepperForm;
