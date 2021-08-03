import React from "react";
import { Row, Col } from "antd";
import "./Footer.less";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="background-image">
                <div className="container">
                    <div className="content">
                        <Row justify="center">
                            <Col lg={8} sm={12}>
                                <h3>About</h3>
                                <p>Intens is intended to contribute in the development of  clients„ business by providing solutions in terms of products and process in the field of content, applications and other information-technology-based value-added services.</p>
                            </Col>
                            <Col lg={7} sm={11} offset={1}>
                                <h3>Products</h3>
                                <p>Hospital Information System <br />
                                    Automatic Calculation Vehicle <br />
                                    Electronic Voting</p>
                            </Col>
                            <Col lg={7} sm={12} offset={1}>
                                <h3>Contact</h3>
                                <p>+62 22 5201769 <br />
                                    GKP 2nd Floor, Jl. M Toha 77, Bandung, Jawa Barat <br />
                                    9:00 – 16:00 (Mon – Fri) <br />
                                    info@intens.co.id</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2021 PT INTI KONTEN INDONESIA.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;