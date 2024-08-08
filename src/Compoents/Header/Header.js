import React, { useState } from 'react';
import { Modal } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
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
      <div className= "pt-2 pb-2 row align-items-center justify-content-center nav-bar nav-bar-list"  >
        <div className="col-xs-2 col-sm-6 col-md-4 col-lg-4" >
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-"  >
          <div className="row">
            <div className="col-sm-1 col-md-2 col-lg-2 " >
              <a href="/" className="text-decoration-none nav-bar-a">Home</a>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2 ">
              <a href="/about" className="text-decoration-none nav-bar-a">About Us</a>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2 dropdown ">
              <a href="#" className="text-decoration-none nav-bar-a dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Instagram</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/instagramfollowers">InstagramFollowers</a></li>
                <li><a className="dropdown-item" href="/instagramlikes">Instagram Likes</a></li>
                <li><a className="dropdown-item" href="/buyinstagramautolikes">Buy Instagram Auto Likes</a></li>
                <li><a className="dropdown-item" href="/buyinstagramautoreels">Buy Instagram Auto Reels</a></li>
              </ul>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2 dropdown ">
              <a href="#" className="text-decoration-none nav-bar-a dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">TikTok</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/buytiktokfollowers">Buy TikTok Followers</a></li>
                <li><a className="dropdown-item" href="/buytiktoklikes">Buy TikTok Likes</a></li>
                <li><a className="dropdown-item" href="/buytiktokviews">Buy TikTok Views</a></li>
              </ul>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2 ">
              <a href="/blog" className="text-decoration-none nav-bar-a">Blog</a>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2 ">
              <a href="/contactUs" className="text-decoration-none nav-bar-a">Contact</a>
            </div>
          </div>
        </div>
      </div>

      <div className=" nav-bar mobile-view" >
        <div className="col-xs-2 col-sm-6 col-md-4 col-lg-6" >
          <img src="logo.png" alt="Logo" />
        </div>
        <div className=" flex col-xs-6 col-sm-6 col-md-6 col-lg-6 " >
          <MenuUnfoldOutlined style={{
            fontSize: "40px"
          }}
            onClick={showModal} />
          <Modal placement="bottom" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <ul>
              <li className='model-list'><a href='/'>Home</a></li>
              <li className='model-list'><a href='/aboutus'>About Us</a></li>
              <li className='model-list'><a href='/'>Instagram</a></li>
              <li className='model-list'><a href='/'>TikTok</a></li>
              <li className='model-list'><a href='/Blog'>Blog</a></li>
              <li className='model-list'><a href='/'>Contact Us</a></li>
            </ul>
          </Modal>
        </div>
      </div>
    </>

  );
};

export default Header;
