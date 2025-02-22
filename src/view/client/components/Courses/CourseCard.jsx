import React from "react";
import { Row, Col, Card, Typography, Rate, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import './styles.css';


const { Title, Text } = Typography;
const { Meta } = Card;

const CourseCard = ({
  image,
  title,
  instructor,
  rating,
  ratingCount,
  duration,
  level,
  price,
}) => (
  <Card className="course-card" cover={<img alt={title} src={image} />}>
    <Meta
      title={title}
      description={
        <div className="course-details">
          <Text className="instructor">{instructor}</Text>
          <div className="rating-container">
            <Rate disabled defaultValue={rating} />
            <Text className="rating-count">({ratingCount} Ratings)</Text>
          </div>
          <Text className="duration">
            <ClockCircleOutlined /> {duration} • {level}
          </Text>
          <Text className="price">{price}</Text>
        </div>
      }
    />
  </Card>
);

const Courses = () => {
  const courses = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9afc139762e1139de728f99c3c87a545ae0f11dd6ad6fbee618809cbbdbab3b1",
      title: "Spring Boot for Beginner's",
      instructor: "Giang Trương Nguyễn",
      rating: 4.5,
      ratingCount: "1200",
      duration: "22 Total Hours • 155 Lectures",
      level: "Beginner",
      price: "2.300.000 VNĐ",
    },
    {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/9afc139762e1139de728f99c3c87a545ae0f11dd6ad6fbee618809cbbdbab3b1",
        title: "Spring Boot for Beginner's",
        instructor: "Giang Trương Nguyễn",
        rating: 4.5,
        ratingCount: "1200",
        duration: "22 Total Hours • 155 Lectures",
        level: "Beginner",
        price: "2.300.000 VNĐ",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/9afc139762e1139de728f99c3c87a545ae0f11dd6ad6fbee618809cbbdbab3b1",
        title: "Spring Boot for Beginner's",
        instructor: "Giang Trương Nguyễn",
        rating: 4.5,
        ratingCount: "1200",
        duration: "22 Total Hours • 155 Lectures",
        level: "Beginner",
        price: "2.300.000 VNĐ",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/9afc139762e1139de728f99c3c87a545ae0f11dd6ad6fbee618809cbbdbab3b1",
        title: "Spring Boot for Beginner's",
        instructor: "Giang Trương Nguyễn",
        rating: 4.5,
        ratingCount: "1200",
        duration: "22 Total Hours • 155 Lectures",
        level: "Beginner",
        price: "2.300.000 VNĐ",
      },
    // Add more courses with similar structure
  ];

  return (
    <div className="courses-section">
      <div className="section-header">
        <Title level={2}>Top Khóa học</Title>
        <Button type="link">See All</Button>
      </div>

      <Row gutter={[32, 32]}>
        {courses.map((course, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <CourseCard {...course} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
