import React from "react";

import CustomButton from "../../components/custom-button/custom-button.component";

import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="hero-section">
      <h1>
        Your morning and evening journal. <br /> Secure, free and online.
      </h1>
      <h2>A science back method to increase <br /> happiness and reduce stress.</h2>
      <CustomButton>Sign Up</CustomButton>
    </div>
  );
};

export default Homepage;
