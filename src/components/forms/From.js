"use client";

import { setFormData } from "@/redux/features/formsData/formsDataSlice";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();
  const { handleSubmit, reset } = methods;

  const fillFormData = methods.watch();

  const formsData = { ...fillFormData };

  useEffect(() => {
    setToLocalStorage(persistKey, JSON.stringify(fillFormData));
    // const formData = !!getFromLocalStorage(persistKey)
    //   ? JSON.parse(getFromLocalStorage(persistKey))
    //   : {};
    // dispatch(setFormData(formData));
  }, [persistKey, fillFormData, dispatch]);

  useEffect(() => {
    const formData = !!getFromLocalStorage(persistKey)
      ? JSON.parse(getFromLocalStorage(persistKey))
      : {};
    dispatch(setFormData(formData));
  }, [persistKey, dispatch, fillFormData]);

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
