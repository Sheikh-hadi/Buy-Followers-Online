import { Col, Row, Typography } from "antd";
import "./IconCard.css";
const { Title } = Typography;

const IconCard = ({ iconCardArray }) => {
  // console.log("IconCardArray In IconCard: ", iconCardArray);

  // const iconCardArray = [
  //   {
  //     icon: "fas fa-users",
  //     text: "Active Users"
  //   },
  //   {
  //     icon: "fas fa-headset",
  //     text: "Live Support"
  //   },
  //   {
  //     icon: "fas fa-key",
  //     text: "Safe and Secure"
  //   },
  //   {
  //     icon: "fas fa-money-check-alt",
  //     text: "Secure Payment"
  //   },
  // ];
  return (
    <Row
      style={{ margin: "4vh 5vw" }}
      className="iconCard"
      gutter={16}
      justify="center"
      align="middle"
    >
      {iconCardArray.map((icon, index) => {
        return (
          <Col xs={12} sm={12} md={6} lg={6} style={{ textAlign: "center" }}>
            <i
              className={icon.icon}
              style={{
                fontSize: "50px",
                color: "white",
              }}
            ></i>
            <Title style={{ color: "white" }} level={5}>
              {icon.text}
            </Title>
          </Col>
        );
      })}
      {/* <Col xs={12} sm={12} md={6} lg={6} style={{ textAlign: 'center' }}>
        <UserOutlined style={{
          padding: "10px",
          fontSize: "50px",
          color: "white"
        }} />
        <Title style={{ color: "white" }} level={5}>Active Users</Title>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} style={{ textAlign: 'center' }}>
        <CustomerServiceOutlined style={{
          padding: "10px",
          fontSize: "50px",
          color: "white"
        }} />
        <Title style={{ color: "white" }} level={5}>Live Support</Title>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} style={{ textAlign: 'center' }}>
        <CreditCardOutlined style={{
          padding: "10px",
          fontSize: "50px",
          color: "white"
        }} />
        <Title style={{ color: "white" }} level={5}>Safe and Secure</Title>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} style={{ textAlign: 'center' }}>
        <KeyOutlined style={{
          padding: "10px",
          fontSize: "50px",
          color: "white"
        }} />
        <Title style={{ color: "white" }} level={5}>Secure Payment</Title>
      </Col> */}
    </Row>
  );
};

export default IconCard;
