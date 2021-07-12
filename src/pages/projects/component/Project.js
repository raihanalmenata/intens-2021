import React from "react";
import { Col, Row, Card } from "antd";
import imgIntentsIhis from "../../../assets/img/image-intens-ihis.png";
import imgIntensPlato from "../../../assets/img/image-intens-plato.png";
import imgIntensEvoting from "../../../assets/img/image-e-voting.png";
import "./Project.less";

const { Meta } = Card;

const Project = () => {
    return (
        <div className="Project">
                <Row>
                    <Col span={8}>
                        <Card
                            className="card-item img-ihis"
                            cover={<img src={imgIntentsIhis} alt="img-intens-ihis" />}
                        >
                            <Meta
                                title="Intens IHIS"
                                description="Any Description Related to the service ..."
                            ></Meta>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            className="card-item bg-value"
                            cover={<img src={imgIntensPlato} alt="img-intens-plato" />}
                        >
                            <Meta
                                title="Intens Plato"
                                description="Any Description Related to the service ..."
                            ></Meta>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            className="card-item bg-value"
                            cover={<img src={imgIntensEvoting} alt="img-intens-evoting" />}
                        >
                            <Meta
                                title="E-Voting"
                                description="Any Description Related to the service ..."
                            ></Meta>
                        </Card>
                    </Col>
                </Row>
            </div>
    )
}

export default Project;