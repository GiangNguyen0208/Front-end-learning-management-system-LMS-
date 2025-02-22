import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import SocialLogin from "./SocialLogin";

const SignupForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="signup-form-container">
      <h1 className="signup-title">Create Your Account</h1>

      <Form
        form={form}
        name="signup"
        onFinish={onFinish}
        layout="vertical"
        className="signup-form"
      >
        <Row gutter={30}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Email ID" />
        </Form.Item>

        <Row gutter={30}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Passwords do not match!");
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="create-account-btn"
          >
            Create Account
            <ArrowRightOutlined />
          </Button>
        </Form.Item>
      </Form>

      <div className="signup-divider">
        <span className="divider-line"></span>
        <span className="divider-text">Sign up with</span>
        <span className="divider-line"></span>
      </div>

      <SocialLogin />
    </div>
  );
};

export default SignupForm;
