import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Login.css';  // Ensure you have this stylesheet for the custom styling.

const Login = () => {
  const [active, setActive] = useState(false);

  return (
    <Container fluid className={`d-flex justify-content-center align-items-center login-container ${active ? 'active' : ''}`}>
      <Row className="container-box">
        <Col md={6} className="form-container sign-in">
          <Form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="/" className="icon"><i className="fab fa-google-plus-g"></i></a>
              <a href="/" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="/" className="icon"><i class="fa-brands fa-instagram"></i></a>
              <a href="/" className="icon"><i class="fa-brands fa-tiktok"></i></a>
            </div>
            <span>or use your email password</span>
            <Form.Control type="email" placeholder="Email" />
            <Form.Control type="password" placeholder="Password" />
            <a href="/" className="forgot-password">Forget Your Password?</a>
            <Button className="mt-3 btn-signin">Sign In</Button>
          </Form>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center toggle-panel toggle-right">
          <div>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of the site features.</p>
            <Button onClick={() => setActive(true)} className="btn-signup">Sign Up</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
