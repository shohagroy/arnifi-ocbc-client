import React from "react";

const CardHeadLoder = () => {
  return (
    <div className="p-4 animate-pulse ">
      <div className="flex justify-between items-center">
        {[...Array(5)]?.map((_, i) => (
          <div key={i} className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="mx-2 flex-shrink-0 w-28 h-3 rounded-full bg-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHeadLoder;
