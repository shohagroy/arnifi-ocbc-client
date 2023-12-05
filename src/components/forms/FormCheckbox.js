"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Checkbox, Flex, Radio } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import Image from "next/image";
import { InfoCircleOutlined } from "@ant-design/icons";

const FormCheckbox = ({
  name,
  value,
  options,
  handleChange,
  id,
  validation,
  disabled,
  label,
  required,
  onChange,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? (
        <p className="font-primary text-xl py-4">
          {required ? (
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          ) : null}
          {label}
        </p>
      ) : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Checkbox
            checked={value}
            onChange={handleChange ? handleChange : onChange}
          >
            Is Required
          </Checkbox>
        )}
      />

      {errorMessage && (
        <div style={{ color: "#F15656" }}>
          <InfoCircleOutlined />
          <small className="mx-1">{errorMessage}</small>
        </div>
      )}
    </>
  );
};

export default FormCheckbox;
