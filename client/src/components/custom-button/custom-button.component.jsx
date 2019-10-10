import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ isHeroButton, isRounded, children, ...props }) => {
  return (
    <button
      className={`button ${isHeroButton ? "hero-button" : ""} ${
        isRounded ? "rounded-button" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
