import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const [active, setActive] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: '',
<<<<<<< Updated upstream
    UserName:'',
=======
    username:'',
>>>>>>> Stashed changes
    email: '',
    password: '',
    confirmPassword:""
  });

  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
   
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value
    });
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value
    });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', signUpData);
    // API call or further processing can be done here
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Data:', signInData);
    // API call or further processing can be done here
  };

  return (
    <Container fluid className={`d-flex justify-content-center align-items-center login-container ${active ? 'active' : ''}`}>
      <Row className="container-box">
        <Col md={6} className="form-container sign-up">
          <Form onSubmit={handleSignUpSubmit}>
            <h1 className='create mb-3'>Create Account</h1>
            
            <div className="social-icons">
              <a href="/" className="icon"><i className="fab fa-google-plus-g"></i></a>
              <a href="/" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="/" className="icon"><i className="fab fa-github"></i></a>
              <a href="/" className="icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            {/* <span>or use your email to sign in</span> */}
         
            <Form.Control 
              type="text" 
              placeholder="Full Name" 
              name="name" 
              value={signUpData.name} 
              onChange={handleSignUpChange} 
            />
             <Form.Control 
              type="text" 
              placeholder="Username" 
              name="UserName" 
              value={signUpData.UserName} 
              onChange={handleSignUpChange} 
            />
            <Form.Control 
              type="email" 
              placeholder="Email" 
              name="email" 
              value={signUpData.email} 
              onChange={handleSignUpChange} 
            />
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={signUpData.password} 
              onChange={handleSignUpChange} 
            />
              <Form.Control 
              type="password" 
              placeholder="Confirm Password" 
              name="confirmPassword" 
              value={signUpData.ConfirmPasswordPassword} 
              onChange={handleSignUpChange} 
            />
            <Button type="submit" className="mt-1 btn-signup">Sign Up</Button>
          </Form>
        </Col>
  
        <Col md={6} className="form-container sign-in">
          <Form onSubmit={handleSignInSubmit}>
            <h1 className='login-heading'>Sign In</h1>
            <div className="social-icons ">
              <a href="/" className="icon"><i className="fab fa-google-plus-g"></i></a>
              <a href="/" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="/" className="icon"><i className="fab fa-github"></i></a>
              <a href="/" className="icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            {/* <span>or use your email to sign in</span> */}
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
           <div className="text-center mt-3"><br></br>
  <a href="/" className=" forget d-block mb-3 ">Forgot Your Password?</a>
  <button className="btn btn-danger">SIGN IN</button>
</div>

          </Form>
        </Col>

        <Col md={6} className="toggle-container">
          <div className={`toggle ${active ? 'active' : ''}`}>
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p className='personal-detail'>Enter your personal details to use all of the site features.</p>
              <Button onClick={() => setActive(false)} className="btn-signin">Sign In</Button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p className='personal-detail'>Register with your personal details to use all of the site features.</p>
              <Button onClick={() => setActive(true)} className="btn-signup">Sign Up</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
