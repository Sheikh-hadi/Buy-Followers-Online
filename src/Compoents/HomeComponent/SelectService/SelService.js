import React, { useState } from "react";
import "./SelService.css";
import { Col, Row, Button, List, Avatar, Card, Typography } from "antd";
import tikimg from "../../../assets/images/tikImg.png";
const { Title } = Typography;
const SelService = () => {
  const [handleColor, setHandleColor] = useState(true);
  // console.log(handleColor);
  const changeTitle = handleColor ? "Instagram" : "TikTok";

  const descriptionListCard = [
    "Instant Delivery",
    "Real & Active Followers",
    "24/7 Customer Support",
    "No Password Required",
  ];

  let instagramColor = {
    background: "#f51636",
    text: "white",
    border: "2px solid #f51636",
  };

  let tiktokColor = {
    background: "grey",
    text: "black",
  };

  // console.log("tik: ",tikimg)
  const cardFollowersData = [
    {
      key: 1,
      title: `Buy ${changeTitle} Followers`,
      description: descriptionListCard,
      price: "$1.99",
      avaster:
       "https://avatars.dicebear.com/api/human/random.svg",
      link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`,
    },
    {
      key: 2,
      title: `Buy ${changeTitle} Auto Likes`,
      description: descriptionListCard,
      price: "$1.99",
      avaster:
       "https://avatars.dicebear.com/api/human/random.svg",
      link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`,
    },
    {
      key: 3,
      title: `Buy ${changeTitle} Likes`,
      description: descriptionListCard,
      price: "$1.99",
      avaster:
       "https://avatars.dicebear.com/api/human/random.svg",
      link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`,
    },
    {
      key: 4,
      title: `Buy ${changeTitle} Views`,
      description: descriptionListCard,
      price: "$1.99",
      avaster:
       "https://avatars.dicebear.com/api/human/random.svg",
      link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`,
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
          <p className="serv">Select Your Required Service & Enjoy</p>
        </div>
        <div className="button-services">
          <button
            style={{
              color: handleColor ? instagramColor.text : tiktokColor.text,
              backgroundColor: handleColor
                ? instagramColor.background
                : tiktokColor.background,
              border: instagramColor.border,
            }}
            className={`btn-ig ${!handleColor ? "active" : ""}`}
            onClick={handleInstagramColor}
          >
            <i
              className="fab fa-instagram"
              style={{
                color: handleColor ? instagramColor.text : tiktokColor.text,
              }}
            ></i>
            &nbsp;&nbsp;Instagram
          </button>
          <button
            style={{
              color: handleColor ? tiktokColor.text : instagramColor.text,
              backgroundColor: handleColor
                ? tiktokColor.background
                : instagramColor.background,
              border: instagramColor.border,
            }}
            className={`btn-tk ${handleColor ? "active" : ""}`}
            onClick={handleTiktokColor}
          >
            <i
              className="fab fa-tiktok"
              style={{
                color: handleColor ? tiktokColor.text : instagramColor.text,
              }}
            ></i>
            &nbsp;&nbsp;Tiktok
          </button>
        </div>
      </div>
      <Row justify="center" style={{ padding: "5vh 8vw" }} gutter={[30, 24]}>
        {cardFollowersData.map((card, index) => (
          <Col className="card_style" key={index} xs={20} sm={20} md={6} lg={6}>
            <Card
              className="card_inner_style"
              hoverable={true}
              size="small"
              title={<span style={{ color: "#f51636" }}>{card.title}</span>}
            >
              <Title className="ListPrice">{card.price}</Title>
              <List
                bordered={false}
                itemLayout="horizontal"
                dataSource={card.description}
                renderItem={(item) => (
                  <List.Item
                    style={{ padding: "3px", margin: "0", border: "none" }}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={card.avatar} />}
                      title={
                        <span className="listColor" style={{ lineHeight: "1" }}>
                          {item}
                        </span>
                      }
                    />
                  </List.Item>
                )}
              />

              <Button
                onClick={() => handleClick(card.link)}
                size="middle"
                style={{
                  background: "#f51636",
                  borderRadius: "none",
                  color: "whitesmoke",
                  border: "none",
                  marginTop: "10px",
                }}
              >
                Buy Now
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SelService;
