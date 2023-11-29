"use client";

import { DatePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

const FormDatePicker = ({ name, label, onChange, size = "large" }) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const handleOnChange = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, new Date(dateString).toISOString());
  };

  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            defaultValue={dayjs(field.value) || Date.now()}
            size={size}
            onChange={handleOnChange}
            style={{ width: "100%" }}
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </div>
  );
};

export default FormDatePicker;
