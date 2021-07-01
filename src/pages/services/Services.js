import React from "react";
import { Card, Row, Col } from "antd";
import vektor from "../../assets/img/Vector.png";

import "./Services.css";



const { Meta } = Card;

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
                        <Card
                            className="card-item"
                            cover={
                                <img
                                    alt="example"
                                    src={vektor}
                                />
                            }
                        >
                            <Meta
                                title="Service 1"
                                description="Any Description Related to the service ..."
                            ></Meta>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            className="card-item"
                            cover={
                                <img
                                    alt="example"
                                    src={vektor}
                                    style={{ width: "100px" }}
                                />
                            }
                        >
                            <Meta
                                title="Service 1"
                                description="Any Description Related to the service ..."
                            ></Meta>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            className="card-item"
                            cover={
                                <img
                                    alt="example"
                                    src={vektor}
                                    style={{ width: "100px" }}
                                />
                            }
                        >
                            <Meta
                               title="Service 1"
                               description="Any Description Related to the service ..."
                            ></Meta>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            className="card-item"
                            cover={
                                <img
                                    alt="example"
                                    src={vektor}
                                    style={{ width: "100px" }}
                                />
                            }
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

export default Services;
