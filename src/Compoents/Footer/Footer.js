import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div  className="row" style={{border:"2px solid black"}}>
          <div className="col-md-3 col-sm-8 col-lg-3 mb-4 footer-section" style={{ border: "2px solid black" }}>
            <div className="vlline" style={{ border: "2px solid black" }}>
              <div className="vl" style={{ border: "2px solid black" }}></div>
              <h3 style={{ border: "2px solid black" }}>SERVICES</h3>
              <br />
            </div>

            <ul className="list-unstyled" style={{ border: "2px solid black" }}>
              <li>IG Followers</li>
              <li>IG Likes</li>
              <li>TikTok Followers</li>
              <li>TikTok Likes</li>
              <li>Insta Views</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 footer-section">
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
          <div className="col-md-3 mb-4 footer-section">
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
          <div className="col-md-3 mb-4 footer-section">
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
        <div
          
          className="row footer-bottom"
        >
          {/* <p>Copyright © 2024 buyfollowersaustralia</p> */}
          {/* <div className=" col-md-3 mb-4social-icons">
            <a href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </div> */}
          <div className="d-flex ">
          {/* <p className="">Copyright © 2024 buyfollowersaustralia</p> */}
          <div className=" text-white">
  <p className="mb-1">Copyright © 2024 buyfollowersaustralia</p>
</div>
            <ul className="list-unstyled d-flex justify-content-end w-100 m-0">

              <li className="px-2 ">
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
      </footer>
    </div>
  );
}
