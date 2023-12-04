"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Flex, Radio } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import Image from "next/image";
import { InfoCircleOutlined } from "@ant-design/icons";
import FemaleImg from "../../assets/female-icon.png";
import MaleImg from "../../assets/male-icon.png";

const FormGenderRadio = ({
  name,
  value,
  options,
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

  const genderOptions = [
    {
      label: "Male",
      value: "male",
      icon: MaleImg,
    },
    {
      label: "Female",
      value: "female",
      icon: FemaleImg,
    },
  ];

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
          <Radio.Group
            name={name}
            onChange={onChange}
            value={value ? value : field.value}
            buttonStyle="solid"
            optionType="button"
            {...field}
          >
            {genderOptions?.map((item) => (
              <Radio
                key={item?.label}
                className="px-[20px] h-[50px] py-[12px] font-bold"
                value={item.value}
              >
                <Flex>
                  {item?.icon && (
                    <Image
                      src={item?.icon}
                      alt={item?.value}
                      height={30}
                      width={30}
                    />
                  )}
                  <p className="px-2"> {item?.label}</p>
                </Flex>
              </Radio>
            ))}
          </Radio.Group>
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

export default FormGenderRadio;
