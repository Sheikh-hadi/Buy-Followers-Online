import React from "react";
import "./AboutUsIntro.css";
import about from "../../assets/images/aboutus.jpg";
export default function AboutUsIntro({ intro }) {
  console.log("intro in about intro section: ", intro);
  return (
    <div className="container mt-1">
      <div className="row align-items-center intro">
        <div className="col-xs-12 col-sm-12  col-md-12  col-lg-6  intro_img">
          <img src={about} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-xs-12 col-sm-12  col-md-12  col-lg-6 intro_text">
          <h3 className="blue">{intro?.introHeeading}</h3>
          <p>{intro.introTextfirst}</p>
          <p>{intro.introTexSecond}</p>
        </div>
      </div>
    </div>
  );
}
