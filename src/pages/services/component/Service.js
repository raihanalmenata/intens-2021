import React from "react";
import { Card } from "antd";
import vektor from "../../../assets/img/Vector.png";

const { Meta } = Card;

const Service = () => {
    return (
        <>
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src={vektor}
                    />
                }
            >
                <Meta
                    title="Service 1"
                    description="Any Description Related to the service ..."
                ></Meta>
            </Card>
            {/* <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src={vektor}
                        style={{ width: "100px" }}
                    />
                }
            >
                <Meta
                    title="Service 1"
                    description="Any Description Related to the service ..."
                ></Meta>
            </Card>
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src={vektor}
                        style={{ width: "100px" }}
                    />
                }
            >
                <Meta
                    title="Service 1"
                    description="Any Description Related to the service ..."
                ></Meta>
            </Card>


            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src={vektor}
                        style={{ width: "100px" }}
                    />
                }
            >
                <Meta
                    title="Service 1"
                    description="Any Description Related to the service ..."
                ></Meta>
            </Card> */}
        </>
    )
}

export default Service;