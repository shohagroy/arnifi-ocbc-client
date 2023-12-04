"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { InfoCircleOutlined } from "@ant-design/icons";

const FormSelectField = ({
  name,
  size = "large",
  value,
  placeholder = "Select",
  options,
  label,
  defaultValue,
  showSearch,
  required,
  loading,
  handleChange,
  disabled,
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
          <Select
            style={
              errorMessage && {
                border: "1.5px solid #F15656",
                borderRadius: "10px",
              }
            }
            className={`focus:border-primary h-[50px] w-full`}
            disabled={disabled}
            showSearch={showSearch}
            loading={loading}
            onChange={handleChange ? handleChange : onChange}
            size={size}
            options={options}
            value={value}
            placeholder={placeholder}
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

export default FormSelectField;
