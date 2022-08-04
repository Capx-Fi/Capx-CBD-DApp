import { Button } from "antd";
import React from "react";
import { SvgIcon } from "../../common";
import "./index.less"

const NavigationBar = () => {
    return (
        <div className="main-header">
            <div className="container-section">
                <div className="main-header-inner">
                    <div className="logo">
                        <SvgIcon name="logo" viewbox="0 0 177.093 31.204" />
                    </div>
                    <div className="right">
                        <Button className="with-icon connected-btn" size="small" icon={<SvgIcon name="logout" viewbox="0 0 15.85 15.85" />}>0x444....897689</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;
