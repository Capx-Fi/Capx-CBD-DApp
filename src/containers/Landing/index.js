import React from "react";
import {  Button } from "antd";
import { Col, Row, SvgIcon } from "../../components/common";
import "./index.less";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="left-card">
        <h1>Vest tokens in 2 simple steps</h1>
        <ul>
          <li>1. Enter your Project Details {"&"} Upload Vesting Sheet</li>
          <li>2. Review and Approve Vesting Sheet</li>
        </ul>
        <Button className="siffix-icon" type="primary" size="large" icon={<SvgIcon name="arrow-right" viewbox="0 0 16.715 11.765" />}>BEGIN VESTING</Button>
      </div>
      <div className="right-card">
        <div className="download-xlsx">
          <SvgIcon name="download-icon" viewbox="0 0 43.34 42.84" />
          <h4>Capx Vesting Sheet Template.xlsx</h4>
        </div>
        <h3>Download Vesting Sheet Template</h3>
        <p>
          To proceed further with an error-free vesting experience we recommend adding the token details in the following template.
        </p>
      </div>
    </div>
  );
};

export default Landing;
