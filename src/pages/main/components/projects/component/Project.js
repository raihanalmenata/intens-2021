import React from "react";
import { Col, Row } from "antd";
// import imgIntentsIhis from "../../../../../assets/img/image-intens-ihis.png";
// import imgIntensPlato from "../../../../../assets/img/image-intens-plato.png";
// import imgIntensEvoting from "../../../../../assets/img/image-e-voting.png";
import "./Project.less";
// import axios from "axios";
import { useRequest } from "ahooks";
import CardProject from "./CardProject";

// const { Meta } = Card;



const Project = () => {

    const { data: projects } = useRequest('https://intens.herokuapp.com/projects');

    return (

        <div className="Project">
            <Row>
                {projects && projects.map((project, i) => (
                    <Col key={`project${i}`}>
                        <CardProject data={project} />
                    </Col>
                ))}

            </Row>

           {/* <Row justify="center">
                <Col lg={8} sm={12}>
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
                <Col lg={8} sm={12}>
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
                <Col lg={8} sm={12}>
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
            </Row>  */}
        </div>
    )
}

export default Project;