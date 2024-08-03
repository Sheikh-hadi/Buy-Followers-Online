import React from 'react';
import './IconCards.css';

const IconCards = () => {
  let iconCardArray = [
    {
      icon: "fas fa-users",
      text: "Active Users"
    },
    {
      icon: "fas fa-headset",
      text: "Live Support"
    },
    {
      icon: "fas fa-key",
      text: "Safe and Secure"
    },
    {
      icon: "fas fa-money-check-alt",
      text: "Secure Payment"
    },

  ]
  return (
    <div className="container my-5">
      <div className="row icon-container justify-content-center">

        {iconCardArray.map((iconCard, index) => {
          return (
            <div className="col-6 col-md-3 text-center mb-4">
              <div className="icon-box">
                <i className={iconCard.icon}></i>
                <p className="bloc">{iconCard.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default IconCards;
