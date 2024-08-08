import React, { useState } from 'react';
import './SelService.css';

const SelService = () => {
  const [handleColor, SetHandleColor] = useState(false);

  const changeTitle = handleColor ? "TikTok" : "Instagram";

  const descriptionListCard = ["Instant Delivery", "Real & Active Followers", "24/7 Customer Support", "No Password Required"];

  const cardFollowersData = [
    {
      key: 1,
      title: `Buy ${changeTitle} Followers`,
      description: descriptionListCard,
      price: '$1.99',
      link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`
    },
    {
      key: 2,
      title: `Buy ${changeTitle} Auto Likes`,
      description: descriptionListCard,
      price: '$1.99',
      link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`
    },
    {
      key: 3,
      title: `Buy ${changeTitle} Likes`,
      description: descriptionListCard,
      price:'$1.99',
      link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`
    },
    {
      key: 4,
      title: `Buy ${changeTitle} Views`,
      description: descriptionListCard,
      price: '$1.99',
      link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`
    },
  ];

  const handleInstagramColor = () => {
    SetHandleColor(false);
  };

  const handletiktokColor = () => {
    SetHandleColor(true);
  };

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      <div className="row selectservice-main">
        <div className="col-sm-12 col-lg-12">
          <h1>Select Services</h1>
          <p>Select Your Required Service & Enjoy</p>
        </div>
        <div className="button-services">
          <button 
            className={`btn-ig ${!handleColor ? 'active' : ''}`} 
            onClick={handleInstagramColor}
          >
            <i className="fab fa-instagram"></i>&nbsp;&nbsp;Instagram
          </button>
          <button 
            className={`btn-tk ${handleColor ? 'active' : ''}`} 
            onClick={handletiktokColor}
          >
            <i className="fab fa-tiktok"></i>&nbsp;&nbsp;Tiktok
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center p-1">
          {cardFollowersData.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <h6 className="card-price">{card.price}</h6>
                <ul className="list-unstyled">
                  {card.description.map((listItem, index) => (
                   <li className='' key={index}><i className="fa fa-check-circle" style={{ fontSize: '1rem',color:'#f60640;' }}></i> {listItem}</li>

                  ))}
                </ul>
                <button onClick={() => handleClick(card.link)} className="btn btn-primary buy-now-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelService;
