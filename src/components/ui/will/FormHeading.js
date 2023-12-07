import React from "react";

const FormHeading = ({ heading, optional }) => {
  return (
    <div className="pt-10 mb-6 ">
      {optional && <p>(Optional)</p>}
      <p className="font-bold text-3xl">{heading}</p>
    </div>
  );
};

export default FormHeading;
