import React from "react";
import "./Comp1.css"; // Import the CSS file

const InstagramFollowersText = ({ text }) => {
  return (
    <div className="container buy-container">
      <div className="row justify-content-center text-center">
        <div className="col-12 order-2">
          <h1 className="buy-title">{text?.heading}</h1>
        </div>
        <div className="col-12 mt-2 order-3">
          <p className="buy-subtitle">{text?.para}</p>
        </div>
      </div>
    </div>
  );
};

export default InstagramFollowersText;
