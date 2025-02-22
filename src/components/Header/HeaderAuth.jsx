import React from "react";
import { Space, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const HeaderAuth = () => {
  return (
    <Space size={16}>
      <UserOutlined className="user-icon" />
      <Button className="login-button">Đăng nhập</Button>
      <Button type="primary" className="signup-button">
        Đăng ký
      </Button>
    </Space>
  );
};
