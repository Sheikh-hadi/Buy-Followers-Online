import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="row footer-sections">
            <div className="col-md-3 col-sm-6 mb-4 footer-section">
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
            <div className="col-md-3 col-sm-6 mb-4 footer-section">
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
            <div className="col-md-3 col-sm-6 mb-4 footer-section">
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
            <div className="col-md-3 col-sm-6 mb-4 footer-section">
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
          <div className="row footer-bottom">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <p className="text-white mb-1">Copyright © 2024 buyfollowersaustralia</p>
              <ul className="list-unstyled d-flex m-0">
                <li className="px-2">
                  <a href="/"><i className="text-white fab fa-facebook"></i></a>
                </li>
                <li className="px-2">
                  <a href="/"><i className="text-white fab fa-twitter"></i></a>
                </li>
                <li className="px-2">
                  <a href="/"><i className="text-white fab fa-tiktok"></i></a>
                </li>
                <li className="px-2">
                  <a href="/"><i className="text-white fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
