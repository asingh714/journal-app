import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ isShort, handleChange, ...otherProps }) => {
  return (
    <input className={`form-input ${isShort ? "short-input" : ""}`} onChange={handleChange} {...otherProps} />
  );
};

export default FormInput;
