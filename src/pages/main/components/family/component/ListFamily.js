import React from "react";
import { Row, Col, Card } from "antd";
import "./ListFamily.less";

const { Meta } = Card;

const ListFamily = () => {
    return (
        <div className="ListFamily">
            <Row justify="center">
                <Col lg={8} sm={12}>
                    <Card
                        className="card-item bg-family"
                    >
                        <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta>
                    </Card>
                </Col>
                <Col lg={8} sm={12}>
                    <Card
                        className="card-item bg-family"
                    >
                        <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta>
                    </Card>
                </Col>
                <Col lg={8} sm={12}>
                    <Card
                        className="card-item bg-family"
                    >
                        <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ListFamily;