import React from 'react';
import { Row, Col } from "antd";
import "./CheckOutPage.css"; // Import CSS for styling
import CheckForm from './CheckForm/CheckForm';
import OrderSummary from './OrderSummary/OrderSummary';

const CheckOutPage = () => {
  return (
    <div>
      <h1 className="text-center font-weight-900 ChComp1">
        <span style={{ color: "#dc3545" }}>Complete Your Order</span>
      </h1>
      <hr />
      <div className="checkout-container">
        <Row>
          {/* Left column - Check Form */}
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="left-column">
            <CheckForm />
          </Col>

          {/* Right column - Order Summary (hidden on small screens) */}
          <Col xs={0} sm={0} md={12} lg={12} xl={12} xxl={12} className="right-column">
            <OrderSummary />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CheckOutPage;
