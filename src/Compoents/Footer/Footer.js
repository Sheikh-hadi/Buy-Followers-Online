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
                <li>
                  <a href="/instagramfollowers">IG Followers</a>
                </li>
                <li>
                  <a href="instagramlikes">IG Likes</a>
                </li>
                <li>
                  <a href="/buytiktokfollowers">TikTok Followers</a>
                </li>
                <li>
                  <a href="/buytiktoklikes">TikTok Likes</a>
                </li>
                <li>
                  <a href="/buytiktokviews">Insta Views</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 footer-section">
              <div className="vlline">
                <div className="vl"></div>
                <h3>ABOUT US</h3>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contactUs">Contact</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 footer-section">
              <div className="vlline">
                <div className="vl"></div>
                <h3>POLICIES</h3>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href=".">Privacy Policy</a>
                </li>
                <li>
                  <a href=".">Refund Policy</a>
                </li>
                <li>
                  <a href=".">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 footer-section">
              <div className="vlline">
                <div className="vl"></div>
                <h3>CONTACT</h3>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="tel:+61482072096">+61 4820 72 096</a>
                </li>
                <li>
                  <a href="mailto:Info@Buyfollowersaustralia.Com">
                    Info@Buyfollowersaustralia.Com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=MANERA+HEIGHTS,+New+South+Wales(NSW),+2830"
                    target="_blank"
                  >
                    MANERA HEIGHTS, New South Wales(NSW), 2830 (02) 4079 1459
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <p className="text-white mb-1">
                Copyright © 2024 buyfollowersonline
              </p>
              <ul className="list-unstyled d-flex m-0">
                <li className="px-2">
                  <a href=".">
                    <a href="/">
                      <i className="text-white fab fa-facebook"></i>
                    </a>
                  </a>
                </li>
                <li className="px-2">
                  <a href=".">
                    <a href="/">
                      <i className="text-white fab fa-twitter"></i>
                    </a>
                  </a>
                </li>
                <li className="px-2">
                  <a href=".">
                    <a href="/">
                      <i className="text-white fab fa-tiktok"></i>
                    </a>
                  </a>
                </li>
                <li className="px-2">
                  <a href=".">
                    <a href="/">
                      <i className="text-white fab fa-instagram"></i>
                    </a>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
