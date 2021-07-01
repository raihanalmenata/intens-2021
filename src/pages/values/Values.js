import React from "react";
import { Card, Row, Col } from "antd";

import "./Values.css";

const { Meta } = Card;

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
                        <Card
                            className="card-item"
                        >
                            <Meta
                                title="Service 1"
                                description="Any Description Related to the service ..."
                            ></Meta>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            className="card-item"
                        >
                            <Meta
                                title="Service 1"
                                description="Any Description Related to the service ..."
                            ></Meta>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            className="card-item"
                        >
                            <Meta
                               title="Service 1"
                               description="Any Description Related to the service ..."
                            ></Meta>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Values;
