import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="vlline">
              <div className="vl"></div>
              <h3>SERVICES</h3>
            </div>
            <ul className="list-unstyled">
              <li>IG Followers</li>
              <li>IG Likes</li>
              <li>TikTok Followers</li>
              <li>TikTok Likes</li>
              <li>Insta Views</li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="vlline">
              <div className="vl"></div>
              <h3>ABOUT US</h3>
            </div>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="vlline">
              <div className="vl"></div>
              <h3>POLICIES</h3>
            </div>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="vlline">
              <div className="vl"></div>
              <h3>CONTACT</h3>
            </div>
            <ul className="list-unstyled">
              <li>+61 4820 72 096</li>
              <li>Info@Buyfollowersaustralia.Com</li>
              <li>MANERA HEIGHTS, New South Wales(NSW), 2830 (02) 4079 1459</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center mt-4">
          <p>Copyright &copy; 2024 buyfollowersaustralia</p>
          <div className="social-icons">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-tiktok"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
