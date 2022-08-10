import { Button } from "antd";
import React from "react";
import useCapxWalletConnection from "../../../useCapxWalletConnection";
import { SvgIcon } from "../../common";
import "./index.less";

const NavigationBar = () => {
  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate,
    chainId,
    switchNetwork,
    provider,
    providerSolana,
    isSolana,
    phantomDisconnect,
    phantomPublicKey,
    solanaConnection,
    randomKey,
    phantomConnect,
    hasPhantom,
    anchorProgram,
  } = useCapxWalletConnection();

  return (
    <div className="main-header">
      <div className="container-section">
        <div className="main-header-inner">
          <div className="logo">
            <SvgIcon name="logo" viewbox="0 0 177.093 31.204" />
          </div>
          <div className="right">
            {active ? (
              <Button
                className="with-icon connected-btn"
                size="small"
                onClick={() => phantomDisconnect()}
                icon={<SvgIcon name="logout" viewbox="0 0 15.85 15.85" />}
              >
                {phantomPublicKey?.toBase58().toString()?.substr(0, 6)}...
                {phantomPublicKey?.toBase58().toString()?.substr(-4)}
              </Button>
            ) : hasPhantom ? (
              <Button
                className="with-icon disconnected-btn"
                size="small"
                icon={<SvgIcon name="logout" viewbox="0 0 15.85 15.85" />}
                onClick={() => {
                  phantomConnect();
                }}
              >
                CONNECT
              </Button>
            ) : (
              <Button
                className="with-icon disconnected-btn"
                size="small"
                onClick={() => {
                  window.open("https://phantom.app/");
                }}
              >
                GET PHANTOM
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
