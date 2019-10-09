import React from "react";

import "./benefit.styles.scss";

const BeneFitCard = props => {
  return (
    <div className="benefit-card">
      <img src={props.image} alt={props.alt} className="benefit-icon"/>
      <h4>{props.heading}</h4>
      <span>{props.children}</span>
    </div>
  );
};

export default BeneFitCard;
