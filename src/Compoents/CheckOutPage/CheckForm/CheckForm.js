import "./CheckForm.css";
import { Col, Row, Form, Input } from "antd";
import {
  UserOutlined,
  MailOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Payment from "../Payment";

const CheckForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row style={{ padding: "0px 10%" }}>
        <Col span={24}>
          <Form
            name="CheckForm"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 600,
              padding: "0 10px",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h4 className="form-section-heading">Customer Information</h4>
            <Form.Item
              name="email"
              hasFeedback
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                  height: "40px",
                }}
                size="large"
                type="email"
                placeholder="Email"
                allowClear
                prefix={
                  <MailOutlined
                    style={{ color: "#F51636", fontSize: "18px" }}
                  />
                }
              />
            </Form.Item>

            <h4 className="form-section-heading">Billing Details</h4>
            <Form.Item
              name="name"
              hasFeedback
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                style={{
                  width: "100%",
                  height: "40px",
                }}
                size="large"
                type="text"
                placeholder="Name"
                allowClear
                prefix={
                  <UserOutlined
                    style={{ color: "#F51636", fontSize: "18px" }}
                  />
                }
              />
            </Form.Item>
            <Form.Item
              name="phone"
              hasFeedback
              rules={[
                { required: true, message: "Please input your phone number!" },
                {
                  pattern: /^[0-9]{11}$/,
                  message: "Please enter a valid phone number!",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                  height: "40px",
                }}
                size="large"
                type="text"
                placeholder="Phone"
                allowClear
                prefix={
                  <PhoneOutlined
                    rotate={180}
                    style={{ color: "#F51636", fontSize: "18px" }}
                  />
                }
              />
            </Form.Item>
            <Form.Item
              name=" postLink"
              hasFeedback
              rules={[
                { required: true, message: "Please input your post link!" },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                  height: "40px",
                }}
                size="large"
                type="text"
                placeholder="Post Link"
                allowClear
                prefix={
                  <HomeOutlined
                    style={{ color: "#F51636", fontSize: "18px" }}
                  />
                }
              />
            </Form.Item>
            <Payment />
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CheckForm;
