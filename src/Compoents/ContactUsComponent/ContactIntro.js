import React from 'react';
import './ContactIntro.css';

const ContactIntro = () => {
  return (
    <div>
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-section container">
        <div className="row">
          <div className="col-md-6 mb-5">
            <button className="btn btn-danger mb-3">Get in Touch</button>
            <h2>How Can I <span className="text-danger">Help</span> You</h2>
            <p>
              BuyFollowersaustralia team is dedicated to offering great service and help. 
              If you’ve got any questions about any of our SMM services, thoughts, or feedback, 
              feel free to reach out. You can get in touch using the contact form here. 
              We’ll make sure to get back to you quickly.
            </p>
            <div className="social-icons">
            <div className="icon-circle"><i className="fab fa-facebook-f"></i></div>
              <div className="icon-circle"><i className="fab fa-twitter"></i></div>
              <div className="icon-circle"><i className="fab fa-tiktok"></i></div>
              <div className="icon-circle"><i className="fab fa-instagram"></i></div>
            </div>
            
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <h3>Send Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control " placeholder="Your Name" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="form-group ">
                    <input type="tel" className="form-control" placeholder="Your Phone" />
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="How Can we Help You?" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-danger">Submit Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactIntro;