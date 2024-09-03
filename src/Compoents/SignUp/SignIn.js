import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "../LogIn/Login.css";
import { Form, Input, Button, notification } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import handlePostData from "../../Hooks/usePostHook";
const SignIn = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      placement: "topRight",
      duration: 5,
    });
  };

  const handleToggle = () => {
    setVisible(!visible);
  };
  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
      const res = await handlePostData(
        "http://localhost:4000/api/v1/users/login",
        values
      );
      console.log("Response:", res);

      if (res.success) {
        openNotification("success", `Dear ${values.name}`, res.message);
      } else {
        openNotification("error", "Sign in Failed", res.message);
      }
      form.resetFields();
    } catch (error) {
      console.error("Error:", error);
      openNotification(
        "error",
        "Sign in Failed",
        "An unexpected error occurred."
      );
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Error Info:", errorInfo);

    const errorMessages = errorInfo.errorFields
      .map((field) => field.errors.join("\n\n"))
      .join("\n\n");

    openNotification("error", "Signup Failed", errorMessages);
  };

  return (
    <Col md={6} className="form-container sign-in">
      <h1 className="login-heading">Sign In</h1>
      <div className="social-icons-login">
        <a href="/" className="icon">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="/" className="icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="/" className="icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      <Form
        name="SignIn"
        autoComplete="off"
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
      >
        <Form.Item
          rules={[
            { required: true, message: "Please input your email!" },
            {
              type: "email",
              message: "Please enter a valid email address.",
            },
          ]}
          name="email"
          hasFeedback
        >
          <Input
            type="email"
            placeholder="Email"
            allowClear
            prefix={
              <MailOutlined style={{ color: "#F51636", fontSize: "18px" }} />
            }
          />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your password!" }]}
          name="password"
          hasFeedback
        >
          <Input
            type="password"
            placeholder="Password"
            allowClear
            suffix={
              visible ? (
                <EyeOutlined
                  style={{ color: "#F51636", fontSize: "18px" }}
                  onClick={handleToggle}
                />
              ) : (
                <EyeInvisibleOutlined
                  style={{ color: "#F51636", fontSize: "18px" }}
                  onClick={handleToggle}
                />
              )
            }
          />
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            style={{
              backgroundColor: "#F51636",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
            htmlType="submit"
            block
            classNames="button"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default SignIn;
