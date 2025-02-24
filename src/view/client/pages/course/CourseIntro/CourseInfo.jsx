import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const CourseInfo = () => {
  return (
    <div className="course-info">
      <Title level={1} className="course-title">
        Introduction to User Experience Design
      </Title>
      <Paragraph className="course-description">
        This course is meticulously crafted to provide you with a foundational
        understanding of the principles, methodologies, and tools that drive
        exceptional user experiences in the digital landscape.
      </Paragraph>
    </div>
  );
};

export default CourseInfo;
