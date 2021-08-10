import React from "react";
import { Row, Col, Card } from "antd";
import "./ListFamily.less";
import { useRequest } from "ahooks";

const { Meta } = Card;

const ListFamily = () => {

    const { data: family } = useRequest("https://intens.herokuapp.com/teams");

    return (
        <div className="ListFamily">
            <Row justify="center">
                {family && family.map((family, i) => (
                     <Col key={`family${i}`}>
                     <Card
                         className="card-item bg-family"
                     >
                         <Meta
                             title={family.nama}
                             description={family.jabatan}
                         ></Meta>
                     </Card>
                 </Col>
                ))}
            </Row>
            {/* <Row justify="center">
                <Col lg={8} sm={12}>
                    <Card
                        className="card-item bg-family"
                    >
                        <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta>
                    </Card>
                </Col>
                <Col lg={8} sm={12}>
                    <Card
                        className="card-item bg-family"
                    >
                        <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta>
                    </Card>
                </Col>
                <Col lg={8} sm={12}>
                    <Card
                        className="card-item bg-family"
                    >
                        <Meta
                            title="Name"
                            description="Job/Title"
                        ></Meta>
                    </Card>
                </Col>
            </Row> */}
        </div>
    )
}

export default ListFamily;