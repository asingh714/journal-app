import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ isShort, isLong, handleChange, ...otherProps }) => {
  return (
    <input className={`form-input ${isShort ? "short-input" : ""} ${isLong ? "long-input" : ""}`} onChange={handleChange} {...otherProps} />
  );
};

export default FormInput;
