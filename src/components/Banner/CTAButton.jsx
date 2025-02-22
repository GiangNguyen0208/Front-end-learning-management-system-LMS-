import React from "react";
import { Button } from "antd";

const CTAButton = ({ children, ...props }) => (
  <Button
    type="primary"
    size="large"
    {...props}
    style={{
      height: "auto",
      padding: "16px",
      fontSize: "16px",
      fontWeight: 500,
      marginTop: 24,
    }}
  >
    {children}
  </Button>
);

export default CTAButton;