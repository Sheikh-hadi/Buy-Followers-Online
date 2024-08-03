import React from 'react';
import './IconCards.css';

const IconCards = () => {
  return (
    <div className="container my-5">
      <div className="row icon-container justify-content-center">
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="icon-box">
            <i className="fas fa-users"></i>
            <p className="bloc">Active Users</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="icon-box">
            <i className="fas fa-headset"></i>
            <p className="bloc">Live Support</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="icon-box">
            <i className="fas fa-key"></i>
            <p className="bloc">Safe and Secure</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="icon-box">
            <i className="fas fa-money-check-alt"></i>
            <p className="bloc">Secure Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconCards;
