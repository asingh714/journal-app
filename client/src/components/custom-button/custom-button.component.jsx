import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  isWideButton,
  isRounded,
  isDelete,
  isEdit,
  isBigEdit,
  isSuperWide,
  children,
  ...props
}) => {
  return (
    <button
      className={`button ${isDelete ? "delete-button" : ""} ${
        isEdit ? "edit-button" : ""
      } ${isBigEdit ? "big-edit-button" : ""} ${
        isWideButton ? "wide-button" : ""
      } ${isRounded ? "rounded-button" : ""}
        ${isSuperWide ? "super-wide-button" : ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
