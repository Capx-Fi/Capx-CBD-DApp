import React from "react";
import { Button, Form, Input } from "antd";
import { Col, Row, SvgIcon } from "../../components/common";
import "./index.less";
import { Link } from "react-router-dom";

const ConfigureProgrammable = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const columns = [
    {
      title: 'SR.NO',
      dataIndex: 'sr_no',
      key: 'sr_no',
    },
    {
      title: <>UNLOCK DATE {"&"} TIME</>,
      dataIndex: 'date_time',
      key: 'date_time',
      render: text => <a>{text}</a>,
    },
  ];
  const data = [
    {
      key: '1',
    },
  ];
  return (
    <div className="steps-wrapper">
      <Row>
        <Col xs="9">
          <div className="steps-head">
            <h1>Configure Programmable Lock</h1>
          </div>
          <div className="steps-body">
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
            >
              <Row>
                <Col sm="12">
                  <Table columns={columns} dataSource={data} />
                </Col>
              </Row>
            </Form>
          </div>
          <div className="steps-footer">
            <div className="footer-action">
              <Link to="/">BACK</Link>
              <Button htmlType="submit" className="siffix-icon next-btn" type="primary" icon={<SvgIcon name="arrow-right" viewbox="0 0 16.715 11.765" />}>Next (2/3)</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ConfigureProgrammable;