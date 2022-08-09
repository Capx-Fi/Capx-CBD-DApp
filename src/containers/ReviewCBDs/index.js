import React, { useEffect } from "react";
import { Button, Form, Input, Table, Tooltip } from "antd";
import { Col, Row, SvgIcon } from "../../components/common";
import { Link, useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./index.less";

import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import Image4 from "../../assets/images/image4.jpg";
import Image5 from "../../assets/images/image5.jpg";
import Image6 from "../../assets/images/image6.jpg";
import Image7 from "../../assets/images/image7.jpg";

const ReviewCBD = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const history = useHistory();

  const columns = [
    {
      title: "SR.NO",
      dataIndex: "sr_no",
      key: "sr_no",
    },
    {
      title: (
        <div className="titlewith-tooltip">
          IMAGE
          <Tooltip placement="top" title="text">
            <SvgIcon name="info" viewbox="0 0 17.5 17.5" />
          </Tooltip>
        </div>
      ),
      dataIndex: "image",
      key: "image",
      render: (t, r) => <img className="cbdimage" src={`${r.image}`} />
    },
    {
      title: (
        <div className="titlewith-tooltip">
          LOCKING PERIOD
          <Tooltip placement="top" title="text">
            <SvgIcon name="info" viewbox="0 0 17.5 17.5" />
          </Tooltip>
        </div>
      ),
      dataIndex: "locking_period",
      key: "locking_period",
    },
    {
      title: (
        <div className="titlewith-tooltip">
          PRICE
          <Tooltip placement="top" title="text">
            <SvgIcon name="info" viewbox="0 0 17.5 17.5" />
          </Tooltip>
        </div>
      ),
      dataIndex: "price",
      key: "price",
    },
    {
      title: (
        <div className="titlewith-tooltip">
          MIN. PROMISED RETURNS
          <Tooltip placement="top" title="text">
            <SvgIcon name="info" viewbox="0 0 17.5 17.5" />
          </Tooltip>
        </div>
      ),
      dataIndex: "minpromised_return",
      key: "minpromised_return",
    },
    {
      title: (
        <div className="titlewith-tooltip">
          BATCH
          <Tooltip placement="top" title="text">
            <SvgIcon name="info" viewbox="0 0 17.5 17.5" />
          </Tooltip>
        </div>
      ),
      dataIndex: "batch",
      key: "batch",
    },
  ];
  var data = [
    {
      key: "1",
      sr_no: "01",
      image: Image1,
      locking_period: "1 year",
      price: "100$",
      minpromised_return: "100%",
      batch: "01"
    },
    {
      key: "2",
      sr_no: "02",
      image: Image2,
      locking_period: "1 year",
      price: "100$",
      minpromised_return: "100%",
      batch: "01"
    },
    {
      key: "3",
      sr_no: "03",
      image: Image3,
      locking_period: "1 year",
      price: "100$",
      minpromised_return: "100%",
      batch: "01"
    },
    {
      key: "4",
      sr_no: "04",
      image: Image4,
      locking_period: "1 year",
      price: "100$",
      minpromised_return: "100%",
      batch: "01"
    },
    {
      key: "5",
      sr_no: "05",
      image: Image5,
      locking_period: "1 year",
      price: "100$",
      minpromised_return: "100%",
      batch: "01"
    },
    {
      key: "6",
      sr_no: "06",
      image: Image6,
      locking_period: "1 year",
      price: "100$",
      minpromised_return: "100%",
      batch: "01"
    },
    {
      key: "7",
      sr_no: "07",
      image: Image7,
      locking_period: "1 year",
      price: "100$",
      minpromised_return: "100%",
      batch: "01"
    },
  ];
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="steps-wrapper">
      <Row>
        <Col xs="9">
          <div className="steps-head">
            <h1>Review your CBDs</h1>
          </div>
          <div className="steps-body">
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
            >
              <Row>
                <Col sm="12">
                  <Table
                    className="common-table reviewcbd-table"
                    pagination={false}
                    columns={columns}
                    dataSource={data}
                  />
                </Col>
              </Row>
            </Form>
          </div>

          <div className="steps-footer">
            <div className="footer-action">
              <Link to="/">BACK</Link>
              <Button
                htmlType="submit"
                className="suffix-icon next-btn"
                type="primary"
                onClick={() => history.push("/created-cbd")}
                icon={
                  <SvgIcon name="arrow-right" viewbox="0 0 16.715 11.765" />
                }
              >
                CREATE CBDs
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ReviewCBD;
