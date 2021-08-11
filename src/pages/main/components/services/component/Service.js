import React from "react";
import { Card, Col, Row } from "antd";
import iconDesign from "../../../../../assets/img/icon-design.png";
import iconContentDigital from "../../../../../assets/img/icon-content-digital.png";
import iconServicesItManaged from "../../../../../assets/img/icon-services-it-managed.png";
import iconSolutionIctInfrastructure from "../../../../../assets/img/icon-solution-ict-infrastructure.png";

import "./service.less";

const { Meta } = Card;

const Service = () => {
    return (
        <div className="service">
            <Row>
                <Col lg={12} md={12} sm={24}>
                    <Card
                        className="card-item bg-up"
                        cover={<img src={iconDesign} alt="icon-design" />}
                    >
                        <Meta
                            title="Design"
                            description="Artificial Intelligence-API, Design and Development, Data mining, Data Warehouse and Business Intelegent"
                        ></Meta>
                    </Card>
                </Col>
                <Col lg={12} md={12} sm={24}>
                    <Card
                        className="card-item bg-up"
                        cover={<img src={iconContentDigital} alt="icon-content-digital" />}
                    >
                        <Meta
                            title="Design"
                            description="Certification Authority-Tanda Tangan Digital, Web Application, Mobile Application, Digital content, Mobile application, Animation and Game Apps"
                        ></Meta>
                    </Card>
                </Col>
                <Col lg={12} md={12} sm={24}>
                    <Card
                        className="card-item bg-down"
                        cover={<img src={iconServicesItManaged} alt="icon-services-managed" />}
                    >
                        <Meta
                            title="Design"
                            description="IoT Managed Services. Electronic Data Capture. Notebook. Telelemetry System. Bigdata Infrastructure. Image Processing IT equipment."
                        ></Meta>
                    </Card>
                </Col>
                <Col lg={12} md={12} sm={24}>
                    <Card
                        className="card-item bg-down"
                        cover={<img src={iconSolutionIctInfrastructure} alt="icon-solution-ict-infrastructure" />}
                    >
                        <Meta
                            title="Design"
                            description="Solution ICT Infrastructure, Procurement of Telecommunications Equipment and other IT Hardware"
                        ></Meta>
                    </Card>
                </Col> 
            </Row>
        </div>
    )
}

export default Service;

