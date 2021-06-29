import React from "react";
import { Row, Col } from "antd";
import intensLogo from "../../assets/img/intens-logo.png";
import "./Home.css";

const Home = () => {
    return (
        <Row>
            <Col span={12}>
                <h1> Enhancing <br/> Digital <br/> Transformation </h1>
                <p>
                    We are here to provide support for customers in digital transformation through effective implementation of information technology.
                </p>
            </Col>
            <Col span={12}>
                <img alt="Intens-logo" src={intensLogo} />
            </Col>
        </Row>
    )
}

export default Home;