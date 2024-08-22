import React from "react";
import "./centeredTextSection.css";

const centeredTextSection = ({ textCentered }) => {
  return (
    <div className="container">
      <div className="centered-content">
        <h2>{textCentered?.title}</h2>
        <p>{textCentered?.descriptionFirst}</p>
        <p>{textCentered?.descriptionSecond}</p>
      </div>
    </div>
  );
};

export default centeredTextSection;
