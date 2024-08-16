import React from "react";
import "./HomeIntro.css";

const HomeIntro = ({ intro }) => {

  // console.log("intro in home intro section: ", intro);

  return (
    <div className="centered-container">
      <div className="row homeintro-main">
        <div className="col-sm-12 col-lg-6">
          <h1> {intro?.introHeeading} </h1>
          <p>{intro?.introText}</p>
          <div className="row homeintro-btn-group">
            <div className="col-sm-12 col-lg-4">
              <div className="homeintro-btn">{intro?.introButtonFirst}</div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="homeintro-btn">{intro?.introButtonSecond}</div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="homeintro-btn">{intro?.introButtonThird}</div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <img src="phone.png" alt="Phone" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
