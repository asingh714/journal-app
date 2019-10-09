import React from "react";

import CustomButton from "../../components/custom-button/custom-button.component";

import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="hero-section">
      <div className="hero-text-container">
        <h1 className="main-heading">
          Your morning and evening journal. <br /> Secure, free and online.
        </h1>
        <h2 className="sub-heading">
          A science back method to increase <br /> happiness and reduce stress.
        </h2>
        <CustomButton isHeroButton>Sign Up</CustomButton>
      </div>
    </div>
  );
};

export default Homepage;
