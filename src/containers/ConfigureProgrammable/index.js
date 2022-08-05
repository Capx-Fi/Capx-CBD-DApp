import React, { useState } from "react";
import { Button, Badge, Form, Input, Table, Tooltip } from "antd";
import { Col, Row, SvgIcon } from "../../components/common";
import DatePicker from "react-datepicker";
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./index.less";


const ConfigureProgrammable = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const columns = [
    {
      title: 'SR.NO',
      dataIndex: 'sr_no',
      key: 'sr_no',
    },
    {
      title: <>UNLOCK DATE {"&"} TIME <Tooltip placement="top" title="text"><SvgIcon name="info" viewbox="0 0 17.5 17.5" /></Tooltip></>,
      dataIndex: 'date_time',
      key: 'date_time',
      render: () => <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
        ]}
        dateFormat="d MMMM, yyyy h:mm aa"
      />,
    },
    {
      title: 'MIN. PROMISED RETURNS',
      dataIndex: 'promised_return',
      key: 'promised_return',
      render: () => <Input placeholder="Enter % return" />,
    },
    {
      title: 'ALLOT NO. OF CBDs',
      dataIndex: 'allot_no',
      key: 'allot_no',
      render: () => <Input placeholder="Allot no. of CBDs" suffix={<Badge text="MAX" />} />,
    },
    {
      title: 'LOCK?',
      dataIndex: 'lock',
      key: 'lock',
      render: () => <Button className="prefix-icon" shape="round" icon={<SvgIcon name="lock" viewbox="0 0 16.4 22.125" />}>Lock</Button>,
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
                  <Table className="common-table" pagination={false} columns={columns} dataSource={data} />
                </Col>
              </Row>
            </Form>
          </div>
          <div className="steps-footer">
            <div className="footer-action">
              <Link to="/">BACK</Link>
              <Button htmlType="submit" className="suffix-icon next-btn" type="primary" icon={<SvgIcon name="arrow-right" viewbox="0 0 16.715 11.765" />}>Next (2/3)</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ConfigureProgrammable;