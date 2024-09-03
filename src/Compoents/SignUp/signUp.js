import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Form, Button, Input, notification } from "antd";
import handlePostData from "./../../Hooks/usePostHook";
import {
  UserOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  MailOutlined,
} from "@ant-design/icons";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const handleToggle = () => {
    setVisible(!visible);
  };

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      placement: "topRight",
      duration: 5,
    });
  };

  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
      const res = await handlePostData(
        "http://localhost:4000/api/v1/users/register",
        values
      );
      const data = res.data;
      console.log("Response:", res);
      console.log("Data:", data);

      if (res.success) {
        openNotification(
          "success",
          `Dear ${res.data.name}  ID: ${res.data.id}Email: ${res.data.email} Status: ${res.data.status}`,
          res.message
        );
        console.log("Resetting the form fields now");
        form.resetFields();
      } else {
        openNotification("error", "Signup Failed", res.message);
      }
    } catch (error) {
      console.error("Error:", error);
      openNotification(
        "error",
        "Signup Failed",
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
    <Col md={6} className="form-container sign-up">
      <h1 className="create mb-3">Create Account</h1>
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
      form={form}
        name="SignUp-Data"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600, padding: "0 10px" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          hasFeedback
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            placeholder="Name"
            allowClear
            prefix={
              <UserOutlined style={{ color: "#F51636", fontSize: "18px" }} />
            }
          />
        </Form.Item>

        <Form.Item
          name="email"
          hasFeedback
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input
            placeholder="Email"
            allowClear
            prefix={
              <MailOutlined style={{ color: "#F51636", fontSize: "18px" }} />
            }
          />
        </Form.Item>

        <Form.Item
          name="userName"
          hasFeedback
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            placeholder="UserName"
            allowClear
            prefix={
              <UserOutlined style={{ color: "#F51636", fontSize: "18px" }} />
            }
          />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters long!" },
          ]}
        >
          <Input
            type={visible ? "text" : "password"}
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

        <Form.Item
          name="confirmPassword"
          hasFeedback
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input
            type={visible ? "text" : "password"}
            placeholder="Confirm Password"
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
            className="button"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default SignUp;
