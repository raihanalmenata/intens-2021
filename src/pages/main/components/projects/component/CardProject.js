import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const CardProject = (props) => {
    return (
        <>
        <Card
            className="card-item img-ihis"
            // cover={<img src={imgIntentsIhis} alt="img-intens-ihis" />}
        >
            <Meta
                title={props.data.judul}
                description={props.data.deskripsi}
            ></Meta>
        </Card>
    </>
    )
}

export default CardProject;