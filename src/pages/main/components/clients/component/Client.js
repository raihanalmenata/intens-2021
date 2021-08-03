import React from "react";
import { Row, Col, Card } from "antd";

import "./Client.less";


const Client = () => {
    return (
        <div className="client">
                <Row>
                    <Col span={6}>
                        <Card
                            className="card-item bg-blank"
                        >
                            {/* <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta> */}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Card
                            className="card-item bg-blank"
                        >
                            {/* <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta> */}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={6} offset={6}>
                        <Card
                            className="card-item bg-blank"
                        >
                            {/* <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta> */}
                        </Card>
                    </Col>
                    <Col span={12}>
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