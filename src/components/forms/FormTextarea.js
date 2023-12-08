"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { InfoCircleOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const FormTextarea = ({
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
        render={({ field }) => (
          <TextArea
            style={errorMessage && { border: "1.5px solid #F15656" }}
            className="focus:border-primary  px-[20px] py-[12px]"
            disabled={disabled}
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value}
            rows={6}
            maxLength={6}
          />
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

export default FormTextarea;
