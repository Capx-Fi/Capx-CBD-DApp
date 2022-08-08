import React, { useEffect, useState } from "react";
import { Button, Badge, Form, Input, Table, Tooltip } from "antd";
import { Col, Row, SvgIcon } from "../../components/common";

import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./index.less";

const CustomizeCBD = () => {
  return (
    <div className="steps-wrapper">
      <Row>
        <Col xs="9">
          <div className="steps-head">
            <h1>Customize your CBDs</h1>
          </div>
          <div className="steps-body"></div>

          <div className="steps-footer">
            <div className="footer-action">
              <Link to="/configure-programmable">BACK</Link>
              <Button
                htmlType="submit"
                className="suffix-icon next-btn"
                type="primary"
                icon={
                  <SvgIcon name="arrow-right" viewbox="0 0 16.715 11.765" />
                }
              >
                PREVIEW
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomizeCBD;
