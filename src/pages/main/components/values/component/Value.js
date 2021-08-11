import React from "react";
import { Row, Col, Card } from "antd";
import iconQuestionMark from "../../../../../assets/img/icon-question-mark.png";
import "./Value.less";

const { Meta } = Card;

const Value = () => {
    return (
        <div className="value">
            <Row  justify="center">
                <Col lg={8} sm={12}>
                    <Card
                        className="card-item bg-value"
                        cover={<img src={iconQuestionMark} alt="icon-design" />}
                    >
                        <Meta
                            title="Value 1"
                            description="Any Description Related to the service"
                        ></Meta>
                    </Card>
                </Col>
                <Col lg={8} sm={12}>
                    <Card
                        className="card-item bg-value"
                        cover={<img src={iconQuestionMark} alt="icon-design" />}
                    >
                        <Meta
                            title="Value 2"
                            description="Any Description Related to the service"
                        ></Meta>
                    </Card>
                </Col>
                <Col lg={8} sm={12}>
                    <Card
                        className="card-item bg-value"
                        cover={<img src={iconQuestionMark} alt="icon-design" />}
                    >
                        <Meta
                            title="Value 3"
                            description="Any Description Related to the service"
                        ></Meta>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Value;