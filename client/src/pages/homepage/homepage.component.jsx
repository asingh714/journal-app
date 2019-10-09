import React from "react";

import CustomButton from "../../components/custom-button/custom-button.component";

import Sun from "../../assets/Sun.png";
import Moon from "../../assets/Moon.png";
import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <>
      <main className="hero-section">
        <div className="hero-text-container">
          <h1 className="main-heading">
            Your morning and evening journal. <br /> Secure, free and online.
          </h1>
          <h2 className="sub-heading">
            A science back method to increase <br /> happiness and reduce
            stress.
          </h2>
          <CustomButton isHeroButton>Sign Up</CustomButton>
        </div>
      </main>

      <div className="how-it-works-section">
        <h2 className="how-it-works-heading">How it works</h2>
        <h3 className="how-it-works-sub-heading">
          MyJournal is comprised of two sections -- a morning <br /> section and
          an evening section.
        </h3>
        <div className="morning-section">
          <img src={Sun} alt="Sun" className="icon-sun"/>
          <span className="how-works-text">
            <span className="bold">Morning Section:</span> In this section, we want you to you begin the day
            in the right direction. The morning journal entry will be comprised
            of three entries on things you are grateful for, three things that
            would make today great, a daily affirmation and an assessment of
            your current mood.
          </span>
        </div>
        <div className="evening-section">
          <img src={Moon} alt="Moon" className="icon-moon"/>
          <span className="how-works-text">
          <span className="bold">Evening Section:</span>  In this section, we want you to you end the day
            with some positivity and reflection. The evening journal entry will
            ask you about three amazing things that happened today, along with
            what could’ve made today better and an assessment of your current
            mood.
          </span>
        </div>
      </div>


    </>
  );
};

export default Homepage;
