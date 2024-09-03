import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Login.css";
import SignUp from "../SignUp/signUp";
import SignIn from "../SignUp/SignIn";

const Login = () => {
  const [active, setActive] = useState(false);

  return (
    <Container
      fluid
      className={`d-flex justify-content-center align-items-center login-container ${
        active ? "active" : ""
      }`}
    >
      <Row className="container-box">
         <SignUp/>

          <SignIn/>

        <Col md={6} className="toggle-container">
          <div className={`toggle ${active ? "active" : ""}`}>
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p className="personal-detail">
                Enter your personal details to use all of the site features.
              </p>
              <Button onClick={() => setActive(false)} className="btn-signin">
                Sign In
              </Button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p className="personal-detail">
                Register with your personal details to use all of the site
                features.
              </p>
              <Button onClick={() => setActive(true)} className="btn-signup">
                Sign Up
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
