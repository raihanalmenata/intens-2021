import React from "react";
import Value from "./component/Value";
import iconValues from "../../assets/img/icon-values.png";

import "./Values.less";

const Values = () => {
    return (
        <div className="values">
            <div className="container">
                <div className="title">
                    <div className="text">
                        <p>Our</p>
                        <h1>Values</h1>
                        <p>Our <span>commitment</span> and <span>values</span> on our services.</p>
                    </div>
                    <img src={iconValues} alt="icon-services" />
                </div>
                <Value />
            </div>
        </div >
    )
}

export default Values;
