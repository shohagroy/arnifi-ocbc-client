import { Checkbox } from "antd";
import React, { useState } from "react";
import FilterLoader from "../skeleton-loader/FilterLoader";

const CheckBoxFilds = ({ lebel, onChange, data, loading, name }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const checkHandelar = (info) => {
    const data = JSON.parse(info);
    onChange(data);
    setSelectedValue(data.id);
  };

  return (
    <div className="mb-4 capitalize">
      {loading ? (
        <FilterLoader />
      ) : (
        <div>
          <p className="font-bold ">{lebel}</p>
          <Checkbox
            onChange={(e) =>
              checkHandelar(
                JSON.stringify({
                  name,
                  check: e.target.checked,
                  id: "",
                })
              )
            }
            checked={selectedValue === ""}
          >
            All {lebel}
          </Checkbox>
          {data.map((item, i) => (
            <div key={i}>
              <Checkbox
                onChange={(e) =>
                  checkHandelar(
                    JSON.stringify({
                      name,
                      check: e.target.checked,
                      id: item?.id,
                    })
                  )
                }
                checked={selectedValue === item?.id}
              >
                {item?.name}
              </Checkbox>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckBoxFilds;
