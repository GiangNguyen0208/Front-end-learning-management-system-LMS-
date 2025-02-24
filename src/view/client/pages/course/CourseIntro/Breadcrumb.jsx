import React from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";

const Breadcrumb = () => {
  return (
    <AntBreadcrumb
      separator={<RightOutlined className="breadcrumb-separator" />}
      className="course-breadcrumb"
    >
      <AntBreadcrumb.Item>Home</AntBreadcrumb.Item>
      <AntBreadcrumb.Item>Categories</AntBreadcrumb.Item>
      <AntBreadcrumb.Item className="current">
        Introduction to User Experience Design
      </AntBreadcrumb.Item>
    </AntBreadcrumb>
  );
};

export default Breadcrumb;
