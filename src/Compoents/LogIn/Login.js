import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const [active, setActive] = useState(false);

  return (
    <Container fluid className={`d-flex justify-content-center align-items-center login-container ${active ? 'active' : ''}`}>
      <Row className="container-box">
        <Col md={6} className={`form-container sign-up ${active ? 'active' : ''}`}>
          <Form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="/" className="icon"><i className="fab fa-google-plus-g"></i></a>
              <a href="/" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="/" className="icon"><i className="fab fa-github"></i></a>
              <a href="/" className="icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <Form.Control type="text" placeholder="Name" />
            <Form.Control type="email" placeholder="Email" />
            <Form.Control type="password" placeholder="Password" />
            <Button className="mt-3 btn-signup">Sign Up</Button>
          </Form>
        </Col>
        <Col md={6} className={`form-container sign-in ${active ? '' : 'active'}`}>
          <Form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="/" className="icon"><i className="fab fa-google-plus-g"></i></a>
              <a href="/" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="/" className="icon"><i className="fab fa-github"></i></a>
              <a href="/" className="icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <Form.Control type="email" placeholder="Email" />
            <Form.Control type="password" placeholder="Password" />
            <a href="/" className="forgot-password">Forget Your Password?</a>
            <Button className="mt-3 btn-signin">Sign In</Button>
          </Form>
        </Col>
        <Col md={6} className="toggle-container">
          <div className={`toggle ${active ? 'active' : ''}`}>
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p className='Persnal-detail'>Enter your personal details to use all of the site features.</p>
              <Button onClick={() => setActive(false)} className="btn-signin">Sign In</Button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p className='Persnal-detail'>Register with your personal details to use all of the site features.</p>
              <Button onClick={() => setActive(true)} className="btn-signup">Sign Up</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
