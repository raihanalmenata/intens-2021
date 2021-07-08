import React from "react";
import iconService from "../../assets/img/icon-services.png";
import Service from "./component/Service";

import "./Services.less";
import "./responsive.less";

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="title">
                    <div className="text">
                        <p>Our</p>
                        <h1>Services</h1>
                        <p>Our services provided to support your <span>digital transformation</span></p>
                    </div>
                    <img src={iconService} alt="icon-services" />
                </div>
                <Service />
            </div>
        </div>
    )
}

export default Services;
