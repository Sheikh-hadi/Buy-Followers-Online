import React, { useState } from 'react';
import { Col, Modal, Row } from 'antd';
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
      <div className="navbar">
        <img src="logo.png" alt="Logo" className="logo" />
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About Us</a>
          <div className="dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Instagram</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/instagramfollowers">Instagram Followers</a></li>
              <li><a className="dropdown-item" href="/instagramlikes">Instagram Likes</a></li>
              <li><a className="dropdown-item" href="/buyinstagramautolikes">Buy Instagram Auto Likes</a></li>
              <li><a className="dropdown-item" href="/buyinstagramautoreels">Buy Instagram Auto Reels</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">TikTok</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/buytiktokfollowers">Buy TikTok Followers</a></li>
              <li><a className="dropdown-item" href="/buytiktoklikes">Buy TikTok Likes</a></li>
              <li><a className="dropdown-item" href="/buytiktokviews">Buy TikTok Views</a></li>
            </ul>
          </div>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/contactUs" className="nav-link">Contact</a>
        </div>
      </div>

      <Row className="mobile-nav">
        <Col xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="logo.png" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </Col>
        <Col xs={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <MenuUnfoldOutlined style={{ fontSize: '40px' }} onClick={showModal} />
          <Modal
            className="custom-modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={350}
            style={{
              float: "right",
              marginTop: "-100px",
            }}
          >
            <ul style={{ display: "flex", flexDirection: "column", padding: 0, margin: 0, listStyleType: 'none' }}>
              <li className='model-list'><a href='/'>Home</a></li>
              <li className='model-list'><a href='/aboutus'>About Us</a></li>
              <li className='model-list dropdown'>
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Instagram</a>
                <ul className="dropdown-menu" style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
                  <li><a className="dropdown-item" href="/instagramfollowers">Instagram Followers</a></li>
                  <li><a className="dropdown-item" href="/instagramlikes">Instagram Likes</a></li>
                  <li><a className="dropdown-item" href="/buyinstagramautolikes">Buy Instagram Auto Likes</a></li>
                  <li><a className="dropdown-item" href="/buyinstagramautoreels">Buy Instagram Auto Reels</a></li>
                </ul>
              </li>
              <li className='model-list dropdown'>
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">TikTok</a>
                <ul className="dropdown-menu" style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
                  <li><a className="dropdown-item" href="/buytiktokfollowers">Buy TikTok Followers</a></li>
                  <li><a className="dropdown-item" href="/buytiktoklikes">Buy TikTok Likes</a></li>
                  <li><a className="dropdown-item" href="/buytiktokviews">Buy TikTok Views</a></li>
                </ul>
              </li>
              <li className='model-list'><a href='/Blog'>Blog</a></li>
              <li className='model-list'><a href='/'>Contact Us</a></li>
            </ul>
          </Modal>
        </Col>
      </Row>
    </>
  );
};

export default Header;
