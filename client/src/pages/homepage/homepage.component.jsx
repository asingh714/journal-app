import React from "react";

import CustomButton from "../../components/custom-button/custom-button.component";
import BenefitCard from "../../components/benefit-card/benefit-card.component";

import Sun from "../../assets/Sun.png";
import Moon from "../../assets/Moon.png";
import Money from "../../assets/icon-currency-dollar.svg";
import Heart from "../../assets/icon-heart.svg";
import Lock from "../../assets/icon-lock.svg";
import Application from "../../assets/icon-application.svg";
import Layers from "../../assets/icon-layers.svg";

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
          <img src={Sun} alt="Sun" className="icon-sun" />
          <span className="how-works-text">
            <span className="bold">Morning Section:</span> In this section, we
            want you to you begin the day in the right direction. The morning
            journal entry will be comprised of three entries on things you are
            grateful for, three things that would make today great, a daily
            affirmation and an assessment of your current mood.
          </span>
        </div>
        <div className="evening-section">
          <img src={Moon} alt="Moon" className="icon-moon" />
          <span className="how-works-text">
            <span className="bold">Evening Section:</span> In this section, we
            want you to you end the day with some positivity and reflection. The
            evening journal entry will ask you about three amazing things that
            happened today, along with what could’ve made today better and an
            assessment of your current mood.
          </span>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Benefits</h2>
        <div className="top-row">
          <BenefitCard image={Money} heading="Free" alt="Money Icon">
            MyJournal is a free product with unlimited journal posts
          </BenefitCard>
          <BenefitCard image={Heart} heading="Health" alt="Health Icon">
            Daily journaling has show to increase positive moods and gratitude
          </BenefitCard>
          <BenefitCard image={Lock} heading="Private" alt="Lock Icon">
            Unlike a traditional journal, only the user will have access to
            MyJournal
          </BenefitCard>
        </div>
        <div className="bottom-row">
          <BenefitCard
            image={Application}
            heading="Online"
            alt="Web Browser Icon"
          >
            MyJournal can be accessed anywhere with an internet connection
          </BenefitCard>
          <BenefitCard
            image={Layers}
            heading="Organized"
            alt="Organzied Layers Icon"
          >
            MyJournal is organized and lets you to access all entries with ease
          </BenefitCard>
        </div>
      </div>
    </>
  );
};

export default Homepage;
