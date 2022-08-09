import React from "react";
import { Button, Upload, message, Divider, Input } from "antd";
import { Col, Row, SvgIcon } from "../../components/common";
import { Link, useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./index.less";

const CustomizeCBD = () => {

  const history = useHistory();

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="steps-wrapper">
      <Row>
        <Col xs="9">
          <div className="steps-head">
            <h1>Customize your CBDs</h1>
          </div>
          <div className="steps-body">
            <ul className="customizecbd-list">
              <li>
                <h4>BATCH 01</h4>
                <hr />
                <p>
                  Price : $100 <br />
                  Allocation : 5000 CBDS <br />
                  Min. Promised Returns : 100% <br />
                  Locking Period : 1 year
                </p>
                <hr />
                <h4 className="pt-3">UPLOAD / ADD IMAGES</h4>
                <p>
                  This determines how your CBD will look on the Solana Blockchain
                </p>
                <div className="bottom-section">
                  <Upload {...props}>
                    <Button className="upload-btn" icon={<SvgIcon name="upload-icon" viewbox="0 0 20 20" />}>Select an Image</Button>
                  </Upload>
                  <Divider orientation="left">or</Divider>
                  <Input placeholder="Enter an IPFS folder link with images" />
                </div>
              </li>
              <li>
                <h4>BATCH 02</h4>
                <hr />
                <p>
                  Price : $100 <br />
                  Allocation : 5000 CBDS <br />
                  Min. Promised Returns : 100% <br />
                  Locking Period : 1 year
                </p>
                <hr />
                <h4 className="pt-3">UPLOAD / ADD IMAGES</h4>
                <p>
                  This determines how your CBD will look on the Solana Blockchain
                </p>
                <div className="bottom-section">
                  <Upload {...props}>
                    <Button className="upload-btn" icon={<SvgIcon name="upload-icon" viewbox="0 0 20 20" />}>Select an Image</Button>
                  </Upload>
                  <Divider orientation="left">or</Divider>
                  <Input placeholder="Enter an IPFS folder link with images" />
                </div>
              </li>
            </ul>
          </div>
          <div className="steps-footer">
            <div className="footer-action">
              <Link to="/configure-programmable">BACK</Link>
              <Button
                htmlType="submit"
                className="suffix-icon next-btn"
                type="primary"
                onClick={() => history.push("/review-cbd")}
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
