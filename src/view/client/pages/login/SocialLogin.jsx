import React from "react";
import { Row, Col, Button } from "antd";

const SocialLogin = () => {
  const socialButtons = [
    {
      name: "Facebook",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/385806829864cf070d609ceee558ce9c8200c07be14e9cd19b58c6c07df7921a",
      color: "#0866FF",
    },
    {
      name: "Google",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/15c82f624fba42277d6a5656c8841638e187c639be32487698c3e4c9ad813ddc",
      color: "#EA4335",
    },
    {
      name: "Microsoft",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31a6c75cd021e08df347aeec03bacc7ca7d6c2e2e4088e86512512a5253ec922",
      color: "#000000",
    },
  ];

  return (
    <Row gutter={[15, 15]} className="social-login-container">
      {socialButtons.map((button) => (
        <Col xs={24} md={8} key={button.name}>
          <Button
            className="social-button"
            style={{
              backgroundColor: button.color,
              color: "#fff",
              width: "100%",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontSize: "16px",
              fontWeight: "500",
            }}
            icon={<img src={button.icon} alt={button.name} className="social-icon" />}
          >
            {button.name}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default SocialLogin;
