import React from "react";
import { Row, Col } from "antd";
import iconProject from "../../../../assets/img/icon-project.png";
import Project from "./component/Project";
import "./Projects.less";

const Projects = () => {

    return (
        <div className="projects">
            <div className="container">
                <div className="title">
                    <div className="text">
                        <p>We in <span className="title-numbers">Numbers.</span></p>
                        <p>Our <span className="mark-red">commitment</span> and <span className="mark-red">values</span> on our services.</p>
                    </div>
                    <img src={iconProject} alt="icon-services" />
                </div>
                <Row justify="center">
                    <Col lg={8} sm={12}>
                        <div className="number">
                            <h1>400+</h1>
                            <div className="nbr">
                                <p>Happy</p>
                                <p>Clients</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} sm={12}>
                        <div className="number border">
                            <h1>400+</h1>
                            <div className="nbr">
                                <p>Happy</p>
                                <p>Clients</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} sm={12}>
                        <div className="number">
                            <h1>400+</h1>
                            <div className="nbr">
                                <p>Happy</p>
                                <p>Clients</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="title">
                    <div className="text">
                        <p><span className="title-numbers">Projects</span>Collections.</p>
                        <p>We are here to provide support for customers in digital transformation </p>
                    </div>
                </div>
                <Project />
            </div>
        </div >
    )
}

export default Projects;