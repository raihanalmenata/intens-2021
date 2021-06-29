import React from "react";
import { Row, Col } from "antd";
import Logo from "./Logo";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <Row justify="space-between">
                    <Col md={6}>
                        <Logo />
                    </Col>
                    <Col span={6}>
                        <ul>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </header>
    )
}

export default Header;