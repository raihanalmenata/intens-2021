import React from "react";
import { Row, Col } from "antd";
import intensLogo from "../../assets/img/intens-logo.png";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                    <Row align="middle" style={{height: 500}}>
                        <Col span={12}>
                            <div className="text">
                                <h1> Enhancing <br /> Digital <br /> Transformation </h1>
                                <p>
                                    We are here to provide support for customers in <span> digital transformation </span> through effective implementation of information technology.
                                </p>
                                <button>Starts here</button>
                            </div>
                        </Col>
                        <Col span={12}>
                            <img alt="Intens-logo" src={intensLogo} />
                        </Col>
                    </Row>
            </div>
        </div>
    )
}

export default Home;