import React, { useState } from "react";
import "./CheckForm.css";
import { Form } from "react-bootstrap";
import { Col, Row } from "antd";

const CheckForm = () => {
  // State hooks for form data and validation errors
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [usernameOrPostLink, setUsernameOrPostLink] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState({});

  // Function to handle validation when a field loses focus
  const handleBlur = (field) => {
    let tempErrors = { ...errors };

    // Basic field validations
    if (field === "email" && !email)
      tempErrors.email = "Email Address is required";
    if (field === "name" && !name) tempErrors.name = "Your Name is required";
    if (field === "phone" && !phone)
      tempErrors.phone = "Your Phone is required";
    if (field === "usernameOrPostLink" && !usernameOrPostLink)
      tempErrors.usernameOrPostLink = "@username or post-link is required";

    // Payment field validations
    if (field === "cardNumber" && !cardNumber)
      tempErrors.cardNumber = "Card Number is required";
    if (field === "expiryDate" && !expiryDate)
      tempErrors.expiryDate = "Expiry Date is required";
    if (field === "cvc" && !cvc) tempErrors.cvc = "Card Code (CVC) is required";

    setErrors(tempErrors);
  };

  return (
    <div>
      <Row style={{ padding: "0px 10%" }}>
        <Col span={24}>
          <Form>
            {/* Customer Information Section */}
            <h4 className="form-section-heading">Customer Information</h4>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email Address *"
                required
                style={{
                  width: "100%",
                  height: "40px",
                  border: errors.email ? "1px solid red" : "1px solid gray",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur("email")}
              />
              {errors.email && (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              )}
            </Form.Group>

            {/* Billing Details Section */}
            <h4 className="form-section-heading">Billing Details</h4>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Your Name *"
                required
                style={{
                  width: "100%",
                  height: "40px",
                  border: errors.name ? "1px solid red" : "1px solid gray",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => handleBlur("name")}
              />
              {errors.name && (
                <Form.Text className="text-danger">{errors.name}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Your Phone *"
                required
                style={{
                  width: "100%",
                  height: "40px",
                  border: errors.phone ? "1px solid red" : "1px solid gray",
                }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => handleBlur("phone")}
              />
              {errors.phone && (
                <Form.Text className="text-danger">{errors.phone}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="@username or post-link *"
                required
                style={{
                  width: "100%",
                  height: "40px",
                  border: errors.usernameOrPostLink
                    ? "1px solid red"
                    : "1px solid gray",
                }}
                value={usernameOrPostLink}
                onChange={(e) => setUsernameOrPostLink(e.target.value)}
                onBlur={() => handleBlur("usernameOrPostLink")}
              />
              {errors.usernameOrPostLink && (
                <Form.Text className="text-danger">
                  {errors.usernameOrPostLink}
                </Form.Text>
              )}
            </Form.Group>

            {/* Payment Section */}
            <div className="payment-form-container">
              <h4 className="form-section-heading">Payment</h4>
              <div className="payment-card">
                <h5>Credit Card (Stripe)</h5>
                <p>Pay with your credit card via Stripe.</p>

                {/* Payment Form */}
                <form>
                  <div className="form-group">
                    <label htmlFor="cardNumber">
                      Card Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      className="form-control"
                      placeholder="1234 1234 1234 1234"
                      required
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      onBlur={() => handleBlur("cardNumber")}
                      style={{
                        width: "100%",
                        height: "40px",
                        border: errors.cardNumber
                          ? "1px solid red"
                          : "1px solid gray",
                      }}
                    />
                    {errors.cardNumber && (
                      <div className="text-danger">{errors.cardNumber}</div>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="expiryDate">
                        Expiry Date <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        className="input-fild"
                        placeholder="MM / YY"
                        required
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        onBlur={() => handleBlur("expiryDate")}
                        style={{
                          width: "100%",
                          height: "40px",
                          border: errors.expiryDate
                            ? "1px solid red"
                            : "1px solid gray",
                        }}
                      />
                      {errors.expiryDate && (
                        <div className="text-danger">{errors.expiryDate}</div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="cvc">
                        Card Code (CVC) <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        className="input-fild"
                        placeholder="CVC"
                        required
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        onBlur={() => handleBlur("cvc")}
                        style={{
                          width: "100%",
                          height: "40px",
                          border: errors.cvc
                            ? "1px solid red"
                            : "1px solid gray",
                        }}
                      />
                      {errors.cvc && (
                        <div className="text-danger">{errors.cvc}</div>
                      )}
                    </div>
                  </div>

                  {/* Privacy Statement */}
                  <p className="privacy-text">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary place-order-btn"
                  >
                    <span>
                      <i className="lock fa-solid fa-lock"></i>
                    </span>{" "}
                    Place Order $24.99
                  </button>
                </form>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CheckForm;
