import React from "react";
import "./CheckOutPage.css";
import { Button, Form, Input } from "antd";
import {
  LockOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
const Payment = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="payment-form-container">
      <h4 className="form-section-heading">Payment</h4>
      <div className="payment-card">
        <h5>Credit Card (Stripe)</h5>
        <p>Pay with your credit card via Stripe.</p>

        {/* Payment Form */}

        <Form
          name="paymentForm"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 600,
            padding: "0 10px",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Card Number"
            name="cardNumber"
            hasFeedback
            rules={[
              { required: true, message: "Please enter your card number" },
            ]}
          >
            <Input
              size="large"
              type="text"
              placeholder="1234 1234 1234 1234"
              prefix={
                <CreditCardOutlined
                  style={{ color: "#F51636", fontSize: "18px" }}
                />
              }
            />
          </Form.Item>
        </Form>

        <div className="form-row">
          <div className="form-group col-md-6">
            <Form.Item
              label="Expiry Date"
              name="expiryDate"
              hasFeedback
              rules={[
                { required: true, message: "Please enter your expiry date" },
              ]}
            >
              <Input
                size="large"
                type="text"
                placeholder="MM / YY"
                prefix={
                  <CreditCardOutlined
                    style={{ color: "#F51636", fontSize: "18px" }}
                  />
                }
              />
            </Form.Item>
          </div>
          <div className="form-group col-md-6">
            <Form.Item
              hasFeedback
              label="Card Code (CVC)"
              name="cardCode"
              rules={[
                { required: true, message: "Please enter your card code" },
              ]}
            >
              <Input
                size="large"
                type="text"
                placeholder="CVC"
                prefix={
                  <CreditCardOutlined
                    style={{ color: "#F51636", fontSize: "18px" }}
                  />
                }
              />
            </Form.Item>
          </div>
        </div>

        {/* Privacy Statement */}
        <p className="privacy-text">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>

        {/* Submit Button */}
        <Form.Item>
          <Button
            icon={<LockOutlined style={{ color: "#fff", fontSize: "18px" }} />}
            size="large"
            style={{
              backgroundColor: "#F51636",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "30px 20px",
              cursor: "pointer",
              fontSize: "18px",
            }}
            htmlType="submit"
            block
            className="button"
            type="primary"
          >
            Place Order $24.99
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default Payment;
