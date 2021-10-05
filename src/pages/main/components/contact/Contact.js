import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import iconPhone from "../../../../assets/img/icon-phone.png";
import "./Contact.less";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">

                <div className="bg-contactus">
                    <div className="content-contact">
                        <div className="text-contact">
                            <h1>Contact Us</h1>
                            <p>+62 22 5201769 <br />
                                GKP 2nd Floor, Jl. M Toha 77, Bandung, Jawa Barat <br />
                                9:00 – 16:00 (Mon – Fri) <br />
                                info@intens.co.id</p>
                        </div>
                        <img src={iconPhone} alt="icon-phone" />
                    </div>
                </div>

                <div className="content-message">
                    <Row>
                        <Col lg={12} sm={24}>
                            <div className="text-message">
                                <p>Leave it</p>
                                <h1>Message</h1>
                                <p>Feel free to leave us your <span className="red">message</span> and <span className="red">contact us</span>.</p>
                            </div>
                        </Col>
                        <Col lg={12} sm={24}>
                            <Form>
                                <Input.TextArea />
                                <Button>Send</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Contact;