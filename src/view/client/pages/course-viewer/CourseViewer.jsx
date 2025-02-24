import React from 'react';
import { Layout, Typography, Card } from 'antd';
import CourseSection from './CourseSection';
import './styles.css';

const { Content } = Layout;
const { Title } = Typography;

const CourseViewer = () => {
  const courseData = {
    title: "Introduction to User Experience Design",
    sections: [
      {
        title: "Introduction to UX Design",
        isActive: true,
        chapters: [
          {
            number: "1",
            title: "What is User Experience (UX) Design?",
            duration: "4min",
            isCompleted: true
          },
          {
            number: "2",
            title: "Historical Overview of UX Design",
            duration: "4min",
            isCompleted: true
          },
          {
            number: "3",
            title: "Understanding User-Centered Design",
            duration: "4min",
            isActive: true
          },
          {
            number: "4",
            title: "The Role of UX Design in Digital Products",
            duration: "4min",
            isCompleted: false
          },
          {
            number: "5",
            title: "Introduction to UX Design Tools and Techniques",
            duration: "4min",
            isCompleted: false
          }
        ]
      },
      {
        title: "Basics of User-Centered Design",
        isActive: false,
        chapters: []
      },
      {
        title: "Elements of User Experience",
        isActive: false,
        chapters: []
      },
      {
        title: "Visual Design Principles",
        isActive: false,
        chapters: []
      }
    ]
  };

  return (
    <Layout className="course-viewer">
      <Content className="course-content">
        <Title level={2} className="course-title">
          {courseData.title}
        </Title>
        <div className="course-layout">
          <div className="video-section">
            <div className="video-player">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f649cbe18fe999fa6d048972936d6c31fe727e177978293d799656d85d16b0f"
                alt="Course video"
                className="video-background"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32961767e8b9bec5c4b4601ef945693be0f3cbaa941a27dbda2fac0376ea946d"
                alt="Play button"
                className="play-button"
              />
            </div>
          </div>
          <div className="course-progress">
            <Card className="progress-card">
              <Title level={3} className="progress-title">
                Course Completion
              </Title>
              {courseData.sections.map((section, index) => (
                <CourseSection
                  key={index}
                  section={section}
                />
              ))}
            </Card>
          </div>
        </div>
      </Content>
      
    </Layout>
  );
};

export default CourseViewer;
