import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ isShort, isLong, isSingle, handleChange, ...otherProps }) => {
  return (
    <input className={`form-input ${isShort ? "short-input" : ""} ${isLong ? "long-input" : ""} ${isSingle ? "single-input" : ""} `} onChange={handleChange} {...otherProps} />
  );
};

export default FormInput;
