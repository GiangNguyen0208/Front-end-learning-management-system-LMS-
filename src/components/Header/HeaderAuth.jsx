import React from "react";
import { Space, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";

export const HeaderAuth = () => {
  const navigate = useNavigate();
  const handleResgister = () => {
    navigate("sign-up")
  }
  return (
    <Space size={16}>
      {/* <UserOutlined className="user-icon" /> */}
      <Button className="login-button">Đăng nhập</Button>
      <Button 
        type="primary" 
        className="signup-button"
        onClick={handleResgister}
      >
        Đăng ký
      </Button>
    </Space>
  );
};
