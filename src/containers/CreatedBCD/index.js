import React from "react";
import { Button } from "antd";
import { Col, Row, SvgIcon } from "../../components/common";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./index.less";

import cbdImage from '../../assets/images/cbd-img.png';

const CreatedBCD = () => {
  const history = useHistory();
  return (
    <div className="steps-wrapper">
      <Row>
        <Col xs="12">
          <div className="created-card">
            <h1>Congratulations! Your CBDs have been successfully created</h1>
            <p>You can view your created CBD projects in Project Owner Dashboard</p>
            <Button size="large" type="primary">TAKE ME TO HOMEPAGE</Button>
            <img className="right-img" src={cbdImage} alt={cbdImage} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CreatedBCD;
