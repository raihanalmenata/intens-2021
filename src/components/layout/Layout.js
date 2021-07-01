import React from "react";
import { Content } from "antd/lib/layout/layout";
import Header from "../header/Header";
import Home from "../../pages/home/Home";
import Services from "../../pages/services/Services";
import Values from "../../pages/values/Values";

const Layout = () => {
    return (
        <>
            <Header />
            <Content>
                <Home />
                <Services />
                <Values />
            </Content>
        </>
    );
};

export default Layout;