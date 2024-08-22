import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Col, Form } from "react-bootstrap";
import HandlePostData from "../../Hooks/usePostHook"; // Make sure this is the correct function name
import "../LogIn/Login.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    console.log("Sign In Data:", signInData);

    try {
      // Make sure HandlePostData is defined correctly to handle form submission
      const response = await HandlePostData(
        "http://localhost:8000/api/user/login",
        signInData
      );

      if (response?.data?.success) {
        // Reset form fields if the login is successful
        setSignInData({
          email: "",
          password: "",
        });
        alert("Successfully Logged In: " + response?.data?.message);
      navigate("/");
      } else {
        alert("Login failed: " + response?.data?.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Col md={6} className="form-container sign-in">
      <Form onSubmit={handleSignInSubmit}>
        <h1 className="login-heading">Sign In</h1>
        <div className="social-icons-login">
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

        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={signInData.email}
          onChange={handleSignInChange}
        />
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={signInData.password}
          onChange={handleSignInChange}
        />
        <div className="text-center mt-3">
          <a href="/" className="forget d-block mb-3">
            Forgot Your Password?
          </a>
          <button type="submit" className="btn btn-danger">
            SIGN IN
          </button>
        </div>
      </Form>
    </Col>
  );
};

export default SignIn;
