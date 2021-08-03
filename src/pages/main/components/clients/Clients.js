import React from "react";

import Client from "./component/Client";
import "./Clients.less";

const Clients = () => {
    return (
        <div className="clients">
            <div className="container">
                <div className="title">
                    <p>Remarkable</p>
                    <h1>Clients</h1>
                    <p>Our remarkable clients throughout the year</p>
                    <hr />
                </div>
                <Client />
            </div>
        </div>
    )
}

export default Clients;