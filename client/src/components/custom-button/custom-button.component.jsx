import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ isWideButton, isRounded, isDelete, isEdit, children, ...props }) => {
  return (
    <button
      className={`button ${isDelete ? "delete-button" : ""} ${isEdit ? "edit-button" : ""} ${isWideButton ? "wide-button" : ""} ${
        isRounded ? "rounded-button" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
