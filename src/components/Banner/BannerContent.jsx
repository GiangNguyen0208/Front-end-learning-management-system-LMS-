import React from "react";
import { Typography, Space } from "antd";
import CTAButton from "./CTAButton";

const { Title, Paragraph } = Typography;

const BannerContent = () => (
  <Space
    direction="vertical"
    size={16}
    style={{
      display: "flex",
      maxWidth: 592,
    }}
  >
    <Title
      level={1}
      style={{
        fontSize: 36,
        fontWeight: "bold",
        letterSpacing: "-0.02em",
        lineHeight: "56px",
        color: "#1f2937",
        margin: 0,
      }}
    >
      Đánh thức tiềm năng cùng GiantWisdom
    </Title>

    <Paragraph
      style={{
        fontSize: 16,
        color: "#6b7280",
        margin: 0,
      }}
    >
      Chào mừng bạn đến với GiantWisdom, nơi học tập không có giới hạn. Chúng
      tôi tin rằng giáo dục là chìa khóa cho sự phát triển cá nhân và chuyên
      nghiệp, và chúng tôi ở đây để hư��ng dẫn bạn trên hành trình đi đến thành
      công. Cho dù bạn là sinh viên, người đi làm hay người học suốt đời, Hệ
      thống Quản lý Học tập tiên tiến của chúng tôi được thiết kế để nâng cao
      trải nghiệm học tập của bạn.
    </Paragraph>

    <CTAButton>Bắt đầu hành trình giảng dạy của bạn.</CTAButton>
  </Space>
);

export default BannerContent;
