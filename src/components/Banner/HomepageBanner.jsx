import React from "react";
import { Layout, Row, Col } from "antd";
import BannerContent from "./BannerContent";
import BannerImages from "./BannerImages";

const { Content } = Layout;

const HomepageBanner = () => (
  <Content
    style={{
      padding: "40px 80px 24px",
      background: "#fff",
      overflow: "hidden",
    }}
  >
    <Row gutter={[20, 20]}>
      <Col
        xs={24}
        md={12}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <BannerContent />
      </Col>
      <Col xs={24} md={12}>
        <BannerImages />
      </Col>
    </Row>
  </Content>
);

export default HomepageBanner;
