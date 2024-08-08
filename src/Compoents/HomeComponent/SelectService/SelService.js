import React, { useState } from 'react';
import './SelService.css';

const SelService = () => {
  const [handleColor, setHandleColor] = useState(true);
  console.log(handleColor);
  const changeTitle = handleColor ? "Instagram" : "TikTok";

  const descriptionListCard = ["Instant Delivery", "Real & Active Followers", "24/7 Customer Support", "No Password Required"];

  let instagramColor = {
    background: "red",
    text: "white",
  };

  let tiktokColor = {
    background: "grey",
    text: "black",
  };

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
      price: '$1.99',
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
    setHandleColor(true);
  };

  const handleTiktokColor = () => {
    setHandleColor(false);
  };

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      <div className="row selectservice-main">
        <div className="col-sm-12 col-lg-12">
          <h1>Select Services</h1>
          <p className='serv'>Select Your Required Service & Enjoy</p>
        </div>
        <div className="button-services">
          <button
            style={{
              color: handleColor ? instagramColor.text : tiktokColor.text,
              backgroundColor: handleColor ? instagramColor.background : tiktokColor.background
            }}
            className={`btn-ig ${!handleColor ? 'active' : ''}`}
            onClick={handleInstagramColor}
          >
            <i className="fab fa-instagram" style={{
              color: handleColor ? instagramColor.text : tiktokColor.text,
            }}></i>&nbsp;&nbsp;Instagram
          </button>
          <button
            style={{
              color: handleColor ? tiktokColor.text : instagramColor.text,
              backgroundColor: handleColor ? tiktokColor.background : instagramColor.background
            }}
            className={`btn-tk ${handleColor ? 'active' : ''}`}
            onClick={handleTiktokColor}
          >
            <i className="fab fa-tiktok" style={{
              color: handleColor ? tiktokColor.text : instagramColor.text,
            }}></i>&nbsp;&nbsp;Tiktok
          </button>
        </div>
      </div>
      <div className='container ' style={{ border: "2px solid black" }}>
        <div className="row ">
          {cardFollowersData.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 card"  >
              <div className="card-body" style={{ border: "2px solid black" }}>
                <h5
                  className="card-title"
                  style={{ color: "#f60640" }}
                >
                  {card.title}
                </h5>
                <h6 className="card-price" >{card.price}</h6>
                <ul className="list-unstyled">
                  {card.description.map((listItem, index) => (
                    <li key={index}>
                      <i className="fa fa-check-circle" style={{ fontSize: '1rem', color: '#f60640;' }}></i> {listItem}
                    </li>
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
