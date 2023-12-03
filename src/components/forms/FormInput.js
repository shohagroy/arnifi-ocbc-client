"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { WarningOutlined } from "@ant-design/icons";

const FormInput = ({
  name,
  type,
  size = "large",
  value,
  id,
  placeholder,
  validation,
  disabled,
  label,
  required,
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
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              disabled={disabled}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              style={errorMessage && { border: "1.5px solid #F15656" }}
              className="focus:border-primary h-[50px] px-[20px] py-[12px]"
              disabled={disabled}
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />

      {errorMessage && (
        <div style={{ color: "#F15656" }}>
          <WarningOutlined />
          <small className="mx-1">{errorMessage}</small>
        </div>
      )}
    </>
  );
};

export default FormInput;
