import React from "react";
import { Button, Form, Input } from "antd";
import { Col, Row, SvgIcon } from "../../components/common";
import "./index.less";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="steps-wrapper">
      <Row>
        <Col xs="9">
          <div className="steps-head">
            <h1>Enter project details for your Community Bonds</h1>
          </div>
          <div className="steps-body">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Row>
                <Col sm="6">
                  <Form.Item
                    name="project_name"
                    rules={[{ required: true, message: false }]}
                  >
                    <Input placeholder="Enter project name *" />
                  </Form.Item>
                </Col>
                <Col sm="6">
                  <Form.Item
                    name="communitybond"
                    rules={[{ required: true, message: false }]}
                  >
                    <Input placeholder="Total no. of Community Bonds to sell *" />
                  </Form.Item>
                </Col>
                <Col sm="6">
                  <Form.Item
                    name="amount"
                    rules={[{ required: true, message: false }]}
                  >
                    <Input placeholder="Total amount to be raised *" />
                    <div className="hint-text">Add numbers without the $ (dollar) symbol</div>
                  </Form.Item>
                </Col>
                <Col sm="6">
                  <Form.Item
                    name="price"
                    rules={[{ required: true, message: false }]}
                  >
                    <Input suffix={<span className="percbd-tag">per CBD</span>} placeholder="Price per CBD *" />
                    <div className="hint-text">Add numbers without the $ (dollar) symbol</div>
                  </Form.Item>
                </Col>
                <Col sm="6">
                  <Form.Item
                    name="amount"
                    rules={[{ required: true, message: false }]}
                  >
                    <Input placeholder="Total no. of Community Bonds to sell *" />
                    <div className="hint-text">
                      <SvgIcon name="info" viewbox="0 0 17.5 17.5" />
                      How is this calculated?
                    </div>
                  </Form.Item>
                </Col>
                <Col sm="6">
                  <Button htmlType="submit" className="suffix-icon next-btn" type="primary" icon={<SvgIcon name="arrow-right" viewbox="0 0 16.715 11.765" />} block>Next (1/3)</Button>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="steps-footer">
            <div className="footer-action">
              <Link to="/">BACK</Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetails;