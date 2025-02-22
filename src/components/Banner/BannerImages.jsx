import React from "react";
import { Row, Col, Image, Flex } from "antd";

const BannerImages = () => (
  <Flex vertical gap="large">
    <Row gutter={[20, 20]}>
      <Col span={4} xs={24} sm={4}>
        <div
          style={{
            height: 80,
            width: 101,
            marginTop: 176,
            transform: "rotate(-1.43rad)",
            "@media (max-width: 768px)": {
              marginTop: 40,
            },
          }}
        />
      </Col>
      <Col span={8} xs={24} sm={8}>
        <Image
          preview={false}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/94e462f12f46a3fcc2d2a94eb53a59247ab95f6e8df22d880a7df9b07e7903fe?placeholderIfAbsent=true&apiKey=91edb325cc2b4ce5940b1638fa283b2c"
          alt="Decorative element"
          style={{
            width: 183,
            aspectRatio: "1.29",
            objectFit: "contain",
            marginTop: 112,
          }}
        />
      </Col>
      <Col span={12} xs={24} sm={12}>
        <Image
          preview={false}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1521c75445652ffc67e6ad507f33a59bf56fded3a5db1882324e339017b9b01a?placeholderIfAbsent=true&apiKey=91edb325cc2b4ce5940b1638fa283b2c"
          alt="Featured content"
          style={{
            width: "100%",
            aspectRatio: "0.9",
            borderRadius: 543,
            objectFit: "contain",
          }}
        />
      </Col>
    </Row>

    <Flex justify="flex-end">
      <Image
        preview={false}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/42b6ae68a9f41f8ca0a64dadec3a9f4cdf703c362f70ef3564d8e076b506df00?placeholderIfAbsent=true&apiKey=91edb325cc2b4ce5940b1638fa283b2c"
        alt="Additional feature"
        style={{
          width: 349,
          aspectRatio: "1.46",
          borderRadius: 631,
          objectFit: "contain",
        }}
      />
    </Flex>
  </Flex>
);

export default BannerImages;
