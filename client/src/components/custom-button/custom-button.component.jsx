import React from "react";

const CustomButton = ({ isHeroButton, children, ...props }) => {
  return (
    <button className={`${isHeroButton ? "hero-button" : ""} `} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
