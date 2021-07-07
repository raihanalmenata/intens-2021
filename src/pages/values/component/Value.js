import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const Value = () => {
    return ( 
        <Card
        className="card-item"
    >
        <Meta
            title="Service 1"
            description="Any Description Related to the service ..."
        ></Meta>
    </Card>
    )
}

export default Value;