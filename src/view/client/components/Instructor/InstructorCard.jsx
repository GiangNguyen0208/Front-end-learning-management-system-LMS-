import React from "react";
import { Row, Col, Card, Typography, Rate, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import './styles.css';

const { Title, Text } = Typography;

const InstructorCard = ({ avatar, name, role, rating, students }) => (
  <Card className="instructor-card">
    <div className="instructor-avatar">
      <Avatar size={120} src={avatar} />
    </div>
    <div className="instructor-info">
      <Title level={4}>{name}</Title>
      <Text className="role">{role}</Text>
      <div className="divider" />
      <div className="stats">
        <div className="rating">
          <Rate disabled defaultValue={rating} />
          <Text>{rating}</Text>
        </div>
        <Text className="students">{students} Students</Text>
      </div>
    </div>
  </Card>
);

const Instructors = () => {
  const instructors = [
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/739e39af41c116f8a883560ef7175c0334e0d3066cf64623f32d5e83dfab14b3",
      name: "Giang Trương Nguyễn",
      role: "Full-Stack Developer",
      rating: 4.9,
      students: "2400",
    },
    {
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/739e39af41c116f8a883560ef7175c0334e0d3066cf64623f32d5e83dfab14b3",
        name: "Giang Trương Nguyễn",
        role: "Full-Stack Developer",
        rating: 4.9,
        students: "2400",
      },
      {
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/739e39af41c116f8a883560ef7175c0334e0d3066cf64623f32d5e83dfab14b3",
        name: "Giang Trương Nguyễn",
        role: "Full-Stack Developer",
        rating: 4.9,
        students: "2400",
      },
      {
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/739e39af41c116f8a883560ef7175c0334e0d3066cf64623f32d5e83dfab14b3",
        name: "Giang Trương Nguyễn",
        role: "Full-Stack Developer",
        rating: 4.9,
        students: "2400",
      },
    // Add more instructors
  ];

  return (
    <div className="instructors-section">
      <div className="section-header">
        <Title level={2}>Top Giảng Viên</Title>
        <Button type="link">See All</Button>
      </div>

      <Row gutter={[32, 32]}>
        {instructors.map((instructor, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <InstructorCard {...instructor} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Instructors;
