import React from "react";
import { Row, Col, Rate, Space, Avatar, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const { Text } = Typography;

const CourseStats = () => {
  return (
    <div className="course-stats">
      <Row gutter={[16, 24]}>
        <Col>
          <Space align="center">
            <Text className="rating-score">4.6</Text>
            <Rate disabled defaultValue={4.6} />
            <Text className="rating-count">(651651 rating)</Text>
            <div className="vertical-divider" />
            <Text>22 Total Hours. 155 Lectures. All levels</Text>
          </Space>
        </Col>
      </Row>

      <Row className="instructor-row" align="middle">
        <Col>
          <Space align="center">
            <Avatar
              size={40}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4db56e8b86a6b6b4f9a8cc848750f178c36beb73315c5621419f9a2bf934f38"
            />
            <Text>
              Created by <Text className="instructor-name">Giang Trương Nguyễn</Text>
            </Text>
          </Space>
        </Col>
      </Row>

      <Row className="languages-row" align="middle">
        <Col>
          <Space align="center">
            <GlobalOutlined />
            <Text>English, Spanish, Italian, German</Text>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CourseStats;
