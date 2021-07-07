import React from "react";
import { Row, Col } from "antd";
import Service from "./component/Service";

import "./Services.less";

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="title">
                    <div className="text">
                        <p>Our</p>
                        <h1>Services</h1>
                        <p>We are here to provide support for customers in <span>digital transformation</span></p>
                    </div>
                    <div className="icon">

                    </div>
                </div>
                <Row>
                    <Col span={12}>
                        <Service />
                    </Col>
                    <Col span={12}>
                        <Service />
                    </Col>
                    <Col span={12}>
                        <Service />
                    </Col>
                    <Col span={12}>
                        <Service />
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Services;
