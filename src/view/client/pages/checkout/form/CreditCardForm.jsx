import React from "react";
import { Form, Input, Row, Col } from "antd";

const CreditCardForm = () => {
  return (
    <div className="card-details">
      <Form.Item
        label="Name of Card"
        name="cardName"
        rules={[{ required: true, message: "Please enter card holder name" }]}
      >
        <Input placeholder="Name of card" />
      </Form.Item>

      <Form.Item
        label="Card Number"
        name="cardNumber"
        rules={[{ required: true, message: "Please enter card number" }]}
      >
        <Input placeholder="Card Number" />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Expiry Date"
            name="expiryDate"
            rules={[{ required: true, message: "Please enter expiry date" }]}
          >
            <Input placeholder="MM/YY" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="CVC/CVV"
            name="cvv"
            rules={[{ required: true, message: "Please enter CVV" }]}
          >
            <Input placeholder="CVC" maxLength={4} />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default CreditCardForm;
