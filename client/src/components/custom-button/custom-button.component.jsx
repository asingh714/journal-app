import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ isHeroButton, isRounded, isDelete, isEdit, children, ...props }) => {
  return (
    <button
      className={`button ${isDelete ? "delete-button" : ""} ${isEdit ? "edit-button" : ""} ${isHeroButton ? "hero-button" : ""} ${
        isRounded ? "rounded-button" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
