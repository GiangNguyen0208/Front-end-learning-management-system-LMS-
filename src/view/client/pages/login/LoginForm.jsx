import React from "react";
import { Form, Input, Button, Divider } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="login-form-container">
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        className="login-form"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input placeholder="Username or Email ID" size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Enter Password" size="large" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-button"
            icon={<ArrowRightOutlined />}
          >
            Sign In
          </Button>
        </Form.Item>

        <div className="divider-container">
          <Divider className="login-divider">Sign in with</Divider>
        </div>

        <SocialLogin />
      </Form>
    </div>
  );
};

export default LoginForm;
