import React from "react";
import { Row, Col } from "antd";
import Value from "./component/Value";

import "./Values.less";

const Values = () => {
    return (
        <div className="values">
            <div className="container">
                <div className="title">
                    <div className="text">
                        <p>Our</p>
                        <h1>Values</h1>
                        <p>Our commitment and values on our services</p>
                    </div>
                    <div className="icon">

                    </div>
                </div>
                <Row>
                    <Col span={8}>
                        <Value />
                    </Col>
                    <Col span={8}>
                        <Value />
                    </Col>
                    <Col span={8}>
                        <Value />
                    </Col>
                   
                </Row>
            </div>
        </div >
    )
}

export default Values;
