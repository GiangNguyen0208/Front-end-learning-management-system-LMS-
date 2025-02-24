import React from "react";
import { Row, Col, Pagination } from "antd";
import CourseCard from "../../components/Courses/CourseCard";

const CourseGrid = () => {
  const allcourses = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4b8bbe735beffd3cbc04eb82bff6a96bb7063923171d2b2385da596c9aef29cc",
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 4.9,
      ratingCount: 1200,
      details: "22 Total Hours. 155 Lectures. Beginner",
      price: 149.9,
    },
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4b8bbe735beffd3cbc04eb82bff6a96bb7063923171d2b2385da596c9aef29cc",
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 4.9,
      ratingCount: 1200,
      details: "22 Total Hours. 155 Lectures. Beginner",
      price: 149.9,
    },{
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4b8bbe735beffd3cbc04eb82bff6a96bb7063923171d2b2385da596c9aef29cc",
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 4.9,
      ratingCount: 1200,
      details: "22 Total Hours. 155 Lectures. Beginner",
      price: 149.9,
    },{
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4b8bbe735beffd3cbc04eb82bff6a96bb7063923171d2b2385da596c9aef29cc",
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 4.9,
      ratingCount: 1200,
      details: "22 Total Hours. 155 Lectures. Beginner",
      price: 149.9,
    },{
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4b8bbe735beffd3cbc04eb82bff6a96bb7063923171d2b2385da596c9aef29cc",
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 4.9,
      ratingCount: 1200,
      details: "22 Total Hours. 155 Lectures. Beginner",
      price: 149.9,
    },{
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4b8bbe735beffd3cbc04eb82bff6a96bb7063923171d2b2385da596c9aef29cc",
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 4.9,
      ratingCount: 1200,
      details: "22 Total Hours. 155 Lectures. Beginner",
      price: 149.9,
    },
  ];

  return (
    <div className="course-grid">
      <Row gutter={[24, 24]}>
        {allcourses.map((course) => (
          <Col xs={24} sm={12} lg={8} key={course.id}>
            <CourseCard {...course} />
          </Col>
        ))}
      </Row>

      <div style={{ textAlign: "center", marginTop: 24 }}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default CourseGrid;
