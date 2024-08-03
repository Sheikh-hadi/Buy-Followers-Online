import React, { useState } from 'react';
import { Modal } from 'antd';
import {MenuUnfoldOutlined } from '@ant-design/icons';
import './Header.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="pt-2 pb-2 row align-items-center nav-bar nav-bar-list" >
        <div className="col-xs-2 col-sm-6 col-md-4 col-lg-4" >
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-" >
          <div className="row">
            <div className="col-sm-1 col-md-2 col-lg-2 ">
              <a href="/" className="text-decoration-none nav-bar-a">Home</a>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2 ">
              <a href="/" className="text-decoration-none nav-bar-a">About Us</a>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2 dropdown ">
              <a href="/" className="text-decoration-none nav-bar-a dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Instagram</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Instagram Post 1</a></li>
                <li><a className="dropdown-item" href="/">Instagram Post 2</a></li>
                <li><a className="dropdown-item" href="/">Instagram Post 3</a></li>
              </ul>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2 dropdown ">
              <a href="/" className="text-decoration-none nav-bar-a dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">TikTok</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">TikTok Video 1</a></li>
                <li><a className="dropdown-item" href="/">TikTok Video 2</a></li>
                <li><a className="dropdown-item" href="/">TikTok Video 3</a></li>
              </ul>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2 ">
              <a href="/Blog" className="text-decoration-none nav-bar-a">Blog</a>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2 ">
              <a href="/ContactUs" className="text-decoration-none nav-bar-a">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <div  className=" nav-bar mobile-view" >
        <div  className="col-xs-2 col-sm-6 col-md-4 col-lg-4" >
          <img  src="logo.png" alt="Logo" />
        </div>
        <div  className=" flex col-xs-6 col-sm-6 col-md-6 col-lg-6 " >
          <MenuUnfoldOutlined style={{
            fontSize: "40px"
          }}
           onClick={showModal} />
          <Modal placement="bottom" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <ul>
              <li className='model-list'><a href='/'>Home</a></li>
              <li className='model-list'><a href='/'>About Us</a></li>
              <li className='model-list'><a href='/'>Instagram</a></li>
              <li className='model-list'><a href='/'>TikTok</a></li>
              <li className='model-list'><a href='/'>Blog</a></li>
              <li className='model-list'><a href='/'>Contact Us</a></li>
            </ul>
          </Modal>
        </div>
      </div>
    </>

  );
};

export default Header;
