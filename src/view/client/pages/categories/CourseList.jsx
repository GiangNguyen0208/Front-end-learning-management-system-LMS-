import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import CourseFilters from './CourseFilters';
import CourseGrid from './CourseGrid';
import './styles.css'
import InstructorSection from './../../components/Instructor/InstructorSection';
import CourseSection from '../../components/Courses/CourseSection';

const { Title } = Typography;

const Categories = () => {
  return (
    <Layout.Content className="course-list-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '24px' }}>
      <Title level={1}>Khóa học</Title>

      <div className="course-section">
        <Title level={2}>All Development Courses</Title>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={6}>
            <CourseFilters />
          </Col>
          <Col xs={24} lg={18}>
            <CourseGrid />
          </Col>
        </Row>
      </div>

      <InstructorSection />
      <CourseSection />
    </Layout.Content>
  );
};

export default Categories;
