import React from 'react';
import { Row, Col, Typography } from 'antd';
import LoginForm from './LoginForm';
import './styles.css';

const { Title } = Typography;

const Login = () => {
  return (
    <div className="login-container">
      <Row gutter={20}>
        <Col xs={24} md={12}>
          <div className="login-content">
            <Title level={2} className="login-title">
              Sign in to your account
            </Title>
            <LoginForm />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <img
            className="login-image"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/892739c60fec2bed61b67e672a5532125a75fa285f262e4a37e7fd90f376036a"
            alt="Login illustration"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
