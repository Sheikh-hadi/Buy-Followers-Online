import React from "react";
import "./OrderSummary.css";
import { Col, Image, Row } from "antd";

const OrderSummary = () => {
  return (
    <div className="container mt-5" style={{ border: "2px solid lightgray", borderRadius:"5px" ,padding:"3px" }}>
      <Row className="orderSummery align-items-center" style={{padding:"20px"}}>
        <Col>
          <Row className=" justify-content-between align-items-center " >
            <Col>
              <p>Product</p>
            </Col>
            <Col>
              <p>Subtotal</p>
            </Col>
          </Row>
          <hr/>
          <Row className="align-items-center">
            <Col>
              <Row className="align-items-center">
                <Col lg={4}>
                  <Image
                    src="sample.jfif"
                    alt="Product"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    className="img-fluid"
                  />
                </Col>
                <Col lg={12}>
                  <p className="text-muted mb-0 small">
                    Get Instant Fame with Buy Instagram Followers in Australia - 2500
                  </p>
                </Col>
                <Col offset={1} lg={5}>
                  <p className="mb-0">× 1</p>
                </Col>
                <Col lg={2}>
                  <p className="mb-0">$24.99</p>
                </Col>
              </Row>
            </Col>
          </Row>
         
          <hr/>
          <Row className="justify-content-between align-items-center">
            <Col>
              <p>Subtotal</p>
            </Col>
            <Col>
              <p>$24.99</p>
            </Col>
          </Row>
          <hr/>
          <Row className="justify-content-between align-items-center">
            <Col>
              <h2>Total</h2>
            </Col>
            <Col>
              <h2>$24.99</h2>
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
