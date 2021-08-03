import React from "react";
import { Row, Col, Card } from "antd";

import "./Client.less";


const Client = () => {
    return (
        <div className="client">
                <Row justify="center">
                    <Col lg={6} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        >
                            {/* <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta> */}
                        </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        >
                            {/* <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta> */}
                        </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12} offset={6}>
                        <Card
                            className="card-item bg-blank"
                        >
                            {/* <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta> */}
                        </Card>
                    </Col>
                    <Col lg={12} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                </Row>
            </div>
    )
}

export default Client;