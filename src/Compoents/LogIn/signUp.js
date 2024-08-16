import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import HandlePostData from "../../Hooks/usePostHook";
import "../LogIn/Login.css";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPasswordIcon, setShowPasswordIcon] = useState({
    passwordIcon: false,
    confirmPasswordIcon: false,
  });

  // console.log(signUpData);

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await HandlePostData(
        "http://localhost:8000/api/user/register",
        signUpData
      );

      // Check if the response indicates success
      if (response.success) {
        // Reset form fields
        setSignUpData({
          fullName: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        alert("Sucessfully Login: " + response.message);
      } else {
        setSignUpData({
          fullName: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        alert("Registration failed: " + response.message);
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      // console.error("Error during sign-up:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const togglePasswordIcon = (field) => {
    setShowPasswordIcon((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <Col md={6} className="form-container sign-up">
      <Form onSubmit={handleSignUpSubmit}>
        <h1 className="create mb-3">Create Account</h1>
        <div className="social-icons-login ">
          <a href="/" className="icon">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="/" className="icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="/" className="icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        {/* <span>or use your email to sign in</span> */}
        <Form.Control
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={signUpData.fullName}
          onChange={handleSignUpChange}
        />
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          value={signUpData.username}
          onChange={handleSignUpChange}
        />
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={signUpData.email}
          onChange={handleSignUpChange}
        />
        <div className="password-field">
          <Form.Control
            type={showPasswordIcon.passwordIcon ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={signUpData.password}
            onChange={handleSignUpChange}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => togglePasswordIcon("passwordIcon")}
          >
            <i
              className={
                showPasswordIcon.passwordIcon
                  ? "fas fa-eye-slash"
                  : "fas fa-eye"
              }
            ></i>
          </button>
        </div>

        {/* Confirm Password Field */}
        <div className="password-field">
          <Form.Control
            type={showPasswordIcon.confirmPasswordIcon ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
            value={signUpData.confirmPassword}
            onChange={handleSignUpChange}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => togglePasswordIcon("confirmPasswordIcon")}
          >
            <i
              className={
                showPasswordIcon.confirmPasswordIcon
                  ? "fas fa-eye-slash"
                  : "fas fa-eye"
              }
            ></i>
          </button>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsCheck"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="termsCheck">
            I accept the <a href="#!">Terms and Conditions</a>
          </label>
        </div>
        <button
          type="submit"
          className={`btn-signup ${!isChecked ? "btn-disabled" : ""}`}
          disabled={!isChecked}
        >
          Sign Up
        </button>
      </Form>
    </Col>
  );
};

export default SignUp;
