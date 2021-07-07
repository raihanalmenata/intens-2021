import React from "react";
import { Row, Col } from "antd";
import "./Projects.less";

const Projects = () => {
    return (
        <div className="projects">
            <div className="container">
                <div className="title">
                    <div className="text">
                        <h1>We in <span>Numbers.</span></h1>
                        <p>We are here to provide support for customers in digital transformation </p>
                    </div>
                </div>
                <div>
                    <Row>
                        <Col span={8}>400</Col>
                        <Col span={8}>200</Col>
                        <Col span={8}>1</Col>
                    </Row>
                </div>
                <div className="title">
                    <div className="text">
                        <h1>Projects</h1>
                        <p>We are here to provide support for customers in digital transformation </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;