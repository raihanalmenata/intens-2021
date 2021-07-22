import React from "react";
import { Row, Col } from "antd";
import "./Footer.less";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="background-image">
                <div className="container">
                    <div className="content">
                        <Row>
                            <Col span={8}>
                                    <h3>About</h3>
                                    <p>Intens is intended to contribute in the development of  clients„ business by providing solutions in terms of products and process in the field of content, applications and other information-technology-based value-added services.</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <h3>Products</h3>
                                <p>Hospital Information System
                                    Automatic Calculation Vehicle
                                    Electronic Voting</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <h3>Contact</h3>
                                <p>+62 22 5201769 <br />
                                    GKP 2nd Floor, Jl. M Toha 77, Bandung, Jawa Barat <br />
                                    9:00 – 16:00 (Mon – Fri) <br />
                                    info@intens.co.id</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;