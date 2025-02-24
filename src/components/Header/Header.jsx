import React from 'react';
import { Layout, Row, Col, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';  // Import icon giỏ hàng
import { HeaderSearch } from './HeaderSearch';
import { HeaderAuth } from './HeaderAuth';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => navigate('/');
  const handleCategory = () => navigate('categories');
  const handleCartClick = () => navigate('shopping-cart');

  return (
    <Layout.Header className="site-header">
      <Row className="header-container" align="middle" justify="center">
        <Col className="logo-section">
          <Space size={16} onClick={handleLogoClick} className="logo-clickable">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e02fb6c9a7eecac5c023060dfa3e98a94c7cbb6ce9c3a4b435fa8f0383a8586d"
              alt="Giant Wisdom Logo"
              className="logo-image"
            />
            <span className="logo-text">
              Giant<br />Wisdom
            </span>
          </Space>
        </Col>

        <Col className="nav-item" onClick={handleCategory}>
          <span>Danh mục</span>
        </Col>

        <Col flex="auto">
          <HeaderSearch />
        </Col>

        <Col className="nav-item">
          <span>Tham gia giảng dạy</span>
        </Col>

        {/* Giỏ hàng */}
        <Col className="cart-icon" onClick={handleCartClick}>
          <ShoppingCartOutlined style={{ fontSize: 22, cursor: 'pointer' }} />
        </Col>

        <Col>
          <HeaderAuth />
        </Col>
      </Row>
      <div className="header-divider" />
    </Layout.Header>
  );
};

export default Header;
