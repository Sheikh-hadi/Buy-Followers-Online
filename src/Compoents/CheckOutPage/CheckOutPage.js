import React from "react";
import { Row, Col } from "antd";
import "./CheckOutPage.css"; // Import CSS for styling
import CheckForm from "./CheckForm/CheckForm";
import OrderSummary from "./OrderSummary/OrderSummary";

const CheckOutPage = ({ product }) => {
  return (
    <div>
      <h1
        style={{ color: "#dc3545" }}
        className="text-center font-weight-900 ChComp1"
      >
        Complete Your Order
      </h1>
      <hr />
      <div className="checkout-container">
        <Row>
          {/* Left column - Check Form */}
          <Col
            xs={24}
            sm={24}
            md={14}
            lg={14}
            xl={14}
            xxl={14}
            className="left-column"
          >
            <CheckForm />
          </Col>

          {/* Right column - Order Summary (hidden on small screens) */}
          <Col
            xs={24}
            sm={24}
            md={10}
            lg={10}
            xl={10}
            xxl={10}
            className="right-column"
          >
            <OrderSummary product={product} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CheckOutPage;
