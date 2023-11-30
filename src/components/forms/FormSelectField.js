"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

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
            className="focus:border-primary h-[50px] "
            disabled={disabled}
            showSearch={showSearch}
            loading={loading}
            onChange={handleChange ? handleChange : onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormSelectField;
