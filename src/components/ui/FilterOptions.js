"use client";

import { Button, Card, Flex } from "antd";
import React from "react";
import CheckBoxFilds from "./CheckBoxFilds";
import { useGetAllCategoryDataQuery } from "@/redux/features/category/categoryApi";
import { useGetAllCountryDataQuery } from "@/redux/features/country/countryApi";
import { useGetAllCitiesDataQuery } from "@/redux/features/city/cityAPi";

const FilterOptions = ({ setCategoryId, setCountryId, setCityId }) => {
  const filterHandelar = (search) => {
    if (search.name === "categoryId" && search.check) {
      setCategoryId(search.id);
    } else if (search.name === "countryId" && search.check) {
      setCountryId(search.id);
    } else if (search.name === "cityId" && search.check) {
      setCityId(search.id);
    }
  };

  const { data: categoryData, isLoading: categoryLoading } =
    useGetAllCategoryDataQuery();

  const { data: countryData, isLoading: countryLoading } =
    useGetAllCountryDataQuery();

  const { data: cityData, isLoading: cityLoading } = useGetAllCitiesDataQuery();

  return (
    <Card
      title={
        <Flex justify="space-between" align="center">
          <p className="font-bold">Filter</p>
          <Button type="link">Clear</Button>
        </Flex>
      }
      className="shadow-md mt-4"
    >
      <CheckBoxFilds
        onChange={filterHandelar}
        lebel={"category"}
        name={"categoryId"}
        data={categoryData?.data}
        loading={categoryLoading}
      />
      <CheckBoxFilds
        onChange={filterHandelar}
        lebel={"country"}
        name={"countryId"}
        data={countryData?.data}
        loading={countryLoading}
      />
      <CheckBoxFilds
        onChange={filterHandelar}
        lebel={"city"}
        name={"cityId"}
        data={cityData?.data}
        loading={cityLoading}
      />
    </Card>
  );
};

export default FilterOptions;
