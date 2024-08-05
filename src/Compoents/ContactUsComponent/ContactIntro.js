import React from 'react';
import './ContactIntro.css';

const ContactIntro = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-danger mb-3">Get in Touch</button>
            <h2>How Can <span className="highlight">i</span> Help You</h2>
            <p>BuyFollowersaustralia team is dedicated to offering great service and help. If you’ve got any questions about any of our SMM services, thoughts, or feedback, feel free to reach out. You can get in touch using the contact form here. We’ll make sure to get back to you quickly.</p>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-tiktok"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="4" placeholder="How Can we Help You?"></textarea>
              </div>
              <button type="submit" className="btn btn-danger">Submit Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactIntro;
