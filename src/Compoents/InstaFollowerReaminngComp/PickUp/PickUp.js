import React from "react";
import "./PickUp.css";

const PickUp = ({ text }) => {
  return (
    <div className="container PU-container">
      <div className="row justify-content-center text-center">
        <div className="col-12 ">
          <button className="btn btn-danger faq-btn">{text?.button}</button>
        </div>
        <div className="col-12 mt-3">
          <h1 className=" PU-title">{text?.heading}</h1>
        </div>
        <div className="col-12 mt-2 ">
          <p className="PU-subtitle">{text?.para}</p>
        </div>
      </div>
    </div>
  );
};

export default PickUp;
