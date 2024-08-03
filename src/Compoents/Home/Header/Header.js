import React from "react";
const Header = () => {
  return (
    <div className="">
      <div className="row nav-bar-logo">
        <div className="col-4 offset-lg-2">
          <img src="logo.png" alt="" />
        </div>
        <div className="col">
          <div className="row ">
            <div className="col-sm-1 col-md-2 col-lg-2 ">
              {" "}
              <a href="/"> Home </a>{" "}
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2">
              {" "}
              <a href="/"> About Us </a>{" "}
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2">
              {" "}
              <a href="/"> Instagram </a>{" "}
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2">
              {" "}
              <a href="/"> TikTok </a>{" "}
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2">
              {" "}
              <a href="/"> Blog </a>{" "}
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2">
              {" "}
              <a href="/"> Contact </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
