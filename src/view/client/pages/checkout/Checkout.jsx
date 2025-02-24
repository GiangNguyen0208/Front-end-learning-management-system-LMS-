import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import CheckoutHeader from './CheckoutHeader';
import AddressForm  from './form/AddressForm';
import PaymentMethodForm from './form/PaymentMethodForm';
import OrderSummary  from './summary/OrderSummary';
import './styles.css';

const Checkout = () => {
  return (
    <Layout.Content className="checkout-container">
      <CheckoutHeader step={2} />

      <Row gutter={24} className="checkout-content">
        <Col xs={24} lg={16}>
          <Card className="checkout-form-card">
            <AddressForm />
            <PaymentMethodForm />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <OrderSummary />
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Checkout;
