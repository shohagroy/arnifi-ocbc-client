import React from "react";

const FilterLoader = () => {
  return (
    <div className="animate-pulse ">
      <div className="flex-1 py-2 space-y-3">
        <div className=" h-3 w-[150px] rounded bg-gray-200"></div>
        {[...Array(6)].map((_, i) => (
          <div key={i} className=" h-3 w-[350px] rounded bg-gray-200"></div>
        ))}
      </div>
    </div>
  );
};

export default FilterLoader;
