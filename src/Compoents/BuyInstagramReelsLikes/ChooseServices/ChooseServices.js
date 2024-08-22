import React from "react";
import "./ChooseServices.css";
const ChooseServices = ({ text }) => {
  return (
    <div className="container">
      <div className="ChooseServic">
        <h1 className="ChooseServicesHeading">{text?.heading}</h1>
        <p className="ChooseServicesPara">{text?.para}</p>
      </div>
    </div>
  );
};

export default ChooseServices;
