import React from "react";
import "./Cards.css";
export default function Cards({ aboutHomeCards }) {
  console.log("Card in About Page: ", aboutHomeCards);
  return (
    <div className="custom-container">
      <div className="row justify-content-center">
        {aboutHomeCards &&
          aboutHomeCards.length > 0 &&
          aboutHomeCards.map((card, index) => (
            <div
              key={index}
              className="col-12 col-md-4 col-lg-4 d-flex justify-content-center"
            >
              <div
                className="card p-4 h-100"
              >
                <i className={`${card.icon} mb-3`}></i>
                <h3 className="card_heading">{card.title}</h3>
                <p className="card_paragraph">{card.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
