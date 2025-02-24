import React, { useRef } from "react";
import { Row, Col, Typography } from "antd";
import TestimonialCard from "./TestimonialCard";
import NavigationButtons from "./NavigationButtons";
import { testimonials } from "../js/constantTestimonial";
import { scrollContainer } from "../../../../../utils/helper/scrollContainerHelper";
import "./../css/testimonial.css";

const { Title } = Typography;

const TestimonialsSection = () => {
  const containerRef = useRef(null);

  const handleNavigation = (direction) => {
    scrollContainer(containerRef, direction);
  };

  return (
    <section className="testimonials-section">
      <Row
        className="testimonials-header"
        justify="space-between"
        align="middle"
      >
        <Col>
          <Title
            level={2}
            style={{ margin: 0, fontSize: 24, lineHeight: "34px" }}
          >
            What Our Customer Say About Us
          </Title>
        </Col>
        <Col>
          <NavigationButtons onNavigate={handleNavigation} />
        </Col>
      </Row>

      <div className="testimonials-container" ref={containerRef}>
        <Row gutter={16} wrap={false}>
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TestimonialsSection;
