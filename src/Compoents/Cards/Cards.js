import React from "react";
import "./Cards.css";
export default function Cards() {
  return (
    <div
      className="custom-container py-4 "
      
    >
      <div
        className="row card_about justify-content-center"
      >
        <div
          className="col-12 col-md-6 col-lg-4 "
        >
          <div className="card p-4 h-100" >
            <i
              className="fas fa-cog mb-3"
              
            ></i>
            <h3 className="card_heading" >
              Authentic Services
            </h3>
            <p className="card_paragraph" >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 "
          
        >
          <div className="card p-4 h-100" >
            <i
              className="fas fa-lock mb-3"
              
            ></i>
            <h3 className="card_heading" >
              Secure Payment
            </h3>
            <p className="card_paragraph" >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 "
          
        >
          <div className="card p-4 h-100" >
            <i
              className="fas fa-lock mb-3"
              
            ></i>
            <h3 className="card_heading" >
              Secure Payment
            </h3>
            <p className="card_paragraph" >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
