import React from 'react';
import { Typography, Steps } from 'antd';

const { Title } = Typography;

const CheckoutHeader = ({step}) => {
  return (
    <div className="checkout-header">
      <Title level={3}>Checkout Page</Title>
      <Steps
        current={step}
        items={[
          { title: 'Details' },
          { title: 'Shopping Cart' },
          { title: 'Checkout' },
        ]}
      />
    </div>
  );
};

export default CheckoutHeader;
