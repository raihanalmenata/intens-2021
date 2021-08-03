import React from "react";
import iconFamily from "../../../../assets/img/icon-family.png";

import ListFamily from "./component/ListFamily";
import "./Family.less";

const Family = () => {
    return (
        <div className="family">
            <div className="container">
                <div className="text-content">
                    <div className="text">
                        <p>We aren’t just coworkers</p>
                        <h1>We are family</h1>
                        <p> <spam className="red">Professionals</spam> behind the scene.</p>
                    </div>
                    <img src={iconFamily} alt="icon-family" />
                </div>
                <ListFamily />
            </div>
        </div>
    )
}

export default Family;