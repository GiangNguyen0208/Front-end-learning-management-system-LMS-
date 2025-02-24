import React from "react";
import { Typography, Row, Col, Button } from "antd";
import InstructorCard from "../../components/Instructor/InstructorCard";
import "./styles.css";

const { Title } = Typography;

const instructors = [
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/739e39af41c116f8a883560ef7175c0334e0d3066cf64623f32d5e83dfab14b3",
    name: "Giang Trương Nguyễn",
    role: "Full-Stack Developer",
    rating: 4.9,
    students: 2400,
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/739e39af41c116f8a883560ef7175c0334e0d3066cf64623f32d5e83dfab14b3",
    name: "Trần Văn Nam",
    role: "Data Scientist",
    rating: 4.8,
    students: 3200,
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/739e39af41c116f8a883560ef7175c0334e0d3066cf64623f32d5e83dfab14b3",
    name: "Lê Hồng Sơn",
    role: "AI Engineer",
    rating: 4.7,
    students: 2800,
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/739e39af41c116f8a883560ef7175c0334e0d3066cf64623f32d5e83dfab14b3",
    name: "Phạm Quốc Bảo",
    role: "Mobile Developer",
    rating: 4.9,
    students: 2600,
  },
];

const InstructorSection = () => {
  return (
    <section className="instructor-section">
      <div className="section-header">
        <Title level={2}>Top Giảng Viên</Title>
        <Button type="link">See All</Button>
      </div>

      <Row gutter={[24, 24]}>
        {instructors.map((instructor, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <InstructorCard {...instructor} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default InstructorSection;
