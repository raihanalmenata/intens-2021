import React from "react";
import { Card } from "antd";

const {Meta} = Card;

const CardClients = (props) => {
    return (
        <Card
        // cover={<img src={props.data.gambar} alt="img-intens-ihis" />}
        className="card-item bg-blank"
    >
         <Meta
        title={props.data.nama}
        // description="Job/Title"
    ></Meta> 
     </Card>
    )
}

export default CardClients;