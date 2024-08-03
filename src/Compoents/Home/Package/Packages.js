import React from 'react';
import './Packages.css';

const Packages = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card package-card1">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <i className="fas fa-shopping-cart icon"></i>
                <h1 className="number"><b>01</b></h1>
              </div>
              <h2>Select Your Package</h2>
              <p>
                Pick a package from our list to find the right one. Let us help
                you get more followers, whether you want a little extra or a
                considerable boost. If you still need help finding what you need,
                let us know, and we can customize a package just for you! Click
                “Buy Now” to get started.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card package-card2">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <i className="fas fa-mail-bulk icon"></i>
                <h1 className="number"><b>02</b></h1>
              </div>
              <h2>Enter your information</h2>
              <p>
                Pick a package from our list to find the right one. Let us help
                you get more followers, whether you want a little extra or a
                considerable boost. If you still need help finding what you need,
                let us know, and we can customize a package just for you! Click
                “Buy Now” to get started.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card package-card3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <i className="fas fa-money-check-alt icon"></i>
                <h1 className="number"><b>03</b></h1>
              </div>
              <h2>Checkout</h2>
              <p>
                Pick a package from our list to find the right one. Let us help
                you get more followers, whether you want a little extra or a
                considerable boost. If you still need help finding what you need,
                let us know, and we can customize a package just for you! Click
                “Buy Now” to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
