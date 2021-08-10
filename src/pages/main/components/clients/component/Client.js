import React from "react";
import { Row, Col, Card } from "antd";
import { useRequest } from "ahooks";

import "./Client.less";
import CardClients from "./CardClients";

const Client = () => {

    const { data: clients } = useRequest("https://intens.herokuapp.com/clients");

    return (
        <div className="client">
                <Row justify="center">
                    {clients && clients.map((client, i) => (
                        <Col key={`client${i}`}>
                            <CardClients data={client} />
                        </Col>
                    ))}
                    {/* <Col lg={6} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        > */}
                            {/* <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta> */}
                        {/* </Card>
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
                        > */}
                            {/* <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta> */}
                        {/* </Card>
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
                        > */}
                            {/* <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta> */}
                        {/* </Card>
                    </Col>
                    <Col lg={12} sm={12}>
                        <Card
                            className="card-item bg-blank"
                        >
                        </Card>
                    </Col> */}
                </Row>
            </div>
    )
}

export default Client;