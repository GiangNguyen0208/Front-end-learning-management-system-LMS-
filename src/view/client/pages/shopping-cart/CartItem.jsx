import React from "react";
import { Card, Typography, Rate, Divider } from "antd";
import styles from "./ShoppingCart.module.css";

const { Text, Title } = Typography;

const CartItem = ({ item }) => {
  return (
    <Card className={styles.cartItem}>
      <div className={styles.cartItemContent}>
        <div className={styles.itemDetails}>
          <img
            src={item.image}
            alt={item.title}
            className={styles.courseImage}
          />
          <div className={styles.courseInfo}>
            <Title level={4}>{item.title}</Title>
            <Text type="secondary">{item.instructor}</Text>

            <div className={styles.ratingContainer}>
              <Text className={styles.rating}>{item.rating}</Text>
              <Rate disabled defaultValue={4.5} className={styles.stars} />
              <Text type="secondary">({item.totalRatings} rating)</Text>
              <Divider type="vertical" />
              <Text>{`${item.duration}. ${item.lectures}. ${item.level}`}</Text>
            </div>

            <div className={styles.actions}>
              <Text type="primary" className={styles.actionLink}>
                Save for later
              </Text>
              <Divider type="vertical" />
              <Text type="danger" className={styles.actionLink}>
                Remove
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.price}>
          <Text strong>{item.price}</Text>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;