"use client";

import { setToLocalStorage } from "@/utils/local-storage";
import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

const Form = ({
  persistKey,
  children,
  submitHandler,
  defaultValues,
  resolver,
}) => {
  const formConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;
  const methods = useForm(formConfig);

  const { handleSubmit, reset } = methods;

  const fillFormData = methods.watch();

  useEffect(() => {
    setToLocalStorage(persistKey, JSON.stringify(fillFormData));
  }, [persistKey, fillFormData]);

  const onSubmit = (data) => {
    submitHandler(data);
    // reset();
  };

  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
