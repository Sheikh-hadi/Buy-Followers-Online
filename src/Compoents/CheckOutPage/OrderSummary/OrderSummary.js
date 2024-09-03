import React from "react";
import "./OrderSummary.css";
import { Col, Image, Row } from "antd";

const OrderSummary = ({ product }) => {
  let total = 0;

  return (
    <div
      className="container mt-5"
      style={{
        border: "2px solid lightgray",
        borderRadius: "5px",
        padding: "3px",
      }}
    >
      <Row
        className="orderSummary align-items-center"
        style={{
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "5px",
        }}
      >
        <Col>
          <Row className="justify-content-between align-items-center">
            <Col>
              <p>Product</p>
            </Col>
            <Col>
              <p>Amount</p>
            </Col>
          </Row>
          <hr />
          <Row className="align-items-center">
            <Col>
              {product && product.length > 0 ? (
                product.map((item, index) => {
                  total += item.price || 0;
                  return (
                    <Row
                      key={index}
                      className="align-items-center"
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      <Col lg={4}>
                        <Image
                          src={item.image || "sample.jfif"}
                          alt="Product"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                          className="img-fluid"
                        />
                      </Col>
                      <Col lg={12}>
                        <p className="text-muted mb-0 small">
                          Get Instant Fame with Buy Instagram{" "}
                          {item.title || "Product Title"} in Australia -
                          {item.number || "0"}
                          {item.description || ""}
                        </p>
                      </Col>
                      <Col offset={1} lg={5}>
                        <p className="mb-0">× {item.quantity || 1}</p>
                      </Col>
                      <Col lg={2}>
                        <p className="mb-0">${item.price || "0.00"}</p>
                      </Col>
                    </Row>
                  );
                })
              ) : (
                <Row
                  className="align-items-center"
                  style={{ border: "2px solid black" }}
                >
                  <Col lg={4}>
                    <Image
                      src="sample.jfif"
                      alt="Product"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                      className="img-fluid"
                    />
                  </Col>
                  <Col lg={12}>
                    <p className="text-muted mb-0 small">
                      No products available
                    </p>
                  </Col>
                  <Col offset={1} lg={5}>
                    <p className="mb-0">× 0</p>
                  </Col>
                  <Col lg={2}>
                    <p className="mb-0">$0.00</p>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>

          <hr />
          <Row className="justify-content-between align-items-center">
            <Col>
              <p>Subtotal</p>
            </Col>
            <Col>
              <p>{total}</p>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-between align-items-center">
            <Col>
              <h2>Total</h2>
            </Col>
            <Col>
              <h2>{total}</h2>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <div className="col-7">
              <input
                type="text"
                className="form-control"
                placeholder="Coupon Code"
              />
            </div>
            <div className="col-4">
              <button className="btn btn-danger w-100">Apply</button>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default OrderSummary;
