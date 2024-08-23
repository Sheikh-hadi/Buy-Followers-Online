import React from "react";
import "./Features.css";

const Features = ({ features }) => {
  return (
    <div className="container features-container">
      <div
        className="row"
        style={{ display: "flex", flexwrap: "wrap", justifycontent: "center" }}
      >
        {features.map((feature, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="feature-item"  style={{ display: "flex", flexwrap: "wrap", justifycontent: "center" }}>
              <span className="feature-number">{feature.number}</span>
              <div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
