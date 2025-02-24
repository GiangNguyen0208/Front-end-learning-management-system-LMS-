import React from "react";
import { Form, Input, Row, Col } from "antd";

const AddressForm = () => {
  return (
    <Row gutter={16}>
      <Col xs={24} md={12}>
        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please enter your country" }]}
        >
          <Input placeholder="Enter Country" />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item
          label="State/Union Territory"
          name="state"
          rules={[{ required: true, message: "Please enter your state" }]}
        >
          <Input placeholder="Enter State" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default AddressForm;
