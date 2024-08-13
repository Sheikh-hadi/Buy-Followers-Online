import React from "react";
import "./CheckForm.css";
import {  Form } from "react-bootstrap";
import { Col, Row } from "antd";

const CheckForm = () => {
  return (
    <>
     <h1 s className="text-center ChComp1">
          Complete your order
        </h1>
        <hr
          style={{
            display: "block",
            width: "100%",
            border: "8px solid red",
            margin: "10px 0",
          }}
        />
    <div className="container">
    <Row>
    
      <Col>
      
      <Form>
        {/* Customer Information */}
        <h4 className="form-section-heading">Customer information</h4>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email Address *" required />
          <Form.Text className="text-danger">
            Email Address is required
          </Form.Text>
        </Form.Group>

        {/* Billing Details */}
        <h4 className="form-section-heading">Billing details</h4>
        <Form.Group className=" Information-checkout mb-3">
          <Form.Control type="text" placeholder="Your Name *" required />
          <Form.Text className="text-danger">Your Name is required</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Phone *" required />
          <Form.Text className="text-danger">
            Your Phone is required
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>@username or post-link *</Form.Label>
          <Form.Control
            type="text"
            placeholder="@username or post-link *"
            required
          />
          <Form.Text className="text-danger">
            @username or post-link is required
          </Form.Text>
        </Form.Group>

        {/* Payment Details */}

          <div className="payment-form-container">
            <h4 className="form-section-heading">Payment</h4>
            <div className="payment-card">
              <h5>Credit Card (Stripe)</h5>
              <p>Pay with your credit card via Stripe.</p>

              <form>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number *</label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="form-control"
                    placeholder="1234 1234 1234 1234"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="expiryDate">Expiry Date *</label>
                    <input
                      type="text"
                      id="expiryDate"
                      className="form-control"
                      placeholder="MM / YY"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="cvc">Card Code (CVC) *</label>
                    <input
                      type="text"
                      id="cvc"
                      className="form-control"
                      placeholder="CVC"
                      required
                    />
                  </div>
                </div>

                <p className="privacy-text">
                  Your personal data will be used to process your order,
                  support your experience throughout this website, and for
                  other purposes described in our privacy policy.
                </p>

                <button
                  type="submit"
                  className="btn btn-primary place-order-btn"
                >
                  <span>
                    <i className=" lock fa-solid fa-lock"></i>
                  </span>{" "}
                  Place Order $24.99
                </button>
              </form>
            </div>
          </div>
      </Form></Col>
    </Row>
  </div>

    </>
    
  
  );
};

export default CheckForm;
