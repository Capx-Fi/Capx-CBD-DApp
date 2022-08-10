import React from "react";
import { Button } from "antd";
import { Col, Row, SvgIcon } from "../../components/common";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./index.less";

import cbdImage from "../../assets/images/cbd-img.png";
import useCapxWalletConnection from "../../useCapxWalletConnection";

const ConnectWallet = () => {
  const {
    active,
    phantomDisconnect,
    phantomPublicKey,
    hasPhantom,
    phantomConnect,
  } = useCapxWalletConnection();
  const history = useHistory();
  return (
    <div className="steps-wrapper">
      <Row>
        <Col xs="12">
          <div className="created-card">
            {hasPhantom ? (
              <>
                <h1>Connect your Wallet</h1>
                <p>Connect your Phantom Wallet to Continue.</p>
              </>
            ) : (
              <>
                <h1>Wallet not Detected</h1>
                <p>Get Phantom and Connect your wallet to Continue</p>
              </>
            )}
            {hasPhantom ? (
              <Button
                size="large"
                onClick={() => phantomConnect()}
                type="primary"
              >
                Connect Wallet
              </Button>
            ) : (
              <Button
                size="large"
                onClick={() => window.open("https://phantom.app/")}
                type="primary"
              >
                Get Phantom
              </Button>
            )}
            <img className="right-img" src={cbdImage} alt={cbdImage} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ConnectWallet;
